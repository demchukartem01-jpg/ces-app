// scripts/check-feeds.js
// Запуск: node scripts/check-feeds.js
// Проверяет каждую ленту из news/sources.js: жива ли, сколько записей,
// свежая ли последняя. Часть URL — кандидаты, их надо подтвердить перед
// тем, как включать в прод.

const Parser = require('rss-parser');
const { feeds } = require('../news/sources');

const parser = new Parser({
  timeout: 15000,
  headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CESNewsBot/1.0)' },
});

// Если основной URL не отвечает — пробуем типовые варианты WordPress
const FALLBACKS = (url) => {
  const base = new URL(url).origin;
  return [`${base}/feed/`, `${base}/rss`, `${base}/feed/rss2/`, `${base}/rss.xml`, `${base}/atom.xml`];
};

async function probe(url) {
  const feed = await parser.parseURL(url);
  const last = feed.items[0];
  return {
    title: feed.title,
    count: feed.items.length,
    lastDate: last?.isoDate || last?.pubDate || 'нет даты',
    lastTitle: last?.title?.slice(0, 70),
  };
}

(async () => {
  const broken = [];

  for (const f of feeds) {
    let result = null;
    let usedUrl = f.url;

    try {
      result = await probe(f.url);
    } catch (e) {
      for (const alt of FALLBACKS(f.url)) {
        try {
          result = await probe(alt);
          usedUrl = alt;
          break;
        } catch (_) { /* пробуем дальше */ }
      }
    }

    if (result) {
      const ageDays = result.lastDate === 'нет даты'
        ? '?'
        : Math.round((Date.now() - new Date(result.lastDate)) / 86400000);
      const flag = usedUrl === f.url ? 'OK  ' : 'FIX ';
      console.log(`${flag} [${f.category}] ${f.id.padEnd(16)} ${result.count} items, посл. ${ageDays} дн. назад`);
      if (usedUrl !== f.url) console.log(`      → рабочий URL: ${usedUrl}`);
      if (ageDays !== '?' && ageDays > 30) console.log(`      ⚠ лента мёртвая или редкая`);
    } else {
      console.log(`FAIL [${f.category}] ${f.id.padEnd(16)} ${f.url}`);
      broken.push(f.id);
    }
  }

  console.log(`\nНерабочих лент: ${broken.length}${broken.length ? ' → ' + broken.join(', ') : ''}`);
  console.log('Для них нужен watcher по странице вместо RSS.');
})();
