const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { ObjectId } = require('mongodb');
const { DIGEST } = require('./config');
const { buildDigest, buildRegulatory } = require('./blocks');

let database;

const COVER = path.join(__dirname, 'cover.png');
// Обложка регуляторного поста — переиспользуем ту, что уже есть у новостей
const REG_COVER = path.join(__dirname, '..', 'covers', 'regulation.png');

const OPTS = { parse_mode: 'HTML', disable_web_page_preview: true };

// Подпись под фото — 1024 символа, обычное сообщение — 4096.
const CAPTION_LIMIT = 1024;

// Явный тип файла — иначе библиотека сыплет DeprecationWarning в логи.
const FILE_OPTS = { filename: 'cover.png', contentType: 'image/png' };

// Влезает — одним сообщением с подписью. Не влезает — картинка и текст раздельно.
async function deliver(bot, chatId, text, extra, coverPath) {
  const COVER_FILE = coverPath || COVER;
  const hasCover = fs.existsSync(COVER_FILE);

  if (hasCover && text.length <= CAPTION_LIMIT) {
    return bot.sendPhoto(chatId, COVER_FILE, Object.assign({
      caption: text,
      parse_mode: 'HTML',
    }, extra || {}), FILE_OPTS);
  }

  if (hasCover) {
    await bot.sendPhoto(chatId, COVER_FILE, {}, FILE_OPTS)
      .catch((e) => console.error('[digest:cover]', e.message));
  }
  return bot.sendMessage(chatId, text, Object.assign({}, OPTS, extra || {}));
}

// Хэш содержимого без строки с датой — чтобы сравнивать именно данные.
function contentHash(text) {
  const body = text.split('\n').slice(1).join('\n');
  return crypto.createHash('sha1').update(body).digest('hex');
}

// Собираем сводку и сохраняем — кнопке нужно, что именно публиковать.
// force = true у ручной команды /digest: она собирает всегда.
async function prepare(force) {
  const text = await buildDigest(database);
  if (!text) return null;

  const hash = contentHash(text);

  if (!force && DIGEST.SKIP_IF_UNCHANGED) {
    const last = await database.collection('digests').findOne(
      { status: 'published' }, { sort: { publishedAt: -1 } }
    );
    if (last && last.hash === hash) return { unchanged: true };
  }

  const res = await database.collection('digests').insertOne({
    text, hash, createdAt: new Date(), status: 'draft',
  });

  return { text, id: res.insertedId };
}

const reviewKeyboard = (id) => ({
  reply_markup: {
    inline_keyboard: [[
      { text: '✅ В канал',  callback_data: `digest:ok:${id}` },
      { text: '🗑 Отменить', callback_data: `digest:no:${id}` },
    ]],
  },
});

// Ежедневный запуск
async function runDaily(bot, moderation) {
  try {
    const d = await prepare();
    if (!d) {
      console.error('[digest] все блоки пустые, сводка не отправлена');
      return;
    }
    if (d.unchanged) {
      console.log('[digest] содержимое не изменилось — пропускаем');
      return;
    }

    if (moderation) {
      await deliver(bot, process.env.ADMIN_CHAT_ID, d.text, reviewKeyboard(d.id));
      console.log('[digest] черновик отправлен на модерацию');
    } else {
      await deliver(bot, process.env.CHANNEL_ID, d.text);
      await database.collection('digests').updateOne(
        { _id: d.id }, { $set: { status: 'published', publishedAt: new Date() } }
      );
      console.log('[digest] сводка опубликована');
    }
  } catch (e) {
    console.error('[digest] отправка:', e.message);
  }
}

// Свой обработчик кнопок. Отдельный слушатель — server.js менять не нужно.
async function handleDigestCallback(bot, cb) {
  if (!cb.data || cb.data.indexOf('digest:') !== 0) return false;

  const [, action, id] = cb.data.split(':');

  try {
    const doc = await database.collection('digests').findOne({ _id: new ObjectId(String(id)) });

    if (!doc) {
      await bot.answerCallbackQuery(cb.id, { text: 'Сводка не найдена' });
      return true;
    }

    if (action === 'ok') {
      await deliver(bot, process.env.CHANNEL_ID, doc.text);
      await database.collection('digests').updateOne(
        { _id: doc._id }, { $set: { status: 'published', publishedAt: new Date() } }
      );
      await bot.answerCallbackQuery(cb.id, { text: 'Опубликовано' });
    } else {
      await database.collection('digests').updateOne(
        { _id: doc._id }, { $set: { status: 'rejected' } }
      );
      await bot.answerCallbackQuery(cb.id, { text: 'Отменено' });
    }

    await bot.editMessageReplyMarkup(
      { inline_keyboard: [] },
      { chat_id: cb.message.chat.id, message_id: cb.message.message_id }
    );
  } catch (e) {
    console.error('[digest:callback]', e.message);
    await bot.answerCallbackQuery(cb.id, { text: 'Ошибка: ' + e.message });
  }

  return true;
}

// Регуляторный пост — выходит только в дни крупных вех.
async function runRegulatory(bot, moderation) {
  try {
    const text = buildRegulatory(new Date());
    if (!text) return;   // сегодня вех нет — молчим

    const target = moderation ? process.env.ADMIN_CHAT_ID : process.env.CHANNEL_ID;
    await deliver(bot, target, text, null, REG_COVER);
    console.log('[digest] регуляторный пост отправлен');
  } catch (e) {
    console.error('[digest:regulatory]', e.message);
  }
}

function startDigest(bot, db, moderation) {
  database = db;

  // Флаг сводки имеет приоритет над общим — модерация новостей не задевается.
  const mod = (DIGEST.MODERATION !== undefined) ? DIGEST.MODERATION : moderation;

  cron.schedule(DIGEST.CRON, () => runDaily(bot, mod));
  cron.schedule(DIGEST.REG_CRON, () => runRegulatory(bot, mod));

  bot.on('callback_query', (cb) => {
    handleDigestCallback(bot, cb).catch((e) => console.error('[digest]', e.message));
  });

  // /digest — собрать прямо сейчас, с кнопкой публикации. Только для тебя.
  bot.onText(/\/digest/, async (msg) => {
    if (String(msg.chat.id) !== String(process.env.ADMIN_CHAT_ID)) return;

    await bot.sendMessage(msg.chat.id, 'Собираю сводку…');
    try {
      const d = await prepare(true);
      if (!d) return bot.sendMessage(msg.chat.id, 'Все блоки пустые — смотри логи.');
      await deliver(bot, msg.chat.id, d.text, reviewKeyboard(d.id));
    } catch (e) {
      await bot.sendMessage(msg.chat.id, 'Ошибка: ' + e.message);
    }
  });

  // /reg — собрать регуляторный пост прямо сейчас, для проверки
  bot.onText(/\/reg/, async (msg) => {
    if (String(msg.chat.id) !== String(process.env.ADMIN_CHAT_ID)) return;
    const text = buildRegulatory(new Date());
    if (!text) {
      return bot.sendMessage(msg.chat.id,
        'Сегодня крупных вех нет — пост не выйдет. Это нормально.');
    }
    await deliver(bot, msg.chat.id, text, null, REG_COVER);
  });

  console.log('[digest] сводка запущена, расписание:', DIGEST.CRON,
              '| регуляторный:', DIGEST.REG_CRON, '| автопубликация:', !mod);
}

module.exports = { startDigest, handleDigestCallback };
