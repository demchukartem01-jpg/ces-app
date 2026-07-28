const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { ObjectId } = require('mongodb');
const { DIGEST } = require('./config');
const { buildDigest } = require('./blocks');

let database;

const COVER = path.join(__dirname, 'cover.png');

const OPTS = { parse_mode: 'HTML', disable_web_page_preview: true };

// Сводка длинная — картинка отдельным сообщением, текст следом.
// Так не упираемся в лимит подписи 1024.
async function deliver(bot, chatId, text, extra) {
  if (fs.existsSync(COVER)) {
    await bot.sendPhoto(chatId, COVER).catch((e) => console.error('[digest:cover]', e.message));
  }
  return bot.sendMessage(chatId, text, Object.assign({}, OPTS, extra || {}));
}

// Собираем сводку и сохраняем — кнопке нужно, что именно публиковать.
async function prepare() {
  const text = await buildDigest(database);
  if (!text) return null;

  const res = await database.collection('digests').insertOne({
    text, createdAt: new Date(), status: 'draft',
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

function startDigest(bot, db, moderation) {
  database = db;

  // Флаг сводки имеет приоритет над общим — модерация новостей не задевается.
  const mod = (DIGEST.MODERATION !== undefined) ? DIGEST.MODERATION : moderation;

  cron.schedule(DIGEST.CRON, () => runDaily(bot, mod));

  bot.on('callback_query', (cb) => {
    handleDigestCallback(bot, cb).catch((e) => console.error('[digest]', e.message));
  });

  // /digest — собрать прямо сейчас, с кнопкой публикации. Только для тебя.
  bot.onText(/\/digest/, async (msg) => {
    if (String(msg.chat.id) !== String(process.env.ADMIN_CHAT_ID)) return;

    await bot.sendMessage(msg.chat.id, 'Собираю сводку…');
    try {
      const d = await prepare();
      if (!d) return bot.sendMessage(msg.chat.id, 'Все блоки пустые — смотри логи.');
      await deliver(bot, msg.chat.id, d.text, reviewKeyboard(d.id));
    } catch (e) {
      await bot.sendMessage(msg.chat.id, 'Ошибка: ' + e.message);
    }
  });

  console.log('[digest] сводка запущена, расписание:', DIGEST.CRON, '| автопубликация:', !mod);
}

module.exports = { startDigest, handleDigestCallback };
