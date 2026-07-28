const Parser = require('rss-parser');
const cron = require('node-cron');
const { SOURCES, CONFIG } = require('./config');
const store = require('./store');
const { summarize } = require('./summarize');
const { sendForReview, publishToChannel } = require('./publish');

const parser = new Parser({ timeout: 15000 });

// ── Сборщик: обходит источники и наполняет очередь ──────────────────────
async function collect(bot) {
  for (const src of SOURCES) {
    try {
      const feed = await parser.parseURL(src.url);

      const fresh = feed.items
        .filter((i) => i.link && Date.now() - new Date(i.pubDate || 0) < 24 * 3600 * 1000)
        .slice(0, CONFIG.MAX_PER_SOURCE);

      for (const raw of fresh) {
        const item = {
          source: src.name,
          title: raw.title || '',
          link: raw.link,
          content: raw.contentSnippet || raw.content || '',
        };

        if (await store.isDuplicate(item)) continue;

        const draft = await summarize(item);

        if (draft.skip) {
          await store.skip(item, draft.skip_reason || 'not_relevant');
          continue;
        }

        const saved = await store.enqueue(item, draft);
        if (saved && CONFIG.MODERATION) await sendForReview(bot, saved);
      }
    } catch (e) {
      // Один упавший источник не должен ронять весь обход.
      console.error(`[news:collect] ${src.name}:`, e.message);
    }
  }
}

// ── Публикатор: отдаёт максимум один пост за запуск ─────────────────────
async function publish(bot) {
  if (CONFIG.QUIET_HOURS_UTC.indexOf(new Date().getUTCHours()) !== -1) return;

  const doc = await store.nextApproved();
  if (!doc) return;

  try {
    await publishToChannel(bot, doc);
    await store.setStatus(doc._id, 'published', { publishedAt: new Date() });
    console.log('[news:publish]', doc.titleRaw);
  } catch (e) {
    console.error('[news:publish]', e.message);
    await store.setStatus(doc._id, 'failed', { error: e.message });
  }
}

// bot — твой существующий экземпляр TelegramBot
// db  — необязательно: если у тебя уже есть подключение к Mongo, передай его
async function startNewsPipeline(bot, db) {
  await store.initStore(db);
  cron.schedule(CONFIG.COLLECT_CRON, () => collect(bot));
  cron.schedule(CONFIG.PUBLISH_CRON, () => publish(bot));
  console.log('[news] конвейер запущен, модерация:', CONFIG.MODERATION);
}

// Ручной запуск для проверки, без ожидания cron.
module.exports = { startNewsPipeline, collect, publish };
