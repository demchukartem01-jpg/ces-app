const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { ObjectId } = require('mongodb');
const { DIGEST } = require('./config');
const { buildDigest, buildRegulatory } = require('./blocks');

let database;

const COVER     = path.join(__dirname, 'cover.png');
const REG_COVER = path.join(__dirname, '..', 'covers', 'regulation.png');

const FILE_OPTS = { filename: 'cover.png', contentType: 'image/png' };
const CAPTION_LIMIT = 1024;
const OPTS = { parse_mode: 'HTML', disable_web_page_preview: true };

// Влезает в подпись — одним сообщением. Нет — картинка и текст раздельно.
async function deliver(bot, chatId, text, extra, coverPath) {
  const cover = coverPath || COVER;
  const hasCover = fs.existsSync(cover);

  if (hasCover && text.length <= CAPTION_LIMIT) {
    return bot.sendPhoto(chatId, cover,
      Object.assign({ caption: text, parse_mode: 'HTML' }, extra || {}), FILE_OPTS);
  }

  if (hasCover) {
    await bot.sendPhoto(chatId, cover, {}, FILE_OPTS)
      .catch((e) => console.error('[digest:cover]', e.message));
  }
  return bot.sendMessage(chatId, text, Object.assign({}, OPTS, extra || {}));
}

// Хэш без строки с датой — сравниваем данные, а не заголовок.
const contentHash = (text) =>
  crypto.createHash('sha1').update(text.split('\n').slice(1).join('\n')).digest('hex');

// Сохраняем черновик — кнопке нужно знать, что публиковать и с какой обложкой.
async function saveDraft(text, cover) {
  const res = await database.collection('digests').insertOne({
    text, cover: cover || null, hash: contentHash(text),
    createdAt: new Date(), status: 'draft',
  });
  return res.insertedId;
}

const reviewKeyboard = (id) => ({
  reply_markup: {
    inline_keyboard: [[
      { text: '✅ В канал',  callback_data: `digest:ok:${id}` },
      { text: '🗑 Отменить', callback_data: `digest:no:${id}` },
    ]],
  },
});

// ── Публичные действия, ими же пользуется панель ────────────────────────

// force = true: собрать всегда, не проверяя совпадение с прошлой публикацией
async function sendDigestNow(bot, chatId, force) {
  const text = await buildDigest(database);
  if (!text) return { empty: true };

  if (!force && DIGEST.SKIP_IF_UNCHANGED) {
    const last = await database.collection('digests').findOne(
      { status: 'published', kind: { $ne: 'reg' } }, { sort: { publishedAt: -1 } }
    );
    if (last && last.hash === contentHash(text)) return { unchanged: true };
  }

  const id = await saveDraft(text, null);
  await deliver(bot, chatId, text, reviewKeyboard(id), null);
  return { ok: true };
}

async function sendRegulatoryNow(bot, chatId) {
  const text = buildRegulatory(new Date());
  if (!text) return { empty: true };

  const id = await saveDraft(text, REG_COVER);
  await deliver(bot, chatId, text, reviewKeyboard(id), REG_COVER);
  return { ok: true };
}

// ── Расписание ──────────────────────────────────────────────────────────

async function runScheduled(bot, moderation, kind) {
  try {
    const target = moderation ? process.env.ADMIN_CHAT_ID : process.env.CHANNEL_ID;

    if (moderation) {
      const r = kind === 'reg'
        ? await sendRegulatoryNow(bot, target)
        : await sendDigestNow(bot, target);
      if (r.unchanged) console.log('[digest] содержимое не изменилось — пропускаем');
      return;
    }

    // Автопубликация — сразу в канал, без кнопок
    const text = kind === 'reg' ? buildRegulatory(new Date()) : await buildDigest(database);
    if (!text) return;

    if (kind !== 'reg' && DIGEST.SKIP_IF_UNCHANGED) {
      const last = await database.collection('digests').findOne(
        { status: 'published', kind: { $ne: 'reg' } }, { sort: { publishedAt: -1 } }
      );
      if (last && last.hash === contentHash(text)) {
        console.log('[digest] содержимое не изменилось — пропускаем');
        return;
      }
    }

    await deliver(bot, target, text, null, kind === 'reg' ? REG_COVER : null);
    await database.collection('digests').insertOne({
      text, hash: contentHash(text), kind: kind || 'digest',
      status: 'published', publishedAt: new Date(), createdAt: new Date(),
    });
    console.log('[digest] опубликовано:', kind || 'digest');
  } catch (e) {
    console.error('[digest:scheduled]', e.message);
  }
}

// ── Кнопки публикации ───────────────────────────────────────────────────

async function handleDigestCallback(bot, cb) {
  if (!cb.data || cb.data.indexOf('digest:') !== 0) return false;

  const [, action, id] = cb.data.split(':');

  try {
    const doc = await database.collection('digests').findOne({ _id: new ObjectId(String(id)) });
    if (!doc) {
      await bot.answerCallbackQuery(cb.id, { text: 'Не найдено' });
      return true;
    }

    if (action === 'ok') {
      await deliver(bot, process.env.CHANNEL_ID, doc.text, null, doc.cover);
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
  const mod = (DIGEST.MODERATION !== undefined) ? DIGEST.MODERATION : moderation;

  cron.schedule(DIGEST.CRON,     () => runScheduled(bot, mod, 'digest'));
  cron.schedule(DIGEST.REG_CRON, () => runScheduled(bot, mod, 'reg'));

  bot.on('callback_query', (cb) => {
    handleDigestCallback(bot, cb).catch((e) => console.error('[digest]', e.message));
  });

  // Панель администратора
  require('../admin').startAdmin(bot, db, { sendDigestNow, sendRegulatoryNow });

  console.log('[digest] сводка запущена, расписание:', DIGEST.CRON,
              '| регуляторный:', DIGEST.REG_CRON, '| автопубликация:', !mod);
}

module.exports = { startDigest, sendDigestNow, sendRegulatoryNow, handleDigestCallback };
