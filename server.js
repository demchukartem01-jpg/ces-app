const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN || '8088758959:AAH3GdKy488-deT01kgR1av7y1DTpIDIwIY';
// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;
let db = null;

async function connectDB() {
  if (db) return db;
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db('cesapp');
    console.log('MongoDB connected!');
    return db;
  } catch(e) {
    console.error('MongoDB connection error:', e.message);
    return null;
  }
}

app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, x-telegram-init-data, x-admin-key');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});
app.use(express.static(path.join(__dirname)));

// Проверка подписи Telegram
function getTelegramUser(req) {
  try {
    const initData = req.headers['x-telegram-init-data'];
    if (!initData) return null;
    const params = new URLSearchParams(initData);
    const userStr = params.get('user');
    return userStr ? JSON.parse(userStr) : null;
  } catch { return null; }
}

// ---- API ----

// Сохранить результат
app.post('/api/result', async (req, res) => {
  const user = getTelegramUser(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const database = await connectDB();
  if (!database) return res.status(500).json({ error: 'DB unavailable' });

  const tid = String(user.id);
  const now = Date.now();

  // Upsert пользователя
  await database.collection('users').updateOne(
    { tid },
    { $set: { first_name: user.first_name || '', username: user.username || '', last_seen: now },
      $setOnInsert: { first_seen: now } },
    { upsert: true }
  );

  // Сохраняем результат
  await database.collection('results').insertOne({
    tid,
    category: req.body.category || '',
    section: req.body.section || '',
    is_final: req.body.is_final ? 1 : 0,
    score: req.body.score || 0,
    total: req.body.total || 0,
    time_spent: req.body.time_spent || 0,
    created_at: now
  });

  res.json({ ok: true });
});

// Статистика пользователя
app.get('/api/stats', async (req, res) => {
  const user = getTelegramUser(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const database = await connectDB();
  if (!database) return res.status(500).json({ error: 'DB unavailable' });

  const tid = String(user.id);
  const myResults = await database.collection('results').find({ tid }).toArray();

  const totalTests = myResults.length;
  const totalTime = myResults.reduce((s, r) => s + (r.time_spent || 0), 0);
  const finals = myResults.filter(r => r.is_final).length;
  const avgScore = totalTests > 0
    ? myResults.reduce((s, r) => s + (r.total > 0 ? r.score / r.total * 100 : 0), 0) / totalTests
    : 0;

  const recent = [...myResults].sort((a,b) => b.created_at - a.created_at).slice(0, 20);

  const catMap = {};
  myResults.forEach(r => {
    if (!catMap[r.category]) catMap[r.category] = { tests: 0, totalPct: 0 };
    catMap[r.category].tests++;
    if (r.total > 0) catMap[r.category].totalPct += r.score / r.total * 100;
  });
  const byCategory = Object.entries(catMap)
    .map(([category, v]) => ({ category, tests: v.tests, avg_pct: v.totalPct / v.tests }))
    .sort((a, b) => b.tests - a.tests);

  res.json({ totalTests, totalTime, avgScore, finals, recent, byCategory });
});

// Админ статистика
app.get('/api/admin', async (req, res) => {
  if (req.headers['x-admin-key'] !== BOT_TOKEN) return res.status(403).json({ error: 'Forbidden' });

  const database = await connectDB();
  if (!database) return res.status(500).json({ error: 'DB unavailable' });

  const totalUsers = await database.collection('users').countDocuments();
  const totalResults = await database.collection('results').countDocuments();
  const yesterday = Date.now() - 86400000;
  const todayDocs = await database.collection('results').distinct('tid', { created_at: { $gt: yesterday } });
  const todayUsers = todayDocs.length;

  const pipeline = [
    { $group: { _id: '$category', tests: { $sum: 1 }, totalPct: { $sum: { $cond: [{ $gt: ['$total', 0] }, { $multiply: [{ $divide: ['$score', '$total'] }, 100] }, 0] } } } },
    { $sort: { tests: -1 } },
    { $limit: 10 }
  ];
  const topCats = await database.collection('results').aggregate(pipeline).toArray();
  const topCategories = topCats.map(c => ({ category: c._id, tests: c.tests, avg_pct: c.totalPct / c.tests }));

  const recentUsers = await database.collection('users').find().sort({ last_seen: -1 }).limit(20).toArray();

  res.json({ totalUsers, totalResults, todayUsers, topCategories, recentUsers });
});

app.listen(PORT, () => console.log(`CES Server running on port ${PORT}`));

// Запускаем Telegram бота
try {
  const TelegramBot = require('node-telegram-bot-api');
  const RENDER_URL = process.env.RENDER_EXTERNAL_URL || 'https://ces-bot.onrender.com';
  const bot = new TelegramBot(BOT_TOKEN, { webHook: { port: PORT } });
  bot.setWebHook(`${RENDER_URL}/bot${BOT_TOKEN}`);
  app.post(`/bot${BOT_TOKEN}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });
  const APP_URL = process.env.APP_URL || 'https://ces-app.onrender.com';

  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Добро пожаловать в CES тренажёр! 🚢\n\nНажми кнопку ниже чтобы начать:', {
      reply_markup: {
        inline_keyboard: [[{ text: '📋 Открыть тесты', web_app: { url: APP_URL } }]]
      }
    });
  });

  bot.onText(/\/stats/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Твоя статистика:', {
      reply_markup: {
        inline_keyboard: [[{ text: '📊 Моя статистика', web_app: { url: APP_URL + '?screen=stats' } }]]
      }
    });
  });

  // Команда /admin - статистика для владельца
  const ADMIN_ID = 361088297;
  bot.onText(/\/admin/, async (msg) => {
    const chatId = msg.chat.id;
    if (msg.chat.id !== ADMIN_ID) {
      bot.sendMessage(chatId, 'Нет доступа');
      return;
    }
    try {
      const database = await connectDB();
      if (!database) { bot.sendMessage(chatId, 'DB недоступна'); return; }

      const totalUsers = await database.collection('users').countDocuments();
      const totalResults = await database.collection('results').countDocuments();
      const yesterday = Date.now() - 86400000;
      const todayDocs = await database.collection('results').distinct('tid', { created_at: { $gt: yesterday } });
      const todayUsers = todayDocs.length;
      const weekDocs = await database.collection('results').distinct('tid', { created_at: { $gt: Date.now() - 7*86400000 } });
      const weekUsers = weekDocs.length;

      const pipeline = [
        { $group: { _id: '$category', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 5 }
      ];
      const topCatsArr = await database.collection('results').aggregate(pipeline).toArray();
      const topCats = topCatsArr.map(function(e){ return '  ' + e._id + ': ' + e.count; }).join('\n');

      const recentUsersArr = await database.collection('users').find().sort({ last_seen: -1 }).limit(5).toArray();
      const recentUsers = recentUsersArr.map(function(u){ return '  ' + (u.first_name||'?') + ' (@' + (u.username||'-') + ')'; }).join('\n');

      const lines = [
        'Статистика CES бота',
        '',
        'Всего пользователей: ' + totalUsers,
        'Всего тестов пройдено: ' + totalResults,
        'Активных сегодня: ' + todayUsers,
        'Активных за неделю: ' + weekUsers,
        '',
        'Топ разделов:',
        topCats || '  Нет данных',
        '',
        'Последние пользователи:',
        recentUsers || '  Нет данных'
      ];

      bot.sendMessage(chatId, lines.join('\n'));
    } catch(e) {
      bot.sendMessage(chatId, 'Ошибка: ' + e.message);
    }
  });

  console.log('Бот запущен...');
} catch(e) {
  console.log('Bot error:', e.message);
}

// ---- Serve category data ----
const categoriesData = require('./server_data/categories.json');

// Список категорий (без данных)
app.get('/api/categories', (req, res) => {
  const list = Object.entries(categoriesData).map(([name, sections]) => ({
    name,
    sectionCount: sections.length,
    questionCount: sections.reduce((s, sec) => s + sec.questions.length, 0)
  }));
  res.json(list);
});

// Данные одной категории
app.get('/api/category/:name', (req, res) => {
  const name = decodeURIComponent(req.params.name);
  const data = categoriesData[name];
  if (!data) return res.status(404).json({ error: 'Not found' });
  res.json(data);
});

// Случайные вопросы для финального теста
app.get('/api/final/:name/:count', (req, res) => {
  const name = decodeURIComponent(req.params.name);
  const count = parseInt(req.params.count) || 50;
  const data = categoriesData[name];
  if (!data) return res.status(404).json({ error: 'Not found' });
  const all = data.flatMap(s => s.questions);
  const shuffled = all.sort(() => Math.random() - 0.5).slice(0, count);
  res.json(shuffled);
});
