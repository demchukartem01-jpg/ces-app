const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { renderCard } = require('../card');
const { CONTENT, TERMS, SHIPS, HISTORY, POLLS } = require('./config');

const FILE_OPTS = { filename: 'card.png', contentType: 'image/png' };
const CAPTION_LIMIT = 1024;

// Индекс ротации храним в базе — переживает рестарт сервиса.
async function nextIndex(db, key, length) {
  const doc = await db.collection('content_state').findOneAndUpdate(
    { _id: key },
    { $inc: { i: 1 } },
    { upsert: true, returnDocument: 'after' }
  );
  const i = ((doc.value && doc.value.i) || 0) % length;
  return i;
}

async function sendCard(bot, chatId, title, tag, source, caption) {
  const png = renderCard(title, tag, source);

  if (png && caption.length <= CAPTION_LIMIT) {
    return bot.sendPhoto(chatId, png, { caption, parse_mode: 'HTML' }, FILE_OPTS);
  }
  if (png) {
    await bot.sendPhoto(chatId, png, {}, FILE_OPTS).catch(() => {});
  }
  return bot.sendMessage(chatId, caption, { parse_mode: 'HTML', disable_web_page_preview: true });
}

// ── Term of the week ─────────────────────────────────────────────────────
async function postTerm(bot, chatId, db) {
  const i = await nextIndex(db, 'term', TERMS.length);
  const t = TERMS[i];

  const caption = [
    `📖 <b>Term of the week: ${t.term}</b>`,
    '',
    t.def,
  ].join('\n');

  return sendCard(bot, chatId, t.term, 'Glossary', 'TERM OF THE WEEK', caption);
}

// ── Ship spotlight ────────────────────────────────────────────────────────
async function postShip(bot, chatId, db) {
  const i = await nextIndex(db, 'ship', SHIPS.length);
  const s = SHIPS[i];

  const caption = [
    `🚢 <b>Ship spotlight: ${s.title}</b>`,
    '',
    s.fact,
  ].join('\n');

  return sendCard(bot, chatId, s.title, 'Spotlight', 'SHIP SPOTLIGHT', caption);
}

// ── Maritime history ──────────────────────────────────────────────────────
// Проверяет календарь на сегодняшнее MM-DD. Ничего не нашлось — молчим,
// это не ошибка, просто не каждый день есть годовщина.
async function postHistory(bot, chatId) {
  const md = new Date().toISOString().slice(5, 10);
  const h = HISTORY.find((x) => x.date === md);
  if (!h) return null;

  const caption = [
    `⚓ <b>On this day: ${h.title}</b>`,
    '',
    h.fact,
  ].join('\n');

  return sendCard(bot, chatId, h.title, 'History', 'MARITIME HISTORY', caption);
}

// ── Weekly poll ───────────────────────────────────────────────────────────
async function postPoll(bot, chatId, db) {
  const i = await nextIndex(db, 'poll', POLLS.length);
  const p = POLLS[i];

  return bot.sendPoll(chatId, p.question, p.options, {
    is_anonymous: true,
    allows_multiple_answers: false,
  });
}

// ── Расписание и ручные команды ────────────────────────────────────────────
function startContent(bot, db) {
  const target = () => CONTENT.MODERATION ? process.env.ADMIN_CHAT_ID : process.env.CHANNEL_ID;

  cron.schedule(CONTENT.TERM_CRON,    () => postTerm(bot, target(), db).catch((e) => console.error('[content:term]', e.message)));
  cron.schedule(CONTENT.SHIP_CRON,    () => postShip(bot, target(), db).catch((e) => console.error('[content:ship]', e.message)));
  cron.schedule(CONTENT.HISTORY_CRON, () => postHistory(bot, target()).catch((e) => console.error('[content:history]', e.message)));
  cron.schedule(CONTENT.POLL_CRON,    () => postPoll(bot, target(), db).catch((e) => console.error('[content:poll]', e.message)));

  // Ручной запуск для проверки — только тебе, публикует сразу в канал
  const guard = (msg) => String(msg.chat.id) === String(process.env.ADMIN_CHAT_ID);

  bot.onText(/\/term/, async (msg) => {
    if (!guard(msg)) return;
    await postTerm(bot, process.env.CHANNEL_ID, db);
  });
  bot.onText(/\/ship/, async (msg) => {
    if (!guard(msg)) return;
    await postShip(bot, process.env.CHANNEL_ID, db);
  });
  bot.onText(/\/history/, async (msg) => {
    if (!guard(msg)) return;
    const r = await postHistory(bot, process.env.CHANNEL_ID);
    if (!r) await bot.sendMessage(msg.chat.id, 'Сегодня в календаре ничего нет.');
  });
  bot.onText(/\/poll/, async (msg) => {
    if (!guard(msg)) return;
    await postPoll(bot, process.env.CHANNEL_ID, db);
  });

  console.log('[content] рубрики запущены — term:', CONTENT.TERM_CRON,
              '| ship:', CONTENT.SHIP_CRON, '| history:', CONTENT.HISTORY_CRON,
              '| poll:', CONTENT.POLL_CRON, '| автопубликация:', !CONTENT.MODERATION);
}

module.exports = { startContent, postTerm, postShip, postHistory, postPoll };
