// news/watch.js
//
// Следит за официальными страницами, у которых нет RSS: IMO, Paris MoU, флаги,
// классификационные общества, клубы P&I, Морская администрация Украины.
//
// Отличие от старого механизма в digest/: тот хеширует страницу целиком и
// сообщает лишь «что-то изменилось». Здесь вытаскиваются конкретные ссылки на
// документы, запоминаются, и в канал уходит только новое — с заголовком и
// прямой ссылкой на первоисточник.
//
// Пересказ через Claude сознательно НЕ делается: для циркуляра важен факт
// публикации и точная ссылка, а не вольная интерпретация.

const cron = require('node-cron');

// ── Что отслеживаем ────────────────────────────────────────────────────
// linkPattern — какие ссылки на странице считать документами. Без него
//   в ленту полезет меню, футер и баннеры.
// skipPattern — что отбросить дополнительно (архивы, страницы-разделы).
// title — как подписывать в канале.
// Проверено 28.08.2026. Не поддаются статическому разбору и убраны:
//   uscg      — HTTP 403 на любой запрос вне браузера
//   marshall  — register-iri.com рвёт соединение
//   gard      — список статей рисуется через JavaScript
// Чтобы их взять, нужен headless-браузер на сервере: тяжело и не окупается.
const WATCH = [
  {
    // AMSA публикует marine notices: усталость, вахта, PSC-кампании,
    // требования при заходе в австралийские порты.
    id: 'amsa',
    title: '🇦🇺 AMSA',
    url: 'https://www.amsa.gov.au/about/regulations-and-standards/index-marine-notices',
    linkPattern: /amsa\.gov\.au\/.*(marine-notice|safety-alert)/i,
    skipPattern: /index-marine-notices$/i,
  },
  {
    // ABS Regulatory News — сводки по MARPOL, SOLAS, требованиям флагов
    // и портовых властей глазами классификационного общества.
    id: 'abs',
    title: '📐 ABS Regulatory News',
    url: 'https://ww2.eagle.org/en/rules-and-resources/regulatory-news0.html',
    linkPattern: /eagle\.org\/en\/.*regulatory-news.*\/[a-z0-9-]{8,}\.html/i,
  },
  {
    id: 'imo',
    title: '🌍 IMO',
    url: 'https://www.imo.org/en/MediaCentre/PressBriefings/Pages/Default.aspx',
    linkPattern: /\/MediaCentre\/.*\.aspx/i,
    skipPattern: /Default\.aspx/i,
  },
  {
    id: 'parismou',
    title: '🛃 Paris MoU',
    url: 'https://parismou.org/',
    linkPattern: /parismou\.org\/[a-z0-9-]+\/[a-z0-9-]{10,}/i,
    skipPattern: /(about|contact|login|search|privacy|cookie)/i,
  },
  {
    id: 'emsa',
    title: '🇪🇺 EMSA',
    url: 'https://www.emsa.europa.eu/newsroom/latest-news.html',
    linkPattern: /\/newsroom\/latest-news\/item\//i,
  },
  {
    id: 'liberia',
    title: '🏴 Liberia Registry',
    url: 'https://www.liscr.com/news-and-insights',
    linkPattern: /liscr\.com\/[a-z0-9-]{12,}/i,
    skipPattern: /(news-and-insights|about|contact|privacy|cookie|careers)/i,
  },
  {
    id: 'dnv',
    title: '📐 DNV',
    url: 'https://www.dnv.com/maritime/technical-regulatory-news/',
    linkPattern: /technical-regulatory-news\/[^/]+/i,
  },
  {
    id: 'ukpandi',
    title: '🛡 UK P&I',
    url: 'https://www.ukpandi.com/news-and-resources/',
    linkPattern: /\/news-and-resources\/[^/]+/i,
  },
  {
    id: 'marad-ua',
    title: '🇺🇦 Морська адміністрація',
    url: 'https://marad.gov.ua/ua',
    linkPattern: /marad\.gov\.ua\/ua\/news\/[a-z0-9-]{8,}/i,
  },
  {
    id: 'uspa',
    title: '🇺🇦 АМПУ',
    url: 'https://www.uspa.gov.ua/',
    linkPattern: /uspa\.gov\.ua\/[a-z0-9-]{12,}/i,
    skipPattern: /(about|contact|privacy|cookie|login|search)/i,
  },
];

