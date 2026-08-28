const crypto = require('crypto');
const { CURRENCIES, CRYPTO, WATCHED, CONVENTIONS, DIGEST,
        CHOKEPOINTS, SEA_STATE_ALERT_M, QUAKE_MIN_MAG } = require('./config');

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

// ── 2. Курсы валют и крипта ─────────────────────────────────────────────
// Фиат показываем как «сколько за 1 доллар», крипту наоборот —
// ценой в долларах, иначе получаются нечитаемые нули.
async function cryptoLines() {
  if (!CRYPTO || !CRYPTO.length) return [];

  try {
    const ids = CRYPTO.map((c) => c.id).join(',');
    const res = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
    );
    if (!res.ok) throw new Error('coingecko ' + res.status);

    const data = await res.json();

    return CRYPTO.map((c) => {
      const row = data[c.id];
      if (!row || row.usd == null) return null;

      const price = row.usd >= 100
        ? Math.round(row.usd).toLocaleString('en-US')
        : row.usd.toFixed(row.usd >= 1 ? 2 : 4);

      const ch = row.usd_24h_change;
      const trend = (ch == null) ? ''
        : ` (${ch >= 0 ? '+' : ''}${ch.toFixed(1)}% 24h)`;

      return `  ${c.label} $${price}${trend}`;
    }).filter(Boolean);
  } catch (e) {
    // Крипта не критична — фиат покажем всё равно
    console.error('[digest:crypto]', e.message);
    return [];
  }
}

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

  const crypto = await cryptoLines();
  const all = lines.concat(crypto);

  if (!all.length) return null;
  return '💱 <b>USD rates</b>\n' + all.join('\n');
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
  const ahead = DIGEST.CONVENTION_MINOR || [];
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

// ── 4b. Волнение на ключевых проходах ───────────────────────────────────
// Open-Meteo Marine — бесплатно, без ключа, принимает несколько точек разом.
async function seaState() {
  const lats = CHOKEPOINTS.map((p) => p.lat).join(',');
  const lons = CHOKEPOINTS.map((p) => p.lon).join(',');

  const url = 'https://marine-api.open-meteo.com/v1/marine' +
              `?latitude=${lats}&longitude=${lons}` +
              '&daily=wave_height_max&forecast_days=1&timezone=UTC';

  const res = await fetch(url);
  if (!res.ok) throw new Error('open-meteo ' + res.status);

  const data = await res.json();
  const arr = Array.isArray(data) ? data : [data];

  const lines = [];
  arr.forEach((entry, i) => {
    const point = CHOKEPOINTS[i];
    const h = entry && entry.daily && entry.daily.wave_height_max
      && entry.daily.wave_height_max[0];
    if (point && h != null) {
      const flag = h >= SEA_STATE_ALERT_M ? ' ⚠️' : '';
      lines.push(`  ${point.name} — ${Number(h).toFixed(1)} m${flag}`);
    }
  });

  if (!lines.length) return null;
  return '🌊 <b>Max wave height today</b>\n' + lines.join('\n');
}

// ── 4c. Космическая погода ──────────────────────────────────────────────
// Kp — планетарный индекс геомагнитной активности. От 5 начинается буря:
// деградация GNSS и КВ-связи. Для мостика это практическая информация.
async function spaceWeather() {
  const res = await fetch('https://services.swpc.noaa.gov/products/noaa-planetary-k-index.json');
  if (!res.ok) throw new Error('SWPC ' + res.status);

  const rows = await res.json();
  if (!Array.isArray(rows) || rows.length < 2) return null;

  const last = rows[rows.length - 1];
  const kp = parseFloat(last[1]);
  if (isNaN(kp)) return null;

  let note;
  if (kp >= 7)      note = 'severe storm — expect GNSS errors and HF blackouts';
  else if (kp >= 5) note = 'geomagnetic storm — GNSS accuracy and HF may degrade';
  else if (kp >= 4) note = 'unsettled — minor HF effects at high latitudes';
  else              note = 'quiet';

  // В спокойные дни не занимаем место
  if (kp < 4) return null;

  return `📡 <b>Space weather</b>\n  Kp ${kp.toFixed(1)} — ${note}`;
}

// ── 4d. Сильные землетрясения ───────────────────────────────────────────
// Толчок у побережья — это закрытые порты, повреждённые причалы и цунами.
async function quakes() {
  const res = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson');
  if (!res.ok) throw new Error('USGS ' + res.status);

  const data = await res.json();
  const feats = (data.features || [])
    .filter((f) => f.properties && f.properties.mag >= QUAKE_MIN_MAG)
    .sort((a, b) => b.properties.mag - a.properties.mag)
    .slice(0, 4);

  if (!feats.length) return null;

  const lines = feats.map((f) => {
    const p = f.properties;
    const tsunami = p.tsunami ? ' · tsunami advisory' : '';
    return `  M${Number(p.mag).toFixed(1)} — ${p.place}${tsunami}`;
  });

  return '🌋 <b>Significant earthquakes (24h)</b>\n' + lines.join('\n');
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

// ── Отдельный регуляторный пост ─────────────────────────────────────────
// Собирается только в дни крупных вех. Иначе возвращает null и пост не выходит.
function buildRegulatory(now) {
  const major = DIGEST.CONVENTION_MAJOR || [];
  const hits = [];

  for (const c of CONVENTIONS) {
    const days = dayDiff(new Date(c.date), now);
    if (major.indexOf(days) === -1) continue;
    hits.push({ days, c });
  }

  if (!hits.length) return null;

  hits.sort((a, b) => a.days - b.days);

  const blocks = hits.map(({ days, c }) => {
    const head = days === 0
      ? '🔴 <b>IN FORCE TODAY</b>'
      : `🗓 <b>${days} days to go</b> · ${c.date}`;
    return `${head}\n\n${c.title}${c.ref ? `\n\n<i>${c.ref}</i>` : ''}`;
  });

  // Что ещё на горизонте — чтобы пост был полезен и тем, кого эта дата не касается
  const horizon = CONVENTIONS
    .map((c) => ({ d: dayDiff(new Date(c.date), now), c }))
    .filter((x) => x.d > 0 && !hits.some((h) => h.c === x.c))
    .sort((a, b) => a.d - b.d)
    .slice(0, 4)
    .map((x) => `  ${x.c.date} — ${x.c.ref || x.c.title.slice(0, 60)}`);

  const out = ['⚖️ <b>REGULATORY WATCH</b>', '', blocks.join('\n\n———\n\n')];

  if (horizon.length) {
    out.push('', '<b>Also ahead</b>', horizon.join('\n'));
  }

  out.push('', '<i>Check the exact wording with your flag administration or class society.</i>');

  return out.join('\n');
}

// ── Сборка ──────────────────────────────────────────────────────────────
async function buildDigest(db) {
  const now = new Date();

  const parts = await Promise.all([
    safe('cyclones', cyclones),
    safe('seastate', seaState),
    safe('spaceweather', spaceWeather),
    safe('quakes', quakes),
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
    '🤝 <a href="https://t.me/tf141supreme">Task Force Supreme</a> · ' +
    '🎓 <a href="https://t.me/ces_morskie_bot">CES exam trainer</a>',
    '',
    '<i>For information only. Official sources: NAVTEX, SafetyNET and ' +
    'administration bulletins.</i>',
  ].join('\n');
}

module.exports = { buildDigest, buildRegulatory };
