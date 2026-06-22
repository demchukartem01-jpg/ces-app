// Этот файл теперь запускается внутри server.js
// Telegram бот интегрирован в Express-сервер

const TelegramBot = require('node-telegram-bot-api');

const TOKEN = process.env.BOT_TOKEN || '8088758959:AAGykmqDij8lixaPEkROqcaskVHpzRB79f4';
const APP_URL = process.env.APP_URL || 'https://ces-app.onrender.com';

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Добро пожаловать в CES тренажёр! 🚢\n\nЗдесь ты можешь подготовиться к экзамену CES по всем разделам.\n\nНажми кнопку ниже чтобы начать:`, {
    reply_markup: {
      inline_keyboard: [[
        { text: '📋 Открыть тесты', web_app: { url: APP_URL } }
      ]]
    }
  });
});

bot.onText(/\/stats/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Твоя статистика доступна внутри приложения.\nНажми кнопку ниже:`, {
    reply_markup: {
      inline_keyboard: [[
        { text: '📊 Моя статистика', web_app: { url: APP_URL + '?screen=stats' } }
      ]]
    }
  });
});

console.log('Бот запущен...');
module.exports = bot;
