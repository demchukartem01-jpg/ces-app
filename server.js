const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN || '8088758959:AAGykmqDij8lixaPEkROqcaskVHpzRB79f4';
const DATA_FILE = path.join(__dirname, 'stats_data.json');

// Загружаем/инициализируем данные
function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch(e) {}
  return { users: {}, results: [] };
}

function saveData(data) {
  try { fs.writeFileSync(DATA_FILE, JSON.stringify(data)); } catch(e) {}
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
app.post('/api/result', (req, res) => {
  const user = getTelegramUser(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const data = loadData();
  const tid = String(user.id);
  const now = Date.now();

  // Обновляем пользователя
  if (!data.users[tid]) {
    data.users[tid] = { first_name: user.first_name || '', username: user.username || '', first_seen: now };
  }
  data.users[tid].last_seen = now;
  data.users[tid].first_name = user.first_name || data.users[tid].first_name;

  // Добавляем результат
  data.results.push({
    tid,
    category: req.body.category || '',
    section: req.body.section || '',
    is_final: req.body.is_final ? 1 : 0,
    score: req.body.score || 0,
    total: req.body.total || 0,
    time_spent: req.body.time_spent || 0,
    created_at: now
  });

  // Храним только последние 10000 результатов
  if (data.results.length > 10000) data.results = data.results.slice(-10000);

  saveData(data);
  res.json({ ok: true });
});

// Статистика пользователя
app.get('/api/stats', (req, res) => {
  const user = getTelegramUser(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const data = loadData();
  const tid = String(user.id);
  const myResults = data.results.filter(r => r.tid === tid);

  const totalTests = myResults.length;
  const totalTime = myResults.reduce((s, r) => s + (r.time_spent || 0), 0);
  const finals = myResults.filter(r => r.is_final).length;
  const avgScore = totalTests > 0
    ? myResults.reduce((s, r) => s + (r.total > 0 ? r.score / r.total * 100 : 0), 0) / totalTests
    : 0;

  const recent = [...myResults].reverse().slice(0, 20);

  // По категориям
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
app.get('/api/admin', (req, res) => {
  if (req.headers['x-admin-key'] !== BOT_TOKEN) return res.status(403).json({ error: 'Forbidden' });

  const data = loadData();
  const totalUsers = Object.keys(data.users).length;
  const totalResults = data.results.length;
  const yesterday = Date.now() - 86400000;
  const todayUsers = new Set(data.results.filter(r => r.created_at > yesterday).map(r => r.tid)).size;

  const catMap = {};
  data.results.forEach(r => {
    if (!catMap[r.category]) catMap[r.category] = { tests: 0, totalPct: 0 };
    catMap[r.category].tests++;
    if (r.total > 0) catMap[r.category].totalPct += r.score / r.total * 100;
  });
  const topCategories = Object.entries(catMap)
    .map(([category, v]) => ({ category, tests: v.tests, avg_pct: v.totalPct / v.tests }))
    .sort((a, b) => b.tests - a.tests).slice(0, 10);

  const recentUsers = Object.entries(data.users)
    .map(([tid, u]) => {
      const myR = data.results.filter(r => r.tid === tid);
      const avg = myR.length > 0 ? myR.reduce((s, r) => s + (r.total > 0 ? r.score/r.total*100 : 0), 0) / myR.length : 0;
      return { ...u, tests: myR.length, avg_pct: avg };
    })
    .sort((a, b) => (b.last_seen || 0) - (a.last_seen || 0)).slice(0, 20);

  res.json({ totalUsers, totalResults, todayUsers, topCategories, recentUsers });
});

app.listen(PORT, () => console.log(`CES Server running on port ${PORT}`));

// Запускаем Telegram бота
try {
  const TelegramBot = require('node-telegram-bot-api');
  const bot = new TelegramBot(BOT_TOKEN, { polling: true });
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