// Заголовок ссылки: берём текст между <a ...> и </a>, чистим от тегов.
function linkText(html, href) {
  const re = new RegExp(
    '<a[^>]+href=["\']' + href.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') +
    '["\'][^>]*>([\\s\\S]{1,300}?)</a>', 'i');
  const m = html.match(re);
  if (!m) return null;
  return m[1]
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

async function checkOne(db, w, bot, channelId) {
  const res = await fetch(w.url, {
    redirect: 'follow',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) ' +
                    'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error('HTTP ' + res.status);

  const html = await res.text();

  // Собираем все ссылки, приводим к абсолютным, отбираем по шаблону
  const hrefs = [...html.matchAll(/<a[^>]+href=["']([^"']+)["']/gi)]
    .map((m) => m[1])
    .map((h) => { try { return new URL(h, w.url).href; } catch { return null; } })
    .filter(Boolean)
    .filter((h) => w.linkPattern.test(h))
    .filter((h) => !w.skipPattern || !w.skipPattern.test(h));

  const uniq = [...new Set(hrefs)].slice(0, 25);
  if (!uniq.length) throw new Error('ссылок по шаблону не найдено');

  const col = db.collection('watch_seen');
  const prev = await col.findOne({ _id: w.id });

  // Первый запуск: молча запоминаем, иначе в канал улетит вся история сразу
  if (!prev) {
    await col.updateOne({ _id: w.id },
      { $set: { links: uniq, checkedAt: new Date() } }, { upsert: true });
    return { first: true, found: uniq.length, posted: 0 };
  }

  const seen = new Set(prev.links || []);
  const fresh = uniq.filter((h) => !seen.has(h));

  // Не больше трёх за раз с одного источника: если сайт переверстали,
  // все ссылки станут «новыми», и канал забьётся мусором.
  const toPost = fresh.slice(0, 3);

  for (const href of toPost) {
    const name = linkText(html, href) || href.split('/').pop().replace(/[-_]/g, ' ');
    if (name.length < 6) continue;

    await bot.sendMessage(channelId,
      `${w.title}\n\n<b>${name.slice(0, 200)}</b>\n\n` +
      `<a href="${href}">Открыть документ</a>`,
      { parse_mode: 'HTML', disable_web_page_preview: false });

    await new Promise((r) => setTimeout(r, 3000));
  }

  // Запоминаем ВСЕ найденные, а не только опубликованные: иначе то, что
  // не попало в лимит трёх, будет всплывать при каждой проверке.
  await col.updateOne({ _id: w.id },
    { $set: { links: uniq, checkedAt: new Date() } });

  return { first: false, found: uniq.length, posted: toPost.length };
}

// Обходит все страницы. Возвращает отчёт для панели управления.
async function checkAll(bot, db, channelId) {
  const report = { ok: [], fail: [], posted: 0 };

  for (const w of WATCH) {
    try {
      const r = await checkOne(db, w, bot, channelId || process.env.CHANNEL_ID);
      report.posted += r.posted;
      report.ok.push(
        `${w.id}: ${r.first ? 'запомнил ' + r.found : r.posted + ' новых'}`);
    } catch (e) {
      report.fail.push(`${w.id}: ${e.message.slice(0, 45)}`);
      console.error(`[watch:${w.id}]`, e.message);
    }
  }

  console.log(`[watch] проверено ${WATCH.length}, опубликовано ${report.posted}`);
  if (report.fail.length) console.log('[watch] упали:', report.fail.join(' | '));

  return report;
}

function startWatch(bot, db) {
  // Раз в три часа: циркуляры выходят редко, чаще смысла нет.
  cron.schedule('30 */3 * * *', () => {
    checkAll(bot, db).catch((e) => console.error('[watch]', e.message));
  });
  console.log(`[watch] слежение подключено: ${WATCH.length} страниц`);
}

module.exports = { startWatch, checkAll, WATCH };
