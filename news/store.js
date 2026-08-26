const crypto = require('crypto');
const { MongoClient, ObjectId } = require('mongodb');
const { CONFIG } = require('./config');

let db;

// Если у тебя в server.js уже есть подключённый db — передай его сюда,
// второе подключение к Atlas не нужно и жрёт лимит соединений.
async function initStore(existingDb) {
  if (existingDb) {
    db = existingDb;
  } else if (db) {
    // Уже подключено — второе соединение не открываем.
    return db;
  } else {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db(process.env.MONGODB_DB || 'ces');
  }

  // Уникальный индекс — главная защита от повторной публикации.
  await db.collection('news').createIndex({ linkHash: 1 }, { unique: true });
  await db.collection('news').createIndex({ status: 1, createdAt: 1 });
  await db.collection('news').createIndex({ status: 1, category: 1, createdAt: 1 });

  // Разовая миграция: всё, что накопилось до категорий, считаем мировым.
  await db.collection('news').updateMany(
    { category: { $exists: false } },
    { $set: { category: 'WORLD' } }
  );

  return db;
}

const hash = (s) => crypto.createHash('sha1').update(s).digest('hex');

const STOP = new Set(['the','a','an','of','in','on','at','to','for','and','as','after','with','by','from','is','are','be','has','have']);

function tokens(title) {
  return new Set(
    String(title).toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w))
  );
}

// Две статьи об одной аварии из разных изданий пересекутся по названию
// судна, порту и типу события — так и ловим дубли между источниками.
function similarity(a, b) {
  const A = tokens(a), B = tokens(b);
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  return inter / Math.min(A.size, B.size);
}

async function isDuplicate(item) {
  if (await db.collection('news').findOne({ linkHash: hash(item.link) })) return true;

  const recent = await db.collection('news')
    .find({}, { projection: { titleRaw: 1 } })
    .sort({ createdAt: -1 })
    .limit(CONFIG.DEDUPE_WINDOW)
    .toArray();

  return recent.some((r) => similarity(r.titleRaw, item.title) >= CONFIG.SIMILARITY_THRESHOLD);
}

// Возвращает вставленный документ с _id, или null если такой уже был.
async function enqueue(item, draft) {
  const doc = {
    linkHash: hash(item.link),
    link: item.link,
    source: item.source,
    category: item.category || 'WORLD',
    titleRaw: item.title,
    draft,
    status: CONFIG.MODERATION ? 'review' : 'approved',
    createdAt: new Date(),
  };

  try {
    const res = await db.collection('news').insertOne(doc);
    return Object.assign({}, doc, { _id: res.insertedId });
  } catch (e) {
    if (e.code === 11000) return null;
    throw e;
  }
}

// Помечаем как виденное, но не публикуем — чтобы не разбирать заново каждый час.
function skip(item, reason) {
  return db.collection('news').updateOne(
    { linkHash: hash(item.link) },
    { $setOnInsert: {
        linkHash: hash(item.link), link: item.link, source: item.source,
        titleRaw: item.title, status: 'skipped', reason, createdAt: new Date(),
    }},
    { upsert: true }
  );
}

// Ротация по категориям: берём ту, из которой дольше всего не публиковали.
// Иначе пачка украинских новостей, собранная за один час, вылезет подряд
// и вытеснит всё остальное на несколько часов.
async function nextApproved() {
  const cats = await db.collection('news').distinct('category', { status: 'approved' });
  if (!cats.length) return null;

  let pick = null;
  for (const c of cats) {
    const last = await db.collection('news').findOne(
      { status: 'published', category: c },
      { sort: { publishedAt: -1 }, projection: { publishedAt: 1 } }
    );
    const t = last && last.publishedAt ? new Date(last.publishedAt).getTime() : 0;
    if (!pick || t < pick.t) pick = { c, t };
  }

  return db.collection('news').findOne(
    { status: 'approved', category: pick.c },
    { sort: { createdAt: 1 } }
  );
}

const setStatus = (id, status, extra) =>
  db.collection('news').updateOne({ _id: id }, { $set: Object.assign({ status }, extra || {}) });

const getById = (id) =>
  db.collection('news').findOne({ _id: new ObjectId(String(id)) });

module.exports = { initStore, isDuplicate, enqueue, skip, nextApproved, setStatus, getById };
