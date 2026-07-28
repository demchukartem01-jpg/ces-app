const { setStatus, getById } = require('./store');

// Telegram HTML-режим ломается на <, >, &
const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Русский блок в <blockquote expandable>: пост выглядит англоязычным
// и коротким, свои раскрывают перевод одним касанием.
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

const OPTS = { parse_mode: 'HTML', disable_web_page_preview: true };

function publishToChannel(bot, doc) {
  return bot.sendMessage(process.env.CHANNEL_ID, render(doc.draft, doc.link, doc.source), OPTS);
}

// Черновик тебе в личку с кнопками. Первые недели — обязательно.
function sendForReview(bot, doc) {
  return bot.sendMessage(
    process.env.ADMIN_CHAT_ID,
    render(doc.draft, doc.link, doc.source),
    Object.assign({}, OPTS, {
      reply_markup: {
        inline_keyboard: [[
          { text: '✅ Опубликовать', callback_data: `news:ok:${doc._id}` },
          { text: '🗑 Удалить',      callback_data: `news:no:${doc._id}` },
        ]],
      },
    })
  );
}

// Вернёт true, если кнопка была новостная — тогда твой код дальше не выполняется.
// Вернёт false для всех кнопок CES — тогда отрабатывает существующая логика.
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

    // Убираем кнопки, чтобы не нажать дважды.
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
