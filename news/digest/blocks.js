const crypto = require('crypto');
const { CURRENCIES, WATCHED, CONVENTIONS, DIGEST } = require('./config');

// Каждый блок возвращает строку или null.
// Ошибка внутри блока НЕ роняет сводку — вернётся null, блок просто исчезнет.
async function safe(name, fn) {
  try {
    return await fn();
  } catch (e) {
    console.error(`[digest:${name}]`, e.message);
    return null;
  }
}

// ── 1. Тропические циклоны ──────────────────────────────────────────────
// NHC: Атлантика и восточная часть Тихого. JTWC: запад Тихого и Индийский.
async function cyclones() {
  const res = await fetch('https://www.nhc.noaa.gov/CurrentStorms.json');
  if (!res.ok) throw new Error('NHC ' + res.status);
  const data = await res.json();

  const storms = (data.activeStorms || []).map((s) => {
    const cls = s.classification || '';
    const wind = s.intensity ? `${s.intensity} узл` : '';
    const lat = s.latitudeNumeric, lon = s.longitudeNumeric;
    const pos = (lat != null && lon != null)
      ? `${Math.abs(lat).toFixed(1)}${lat >= 0 ? 'N' : 'S'} ${Math.abs(lon).toFixed(1)}${lon >= 0 ? 'E' : 'W'}`
      : '';
    return `  ${cls} ${s.name} — ${pos}${wind ? ', ' + wind : ''}`;
  });

  if (!storms.length) return '🌀 <b>Циклоны</b>\n  Активных систем нет (Атлантика, вост. Тихий)';

  return '🌀 <b>Циклоны</b>\n' + storms.join('\n') +
         '\n  <i>Источник: NHC. Зап. Тихий и Индийский — JTWC</i>';
}

// ── 2. Курсы валют ──────────────────────────────────────────────────────
async function rates() {
  const res = await fetch('https://open.er-api.com/v6/latest/USD');
  if (!res.ok) throw new Error('rates ' + res.status);
  const data = await res.json();
  if (!data.rates) throw new Error('нет поля rates');

  const lines = CURRENCIES
    .filter((c) => data.rates[c.code] != null)
    .map((c) => {
      const v = data.rates[c.code];
      const shown = v >= 10 ? v.toFixed(2) : v.toFixed(4);
      return `  ${c.label} ${shown}`;
    });

  if (!lines.length) return null;
  return '💱 <b>Курс доллара</b>\n' + lines.join('\n');
}

// ── 3. Admiralty Notices to Mariners ────────────────────────────────────
// Выходят раз в неделю. Постим напоминание в нужный день, не парсим.
function isoWeek(d) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const start = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil((((t - start) / 86400000) + 1) / 7);
}

function admiraltyNM(now) {
  if (now.getUTCDay() !== DIGEST.NM_WEEKDAY) return null;
  const week = isoWeek(now);
  const year = now.getUTCFullYear();
  return `📕 <b>Admiralty NM</b>\n  Неделя ${week}/${year} — время обновляться\n  ` +
         `<a href="https://www.admiralty.co.uk/publications/notices-to-mariners">admiralty.co.uk</a>`;
}

// ── 4. Календарь конвенций ──────────────────────────────────────────────
function conventions(now) {
  const horizon = new Date(now.getTime() + DIGEST.CONVENTION_LOOKAHEAD_DAYS * 86400000);

  const soon = CONVENTIONS
    .map((c) => Object.assign({}, c, { when: new Date(c.date) }))
    .filter((c) => c.when >= now && c.when <= horizon)
    .sort((a, b) => a.when - b.when);

  if (!soon.length) return null;

  const lines = soon.map((c) => {
    const days = Math.ceil((c.when - now) / 86400000);
    const d = c.when.toISOString().slice(0, 10);
    return `  ${d} (через ${days} дн.) — ${c.title}${c.ref ? ` · ${c.ref}` : ''}`;
  });

  return '⚖️ <b>Вступает в силу</b>\n' + lines.join('\n');
}

// ── 5. Отслеживание изменений: военный риск и PSC ───────────────────────
// Скачиваем страницу, считаем хэш, сравниваем с прошлым.
// Изменилась — сообщаем. Содержимое не публикуем, только факт и ссылку.
async function checkWatched(db) {
  const out = [];

  for (const w of WATCHED) {
    try {
      const res = await fetch(w.url, { headers: { 'user-agent': 'Mozilla/5.0' } });
      if (!res.ok) continue;

      const body = await res.text();
      // Выкидываем скрипты, таймстемпы и прочий шум, иначе хэш скачет каждый раз
      const clean = body
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/\d{1,2}[:/]\d{2}(:\d{2})?/g, '')
        .replace(/\s+/g, ' ');
      const hash = crypto.createHash('sha1').update(clean).digest('hex');

      const prev = await db.collection('watch').findOne({ _id: w.id });
      await db.collection('watch').updateOne(
        { _id: w.id },
        { $set: { hash, checkedAt: new Date() } },
        { upsert: true }
      );

      // Первый запуск — только запоминаем, не шумим
      if (prev && prev.hash !== hash) {
        out.push(`${w.title}\n  ${w.note}\n  <a href="${w.url}">открыть</a>`);
      }
    } catch (e) {
      console.error(`[digest:watch:${w.id}]`, e.message);
    }
  }

  return out.length ? out.join('\n\n') : null;
}

// ── Сборка ──────────────────────────────────────────────────────────────
async function buildDigest(db) {
  const now = new Date();

  const parts = await Promise.all([
    safe('cyclones', cyclones),
    safe('rates', rates),
    safe('nm', async () => admiraltyNM(now)),
    safe('conventions', async () => conventions(now)),
    safe('watch', () => checkWatched(db)),
  ]);

  const body = parts.filter(Boolean);
  if (!body.length) return null;

  const date = now.toISOString().slice(0, 10);

  return [
    `🌐 <b>BRIDGE BRIEF</b> · ${date}`,
    '',
    body.join('\n\n'),
    '',
    '<i>Сводка для ознакомления. Официальные источники — NAVTEX, SafetyNET, ' +
    'бюллетени администраций.</i>',
  ].join('\n');
}

module.exports = { buildDigest };
