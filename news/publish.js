const fs = require('fs');
const path = require('path');
const { EMOJI } = require('./config');
const { renderCard } = require('./card');
const { setStatus, getById } = require('./store');

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Подпись к фото — 1024 символа. Текстовое сообщение — 4096.
const CAPTION_LIMIT = 1024;

// Явный тип файла — иначе библиотека сыплет DeprecationWarning в логи.
const FILE_OPTS = { filename: 'card.png', contentType: 'image/png' };

const firstTag = (d) => (d.tags && d.tags[0] || '').toLowerCase();

const emojiFor = (d) => EMOJI[firstTag(d)] || EMOJI.default;

// Готовая обложка по теме — запасной вариант, если карточка не отрисовалась.
function coverFor(d) {
  const tag = firstTag(d);
  if (!tag) return null;
  const file = path.join(__dirname, 'covers', tag + '.png');
  return fs.existsSync(file) ? file : null;
}

// Уникальная карточка под конкретный пост: свой заголовок, свой цвет темы.
// Не вышло — молча откатываемся на статичную обложку, пост всё равно уйдёт.
function imageFor(d, source) {
  const png = renderCard(d.title_en, firstTag(d), source);
  return png || coverFor(d);
}

// Английская часть — одинаковая в обоих вариантах.
function head(d, link, source) {
  return [
    `${emojiFor(d)} <b>${esc(d.title_en)}</b>`,
    '',
    esc(d.body_en),
    '',
    `🧭 <i>On board:</i> ${esc(d.onboard_en)}`,
    '',
    `<a href="${esc(link)}">${esc(source)}</a>`,
  ];
}

const tagLine = (d) => (d.tags || []).map((t) => '#' + t).join(' ');

// Пост только на английском. Читателям с премиумом Telegram переводит сам.
function renderCaption(d, link, source) {
  return head(d, link, source).concat(['', tagLine(d)]).join('\n');
}

// Тот же текст — используется, когда обложки нет и уходим сообщением.
const renderFull = renderCaption;

// Есть обложка и подпись влезает — шлём фото. Иначе текстом, но с полным русским.
async function send(bot, chatId, doc, extra) {
  const d = doc.draft;
  const cover = imageFor(d, doc.source);
  const opts = Object.assign({ parse_mode: 'HTML' }, extra || {});

  if (cover) {
    const caption = renderCaption(d, doc.link, doc.source);
    if (caption.length <= CAPTION_LIMIT) {
      return bot.sendPhoto(chatId, cover, Object.assign({ caption }, opts), FILE_OPTS);
    }
  }

  return bot.sendMessage(
    chatId,
    renderFull(d, doc.link, doc.source),
    Object.assign({ disable_web_page_preview: true }, opts)
  );
}

const publishToChannel = (bot, doc) => send(bot, process.env.CHANNEL_ID, doc);

const sendForReview = (bot, doc) => send(bot, process.env.ADMIN_CHAT_ID, doc, {
  reply_markup: {
    inline_keyboard: [[
      { text: '✅ Опубликовать', callback_data: `news:ok:${doc._id}` },
      { text: '🗑 Удалить',      callback_data: `news:no:${doc._id}` },
    ]],
  },
});

async function handleNewsCallback(bot, cb) {
  if (!cb.data || cb.data.indexOf('news:') !== 0) return false;

  const parts = cb.data.split(':');
  const action = parts[1];
  const doc = await getById(parts[2]);

  if (!doc) {
    await bot.answerCallbackQuery(cb.id, { text: 'Не найдено' });
    return true;
  }

  try {
    if (action === 'ok') {
      await publishToChannel(bot, doc);
      await setStatus(doc._id, 'published', { publishedAt: new Date() });
      await bot.answerCallbackQuery(cb.id, { text: 'Опубликовано' });
    } else {
      await setStatus(doc._id, 'rejected');
      await bot.answerCallbackQuery(cb.id, { text: 'Удалено' });
    }

    await bot.editMessageReplyMarkup(
      { inline_keyboard: [] },
      { chat_id: cb.message.chat.id, message_id: cb.message.message_id }
    );
  } catch (e) {
    console.error('[news:callback]', e.message);
    await bot.answerCallbackQuery(cb.id, { text: 'Ошибка: ' + e.message });
  }

  return true;
}

module.exports = { renderCaption, renderFull, publishToChannel, sendForReview, handleNewsCallback };
