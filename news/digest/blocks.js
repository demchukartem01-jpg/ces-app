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
async function cyclones() {
  const res = await fetch('https://www.nhc.noaa.gov/CurrentStorms.json');
  if (!res.ok) throw new Error('NHC ' + res.status);
  const data = await res.json();

  const storms = (data.activeStorms || []).map((s) => {
    const cls = s.classification || '';
    const wind = s.intensity ? `${s.intensity} kt` : '';
    const lat = s.latitudeNumeric, lon = s.longitudeNumeric;
    const pos = (lat != null && lon != null)
      ? `${Math.abs(lat).toFixed(1)}${lat >= 0 ? 'N' : 'S'} ${Math.abs(lon).toFixed(1)}${lon >= 0 ? 'E' : 'W'}`
      : '';
    return `  ${cls} ${s.name} — ${pos}${wind ? ', ' + wind : ''}`;
  });

  if (!storms.length) {
    return '🌀 <b>Tropical cyclones</b>\n  No active systems (Atlantic, E Pacific)';
  }

  return '🌀 <b>Tropical cyclones</b>\n' + storms.join('\n') +
         '\n  <i>Source: NHC. W Pacific and Indian Ocean — see JTWC</i>';
}

// ── 2. Курсы валют ──────────────────────────────────────────────────────
async function rates() {
  const res = await fetch('https://open.er-api.com/v6/latest/USD');
  if (!res.ok) throw new Error('rates ' + res.status);
  const data = await res.json();
  if (!data.rates) throw new Error('no rates field');

  const lines = CURRENCIES
    .filter((c) => data.rates[c.code] != null)
    .map((c) => {
      const v = data.rates[c.code];
      return `  ${c.label} ${v >= 10 ? v.toFixed(2) : v.toFixed(4)}`;
    });

  if (!lines.length) return null;
  return '💱 <b>USD exchange rates</b>\n' + lines.join('\n');
}

// ── 3. Admiralty Notices to Mariners ────────────────────────────────────
function isoWeek(d) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const start = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  return Math.ceil((((t - start) / 86400000) + 1) / 7);
}

function admiraltyNM(now) {
  if (now.getUTCDay() !== DIGEST.NM_WEEKDAY) return null;
  return `📕 <b>Admiralty Notices to Mariners</b>\n  Week ${isoWeek(now)}/${now.getUTCFullYear()} — time to update\n  ` +
         `<a href="https://www.admiralty.co.uk/publications/notices-to-mariners">admiralty.co.uk</a>`;
}

// ── 4. Календарь конвенций ──────────────────────────────────────────────
// Напоминаем по контрольным точкам, а не сплошным окном: одна и та же
// строка не должна висеть в сводке месяцами.

// Разница в календарных днях по UTC — без влияния времени суток.
function dayDiff(target, now) {
  const a = Date.UTC(target.getUTCFullYear(), target.getUTCMonth(), target.getUTCDate());
  const b = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  return Math.round((a - b) / 86400000);
}

function conventions(now) {
  const ahead = DIGEST.CONVENTION_MILESTONES || [];
  const after = DIGEST.CONVENTION_AFTER || [];

  const upcoming = [];
  const inForce = [];

  for (const c of CONVENTIONS) {
    const days = dayDiff(new Date(c.date), now);
    const tail = `${c.title}${c.ref ? ` · ${c.ref}` : ''}`;

    if (days === 0) {
      inForce.push(`  <b>Today</b> — ${tail}`);
    } else if (days > 0 && ahead.indexOf(days) !== -1) {
      const when = days === 1 ? 'Tomorrow' : `In ${days} days`;
      upcoming.push({ days, line: `  <b>${when}</b> · ${c.date} — ${tail}` });
    } else if (days < 0 && after.indexOf(-days) !== -1) {
      inForce.push(`  In force since ${c.date} — ${tail}`);
    }
  }

  const out = [];

  if (upcoming.length) {
    upcoming.sort((a, b) => a.days - b.days);
    out.push('⚖️ <b>Entering into force</b>\n' + upcoming.map((u) => u.line).join('\n'));
  }

  if (inForce.length) {
    out.push('✅ <b>Now in force</b>\n' + inForce.join('\n'));
  }

  return out.length ? out.join('\n\n') : null;
}

// ── 5. Отслеживание изменений: военный риск и PSC ───────────────────────
// Публикуем только факт изменения и ссылку, содержимое не копируем.
async function checkWatched(db) {
  const out = [];

  for (const w of WATCHED) {
    try {
      const res = await fetch(w.url, { headers: { 'user-agent': 'Mozilla/5.0' } });
      if (!res.ok) continue;

      const body = await res.text();
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
        out.push(`${w.title}\n  ${w.note}\n  <a href="${w.url}">open</a>`);
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

  return [
    `🌐 <b>BRIDGE BRIEF</b> · ${now.toISOString().slice(0, 10)}`,
    '',
    body.join('\n\n'),
    '',
    '<i>For information only. Official sources: NAVTEX, SafetyNET and ' +
    'administration bulletins.</i>',
  ].join('\n');
}

module.exports = { buildDigest };
