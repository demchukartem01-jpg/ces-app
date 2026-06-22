const express = require('express');
const Database = require('better-sqlite3');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const BOT_TOKEN = process.env.BOT_TOKEN || '8088758959:AAGykmqDij8lixaPEkROqcaskVHpzRB79f4';
const ADMIN_ID = process.env.ADMIN_ID || ''; // твой Telegram ID

// База данных
const db = new Database('stats.db');

// Создаём таблицы
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    telegram_id TEXT UNIQUE,
    username TEXT,
    first_name TEXT,
    first_seen INTEGER,
    last_seen INTEGER
  );

  CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    telegram_id TEXT,
    category TEXT,
    section TEXT,
    is_final INTEGER,
    score INTEGER,
    total INTEGER,
    time_spent INTEGER,
    created_at INTEGER
  );
`);

app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Проверка подписи Telegram Mini App
function verifyTelegramData(initData) {
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get('hash');
    params.delete('hash');
    const dataCheckString = [...params.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join('\n');
    const secretKey = crypto.createHmac('sha256', 'WebAppData').update(BOT_TOKEN).digest();
    const expectedHash = crypto.createHmac('sha256', secretKey).update(dataCheckString).digest('hex');
    return hash === expectedHash;
  } catch { return false; }
}

// Middleware для получения пользователя из Telegram initData
function getUser(req) {
  try {
    const initData = req.headers['x-telegram-init-data'];
    if (!initData) return null;
    const params = new URLSearchParams(initData);
    const userStr = params.get('user');
    return userStr ? JSON.parse(userStr) : null;
  } catch { return null; }
}

// ---- API ----

// Сохранить результат теста
app.post('/api/result', (req, res) => {
  const user = getUser(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const { category, section, is_final, score, total, time_spent } = req.body;
  const now = Date.now();

  // Upsert пользователя
  db.prepare(`
    INSERT INTO users (telegram_id, username, first_name, first_seen, last_seen)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(telegram_id) DO UPDATE SET
      username = excluded.username,
      first_name = excluded.first_name,
      last_seen = excluded.last_seen
  `).run(String(user.id), user.username || '', user.first_name || '', now, now);

  // Сохранить результат
  db.prepare(`
    INSERT INTO results (telegram_id, category, section, is_final, score, total, time_spent, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(String(user.id), category, section, is_final ? 1 : 0, score, total, time_spent || 0, now);

  res.json({ ok: true });
});

// Получить статистику пользователя
app.get('/api/stats', (req, res) => {
  const user = getUser(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  const tid = String(user.id);

  const totalTests = db.prepare('SELECT COUNT(*) as c FROM results WHERE telegram_id = ?').get(tid).c;
  const totalTime = db.prepare('SELECT SUM(time_spent) as t FROM results WHERE telegram_id = ?').get(tid).t || 0;
  const avgScore = db.prepare('SELECT AVG(CAST(score AS FLOAT)/total*100) as a FROM results WHERE telegram_id = ? AND total > 0').get(tid).a || 0;
  const finals = db.prepare('SELECT COUNT(*) as c FROM results WHERE telegram_id = ? AND is_final = 1').get(tid).c;

  const recent = db.prepare(`
    SELECT category, section, score, total, is_final, time_spent, created_at
    FROM results WHERE telegram_id = ?
    ORDER BY created_at DESC LIMIT 20
  `).all(tid);

  const byCategory = db.prepare(`
    SELECT category, COUNT(*) as tests, AVG(CAST(score AS FLOAT)/total*100) as avg_pct
    FROM results WHERE telegram_id = ? AND total > 0
    GROUP BY category ORDER BY tests DESC
  `).all(tid);

  res.json({ totalTests, totalTime, avgScore, finals, recent, byCategory });
});

// Админ статистика
app.get('/api/admin', (req, res) => {
  const adminKey = req.headers['x-admin-key'];
  if (adminKey !== BOT_TOKEN) return res.status(403).json({ error: 'Forbidden' });

  const totalUsers = db.prepare('SELECT COUNT(*) as c FROM users').get().c;
  const totalResults = db.prepare('SELECT COUNT(*) as c FROM results').get().c;
  const todayUsers = db.prepare('SELECT COUNT(DISTINCT telegram_id) as c FROM results WHERE created_at > ?').get(Date.now() - 86400000).c;

  const topCategories = db.prepare(`
    SELECT category, COUNT(*) as tests, AVG(CAST(score AS FLOAT)/total*100) as avg_pct
    FROM results WHERE total > 0 GROUP BY category ORDER BY tests DESC LIMIT 10
  `).all();

  const recentUsers = db.prepare(`
    SELECT u.first_name, u.username, u.last_seen,
      COUNT(r.id) as tests,
      AVG(CAST(r.score AS FLOAT)/r.total*100) as avg_pct
    FROM users u LEFT JOIN results r ON u.telegram_id = r.telegram_id
    GROUP BY u.telegram_id ORDER BY u.last_seen DESC LIMIT 20
  `).all();

  res.json({ totalUsers, totalResults, todayUsers, topCategories, recentUsers });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
