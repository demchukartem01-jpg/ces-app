const fs = require('fs');
const path = require('path');
const { setStatus, getById } = require('./store');

// Telegram HTML-режим ломается на <, >, &
const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Подпись к фото — максимум 1024 символа. Текстовое сообщение — 4096.
const CAPTION_LIMIT = 1024;

// Обложка по первому тегу. Нет подходящей — вернём null, уйдёт без картинки.
function coverFor(draft) {
  const tag = (draft.tags && draft.tags[0] || '').toLowerCase();
  if (!tag) return null;
  const file = path.join(__dirname, 'covers', tag + '.png');
  return fs.existsSync(file) ? file : null;
}

// Полная версия: EN сверху, RU в разворачиваемой цитате.
function render(d, link, source) {
  const tags = (d.tags || []).map((t) => '#' + t).join(' ');

  return [
    `⚓ <b>${esc(d.title_en)}</b>`,
    '',
    esc(d.body_en),
    '',
    `▸ <i>On board:</i> ${esc(d.onboard_en)}`,
    '',
    `<a href="${esc(link)}">${esc(source)}</a>`,
    '',
    `<blockquote expandable><b>${esc(d.title_ru)}</b>`,
    '',
    esc(d.body_ru),
    '',
    `▸ <i>На борту:</i> ${esc(d.onboard_ru)}</blockquote>`,
    '',
    tags,
  ].join('\n');
}

// Ужатая версия — если полная не влезает в подпись под фото.
// Режем русский пересказ, оставляем заголовок и практический вывод.
function renderShort(d, link, source) {
  const tags = (d.tags || []).map((t) => '#' + t).join(' ');

  return [
    `⚓ <b>${esc(d.title_en)}</b>`,
    '',
    esc(d.body_en),
    '',
    `▸ <i>On board:</i> ${esc(d.onboard_en)}`,
    '',
    `<a href="${esc(link)}">${esc(source)}</a>`,
    '',
    `<blockquote expandable><b>${esc(d.title_ru)}</b>`,
    '',
    `▸ <i>На борту:</i> ${esc(d.onboard_ru)}</blockquote>`,
    '',
    tags,
  ].join('\n');
}

// Выбирает, что отправить: фото с подписью или обычный текст.
async function send(bot, chatId, doc, extra) {
  const d = doc.draft;
  const cover = coverFor(d);
  const full = render(d, doc.link, doc.source);
  const opts = Object.assign({ parse_mode: 'HTML' }, extra || {});

  if (cover) {
    if (full.length <= CAPTION_LIMIT) {
      return bot.sendPhoto(chatId, cover, Object.assign({ caption: full }, opts));
    }
    const short = renderShort(d, doc.link, doc.source);
    if (short.length <= CAPTION_LIMIT) {
      return bot.sendPhoto(chatId, cover, Object.assign({ caption: short }, opts));
    }
  }

  // Картинки нет или текст не влезает даже ужатым — отправляем текстом.
  return bot.sendMessage(chatId, full, Object.assign({ disable_web_page_preview: true }, opts));
}

const publishToChannel = (bot, doc) => send(bot, process.env.CHANNEL_ID, doc);

// Черновик тебе в личку — в точности в том виде, в каком уйдёт в канал.
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

module.exports = { render, publishToChannel, sendForReview, handleNewsCallback };
