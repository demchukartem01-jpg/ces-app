// Главный файл бота
// Запуск: node bot.js

const TelegramBot = require('node-telegram-bot-api');

// ВАЖНО: вставь сюда свой токен от BotFather
const TOKEN = '8088758959:AAGykmqDij8lixaPEkROqcaskVHpzRB79f4';

// ВАЖНО: вставь сюда адрес, где будет лежать твоё мини-приложение (см. инструкцию)
// Например: https://your-domain.com или https://твой-сайт-на-render.onrender.com
const APP_URL = 'https://example.com';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Добро пожаловать! Нажми кнопку ниже, чтобы открыть тесты CES.', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '📋 Открыть тесты',
            web_app: { url: APP_URL }
          }
        ]
      ]
    }
  });
});

console.log('Бот запущен...');
