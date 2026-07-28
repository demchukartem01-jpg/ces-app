// bot.js теперь просто запускает server.js
require('./server.js');
// ===== НОВОСТНОЙ КОНВЕЙЕР =====
const { startNewsPipeline } = require('./news');
const { handleNewsCallback } = require('./news/publish');

// Отдельный слушатель кнопок — существующую логику CES не трогает
bot.on('callback_query', (cb) => {
  handleNewsCallback(bot, cb).catch(e => console.error('[news]', e.message));
});

startNewsPipeline(bot).catch(e => console.error('[news] старт:', e.message));
