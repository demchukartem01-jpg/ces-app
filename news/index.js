const Parser = require('rss-parser');
const cron = require('node-cron');
const { SOURCES, CONFIG } = require('./config');
const store = require('./store');
const { summarize } = require('./summarize');
const { sendForReview, publishToChannel } = require('./publish');

// timeout повышен: некоторые источники (ATSB, IMO) отвечают медленно.
// User-Agent — без него часть сайтов отдаёт 403, думая, что это бот-скрейпер.
// ВНИМАНИЕ: xml2js.strict оставлять по умолчанию (true). В нестрогом режиме
// SAX приводит имена тегов к верхнему регистру, <rss> становится <RSS>,
// и rss-parser перестаёт узнавать формат — падают ВСЕ ленты сразу.
const parser = new Parser({
  timeout: 20000,
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; BridgeWatchBot/1.0; +https://t.me/MaritimeHubb)' },
});

// Часть лент (Safety4Sea, NTSB) отдаёт XML с невалидными атрибутами вида
// <tag attr> без значения — строгий парсер на них падает и теряет всю ленту.
// Чиним только то, что мешает разбору, не трогая содержимое.
function sanitizeXml(xml) {
  return xml
    // одиночный & не из сущности → &amp;
    .replace(/&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;')
    // управляющие символы, недопустимые в XML
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
    // атрибут без значения → attr="attr"
    .replace(/<([a-zA-Z][\w:.-]*)((?:\s+[\w:.-]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'>]+))?)*)\s*(\/?)>/g,
      (m, tag, attrs, close) =>
        '<' + tag + attrs.replace(/(\s+)([\w:.-]+)(?![\s]*=)(?=\s|$)/g, '$1$2="$2"') + close + '>');
}

// Сначала обычный разбор. Если лента кривая — качаем сырьё, чистим и пробуем снова.
// Заголовки максимально похожи на браузер: часть сайтов за Cloudflare отдаёт
// боту HTML-заглушку вместо XML, и тогда важно сказать об этом прямо.
async function fetchFeed(url) {
  try {
    return await parser.parseURL(url);
  } catch (firstErr) {
    let text;
    try {
      const res = await fetch(url, {
        redirect: 'follow',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
                        'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
          'Accept': 'application/rss+xml, application/xml, text/xml, */*',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        signal: AbortSignal.timeout(20000),
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      text = await res.text();
    } catch (e) {
      throw new Error(`недоступна (${e.message})`);
    }

    // Пришла страница, а не фид. Прежде чем сдаваться, ищем в её <head>
    // ссылку на настоящий фид — многие сайты её объявляют, но не афишируют.
    if (!/<(rss|feed|rdf:RDF)[\s>]/i.test(text)) {
      const m = text.match(
        /<link[^>]+type=["']application\/(?:rss|atom)\+xml["'][^>]*>/gi) || [];

      for (const tag of m) {
        const href = (tag.match(/href=["']([^"']+)["']/i) || [])[1];
        if (!href) continue;
        const feedUrl = new URL(href, url).href;
        if (feedUrl === url) continue;
        try {
          console.log(`[news:collect] найден фид на странице: ${feedUrl}`);
          return await parser.parseURL(feedUrl);
        } catch (_) { /* пробуем следующий */ }
      }
      throw new Error('отдаёт HTML вместо RSS (блокирует ботов)');
    }

    try {
      return await parser.parseString(sanitizeXml(text));
    } catch (e) {
      throw new Error(`битый XML: ${firstErr.message.split('\n')[0]}`);
    }
  }
}

// ── Сборщик: обходит источники и наполняет очередь ──────────────────────
async function collect(bot) {
  // Перед обходом убираем из очереди то, что успело протухнуть, пока ждало
  // своего слота. Иначе канал выдаёт позавчерашнее как свежее.
  const stale = await store.dropStale(CONFIG.FRESH_HOURS);
  if (stale) console.log('[news:collect] протухло и снято:', stale);

  // Отчёт по каждой ленте — чтобы видеть, какие живы, а какие пора убирать.
  const report = { ok: [], fail: [] };

  for (const src of SOURCES) {
    try {
      const feed = await fetchFeed(src.url);
      report.ok.push(`${src.name} (${feed.items.length})`);

      const fresh = feed.items
        .filter((i) => i.link &&
          Date.now() - new Date(i.pubDate || 0) < CONFIG.FRESH_HOURS * 3600 * 1000)
        .slice(0, CONFIG.MAX_PER_SOURCE);

      for (const raw of fresh) {
        const item = {
          source: src.name,
          category: src.category || 'WORLD',
          title: raw.title || '',
          link: raw.link,
          content: raw.contentSnippet || raw.content || '',
        };

        // Фильтр релевантности до вызова Claude — на широких лентах
        // отсекает большинство статей и экономит токены.
        if (src.filter && !src.filter.test(item.title + ' ' + item.content)) continue;

        if (await store.isDuplicate(item)) continue;

        const draft = await summarize(item);

        if (draft.skip) {
          await store.skip(item, draft.skip_reason || 'not_relevant');
          continue;
        }

        const saved = await store.enqueue(item, draft);
        if (saved && CONFIG.MODERATION) await sendForReview(bot, saved);
        else if (saved) console.log('[news:auto]', item.category, '—', item.title.slice(0, 60));
      }
    } catch (e) {
      // Один упавший источник не должен ронять весь обход.
      report.fail.push(`${src.name}: ${e.message.slice(0, 40)}`);
      console.error(`[news:collect] ${src.name}:`, e.message);
    }
  }

  console.log(`[news:collect] живых лент ${report.ok.length} из ${SOURCES.length}`);
  if (report.fail.length) console.log('[news:collect] упали:', report.fail.join(' | '));

  return report;
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
