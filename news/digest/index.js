const fs = require('fs');
const path = require('path');
const cron = require('node-cron');
const { DIGEST } = require('./config');
const { buildDigest } = require('./blocks');

let database;

// Сводка длинная — уходит текстом, картинка отдельным сообщением сверху.
// Так не упираемся в лимит подписи 1024.
const COVER = path.join(__dirname, 'cover.png');

async function sendDigest(bot, chatId, opts) {
  const text = await buildDigest(database);

  if (!text) {
    console.error('[digest] все блоки пустые, сводка не отправлена');
    return null;
  }

  if (fs.existsSync(COVER)) {
    await bot.sendPhoto(chatId, COVER).catch((e) => console.error('[digest:cover]', e.message));
  }

  return bot.sendMessage(chatId, text, Object.assign({
    parse_mode: 'HTML',
    disable_web_page_preview: true,
  }, opts || {}));
}

// Ежедневная сводка. При MODERATION сначала тебе, иначе сразу в канал.
async function runDaily(bot, moderation) {
  const target = moderation ? process.env.ADMIN_CHAT_ID : process.env.CHANNEL_ID;

  try {
    await sendDigest(bot, target);
    console.log('[digest] сводка отправлена в', moderation ? 'личку' : 'канал');
  } catch (e) {
    console.error('[digest] отправка:', e.message);
  }
}

function startDigest(bot, db, moderation) {
  database = db;

  cron.schedule(DIGEST.CRON, () => runDaily(bot, moderation));

  // Команда /digest — собрать и прислать прямо сейчас, не дожидаясь расписания.
  // Работает только для тебя. Нужна, чтобы проверять блоки без ожидания суток.
  bot.onText(/\/digest/, async (msg) => {
    if (String(msg.chat.id) !== String(process.env.ADMIN_CHAT_ID)) return;
    await bot.sendMessage(msg.chat.id, 'Собираю сводку…');
    try {
      await sendDigest(bot, msg.chat.id);
    } catch (e) {
      await bot.sendMessage(msg.chat.id, 'Ошибка: ' + e.message);
    }
  });

  console.log('[digest] сводка запущена, расписание:', DIGEST.CRON);
}

module.exports = { startDigest, sendDigest };
