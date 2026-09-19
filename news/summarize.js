const { AUDIENCE_BRIEF, CONFIG } = require('./config');

const SYSTEM = `Ты редактор новостного канала для моряков.

${AUDIENCE_BRIEF}

ЗАДАЧА: из текста статьи сделать короткий двуязычный пост.

КРИТИЧЕСКИ ВАЖНО ПРО АВТОРСКОЕ ПРАВО:
Ты НЕ переводишь и НЕ копируешь статью. Ты пересказываешь суть СВОИМИ словами.
Не используй предложения из оригинала. Не цитируй.

КОНКРЕТИКА — ГЛАВНОЕ ТРЕБОВАНИЕ:
Общие формулировки бесполезны. Всегда вытаскивай из статьи факты:
- название судна, тип, флаг, оператора
- порт, страну, район, координаты
- даты и сроки вступления в силу
- цифры: тоннаж, суммы, проценты, количество человек, доля задержаний
- кто именно принял решение: IMO, флаг, Paris MoU, USCG, суд, профсоюз

Плохо: "суда в некоторых водах столкнулись с новыми рисками"
Хорошо: "12 июля у Хосе-Игнасио дрон повредил танкер под флагом Панамы"

Если в статье конкретики нет вообще — это, скорее всего, пресс-релиз, ставь skip: true.

body_en — до ${CONFIG.BODY_WORDS} слов. Уложись, но потрать их на факты, а не на вводные обороты.
Не начинай с "This article reports that" и подобного — сразу к сути.

Поле onboard — твоя добавленная ценность: одно предложение о том, что новость
означает практически для человека на борту. Не пересказ, а вывод.

ЯЗЫК ВЫВОДА — ТОЛЬКО АНГЛИЙСКИЙ. Русский текст в ответе недопустим.

Верни ТОЛЬКО JSON, без markdown-обёртки и без пояснений:
{
  "skip": false,
  "skip_reason": "",
  "title_en": "заголовок своими словами, до 70 знаков",
  "body_en": "суть с конкретикой, до ${CONFIG.BODY_WORDS} слов",
  "onboard_en": "что это значит на борту, одно-два предложения",
  "tags": ["PSC", "Regulation"]
}

skip: true ставь для пресс-релизов, рекламы, корпоративных и финансовых новостей,
и для всего, что не касается работы моряка напрямую.

Первый тег определяет обложку поста, поэтому ставь первым самый точный.
Теги выбирай из: PSC, Regulation, Casualty, Piracy, Crewing, Wages, Environment,
Cargo, Training, Safety, Fleet, Management, Machinery, Navigation, Tech,
Vetting, Chokepoint, Market, Offshore, Shipbuilding.

Vetting — веттинг и проверки: SIRE 2.0, RightShip, TMSA, CDI, задержания
  по PSC, типовые замечания. Пиши, к чему готовиться перед приходом инспектора.
Chokepoint — проливы и узкости: Ормуз, Баб-эль-Мандеб, Суэц, Панама, Малакка,
  Босфор. Что меняется в маршруте, страховке и надбавках экипажу.
Market — рынок и компании: ставки фрахта, заказы, слияния, альянсы, контейнерные
  сервисы. Ставь, только если это влияет на занятость и контракты моряков.
Offshore — оффшор и газ: платформы, СПГ, газовозы, ветропарки, снабженцы.
Shipbuilding — судостроение: новострой, верфи, ретрофиты, сдача судов.

Machinery — машинное отделение: главный двигатель, вспомогачи, котлы, сепараторы,
  топливные системы, скрубберы, что придётся обслуживать вахте.
Navigation — мостик: ECDIS, радары, AIS, ГМССБ, автопилот, датчики, VDR,
  изменения в допуске к оборудованию и в требованиях к подготовке.
Tech — новые технологии в целом: альтернативное топливо (аммиак, метанол, LNG),
  батареи и гибриды, береговое питание, автоматизация, дистанционный мониторинг,
  ретрофиты. Ставь Tech, если новость шире одной системы.

Safety — инициативы компаний по безопасности экипажа, новое оборудование, процедуры,
  программы по усталости и психическому здоровью.
Fleet — купля-продажа судов, заказы на новострой, передача флота.
Management — смена управляющей компании или собственника: у моряка меняется
  работодатель, контракт и порядок смены экипажа. Финансовые показатели компаний
  сюда НЕ относятся, это skip.`;

// ─────────────────────────────────────────────────────────────────────────
// Провайдеры ИИ. Порядок задаётся LLM_ORDER (по умолчанию бесплатные первыми):
//   gemini    — Google AI Studio, бесплатный ключ без карты (GEMINI_API_KEY)
//   compat    — любой OpenAI-совместимый API: Groq, OpenRouter и т.п.
//               (LLM_BASE_URL, LLM_API_KEY, LLM_MODEL)
//   anthropic — платный, только как запасной (ANTHROPIC_API_KEY)
// Если не отвечает ни один — включается режим заголовков без ИИ
// (CONFIG.HEADLINE_FALLBACK), чтобы канал не молчал.
// ─────────────────────────────────────────────────────────────────────────

const HOUR = 3600 * 1000;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const today = () => new Date().toISOString().slice(0, 10);

class LlmError extends Error {
  constructor(msg, status) { super(msg); this.status = status; }
}

async function failFrom(res, name) {
  const body = await res.text();
  let msg = body;
  try { msg = JSON.parse(body).error.message || body; } catch (e) { /* как есть */ }
  throw new LlmError(`${name} ${res.status}: ${String(msg).replace(/\s+/g, ' ').slice(0, 200)}`, res.status);
}

async function callAnthropic(input) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: CONFIG.MODEL,
      max_tokens: 700,
      system: SYSTEM,
      messages: [{ role: 'user', content: input }],
    }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) await failFrom(res, 'anthropic');
  const data = await res.json();
  return data.content.map((c) => c.text || '').join('');
}

async function callGemini(input) {
  const model = process.env.GEMINI_MODEL || 'gemini-flash-lite-latest';
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-goog-api-key': process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM }] },
        contents: [{ role: 'user', parts: [{ text: input }] }],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 2048,
          responseMimeType: 'application/json',
        },
      }),
      signal: AbortSignal.timeout(30000),
    });
  if (!res.ok) await failFrom(res, 'gemini');
  const data = await res.json();
  const parts = (data.candidates && data.candidates[0] &&
    data.candidates[0].content && data.candidates[0].content.parts) || [];
  return parts.map((x) => x.text || '').join('');
}

async function callCompat(input) {
  const base = String(process.env.LLM_BASE_URL).replace(/\/+$/, '');
  const res = await fetch(`${base}/chat/completions`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${process.env.LLM_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.LLM_MODEL,
      temperature: 0.3,
      max_tokens: 900,
      messages: [
        { role: 'system', content: SYSTEM },
        { role: 'user', content: input },
      ],
    }),
    signal: AbortSignal.timeout(30000),
  });
  if (!res.ok) await failFrom(res, 'compat');
  const data = await res.json();
  return (data.choices && data.choices[0] && data.choices[0].message.content) || '';
}

const PROVIDERS = {
  gemini: {
    enabled: () => !!process.env.GEMINI_API_KEY,
    call: callGemini,
    // Free tier у Flash-Lite ~500 запросов в сутки и ~15 в минуту: берём запас.
    dailyLimit: () => Number(process.env.GEMINI_DAILY_LIMIT) || 400,
    gapMs: () => Number(process.env.GEMINI_GAP_MS) || 5000,
  },
  compat: {
    enabled: () => !!(process.env.LLM_BASE_URL && process.env.LLM_API_KEY && process.env.LLM_MODEL),
    call: callCompat,
    dailyLimit: () => Number(process.env.LLM_DAILY_LIMIT) || 500,
    gapMs: () => Number(process.env.LLM_GAP_MS) || 4000,
  },
  anthropic: {
    enabled: () => !!process.env.ANTHROPIC_API_KEY,
    call: callAnthropic,
    dailyLimit: () => Number(process.env.ANTHROPIC_DAILY_LIMIT) || 1000,
    gapMs: () => 0,
  },
};

const order = () => String(process.env.LLM_ORDER || 'gemini,compat,anthropic')
  .split(',').map((x) => x.trim()).filter((x) => PROVIDERS[x]);

const state = {};
function st(name) {
  if (!state[name]) state[name] = { until: 0, reason: '', day: today(), used: 0, ok: 0, last: 0 };
  const s = state[name];
  if (s.day !== today()) { s.day = today(); s.used = 0; }
  return s;
}

// Что делать с провайдером после ошибки.
//  → мс на которые его выключить; 0 — ошибка только этой новости.
function cooldownMs(e) {
  const s = e.status;
  if (s === 429) return /per day|daily|quota|exhaust/i.test(e.message) ? 3 * HOUR : 90 * 1000;
  if (s === 401 || s === 402 || s === 403 || s === 404) return 6 * HOUR;
  if (s === 400) {
    // Кончились деньги, битый ключ, неверная модель — это надолго.
    // Иначе 400 — вина конкретного текста, провайдер исправен.
    return /credit|balance|billing|api key|api_key|authentic|permission|not found|model/i.test(e.message)
      ? 6 * HOUR : 0;
  }
  return 2 * 60 * 1000;   // 5xx, таймаут, обрыв сети
}

function parseDraft(text) {
  const raw = String(text || '').trim();
  const a = raw.indexOf('{'), b = raw.lastIndexOf('}');
  if (a === -1 || b <= a) return { skip: true, skip_reason: 'parse_error' };
  try {
    const d = JSON.parse(raw.slice(a, b + 1));
    if (d.skip) return { skip: true, skip_reason: String(d.skip_reason || 'not_relevant') };
    return {
      skip: false,
      title_en: String(d.title_en || '').trim(),
      body_en: String(d.body_en || '').trim(),
      onboard_en: String(d.onboard_en || '').trim(),
      tags: (Array.isArray(d.tags) ? d.tags : []).map(String).slice(0, 4),
    };
  } catch (e) {
    return { skip: true, skip_reason: 'parse_error' };
  }
}

// ── Режим без ИИ ────────────────────────────────────────────────────────
// Только заголовок источника + ссылка, без пересказа: ИИ нет, а копировать
// текст статьи нельзя. Тема определяется по словам, обложка — по теме.
const NOISE = /(webinar|sponsored|advertorial|press release|appoints|appointed|joins as|promoted|financial results|quarterly|earnings|dividend|share price|stock|IPO|whitepaper|podcast|subscribe|newsletter|job vacanc|вакансі|реклама)/i;

const TAG_RULES = [
  ['Piracy',     /(pirac|armed robber|hijack|kidnap|stowaway)/i],
  ['Chokepoint', /(Hormuz|Red Sea|Bab el.?Mandeb|Suez|Panama Canal|Malacca|Bosphorus|Houthi)/i],
  ['Casualty',   /(collision|aground|grounding|sinks|sank|capsiz|explosion|on fire|fire on|abandon ship|man overboard|oil spill|casualt|аварі|пожеж)/i],
  ['PSC',        /(port state control|detention|detained|deficienc|Paris MoU|Tokyo MoU|USCG|\bPSC\b|затрим)/i],
  ['Vetting',    /(\bSIRE\b|RightShip|vetting|TMSA|OCIMF)/i],
  ['Regulation', /(\bIMO\b|MEPC|\bMSC\b|SOLAS|MARPOL|STCW|\bMLC\b|convention|amendment|circular|\bCII\b|EEXI|\bETS\b|FuelEU|regulation)/i],
  ['Wages',      /(\bwages?\b|\bITF\b|collective agreement|crew pay|salar|\bILO\b|зарплат)/i],
  ['Crewing',    /(crew change|crewing|seafarer|manning|recruit|repatriat|abandoned crew|моряк|екіпаж|экипаж)/i],
  ['Training',   /(cadet|academy|diploma|certificate|training|exam|диплом|сертифікат|сертификат|курс)/i],
  ['Environment',/(emission|decarbon|scrubber|ballast water|carbon|greenhouse|net.zero|sulphur|sulfur)/i],
  ['Navigation', /(ECDIS|radar|\bAIS\b|GMDSS|GNSS|jamming|spoofing|autopilot)/i],
  ['Machinery',  /(main engine|machinery|propulsion|turbocharger|boiler|purifier|generator)/i],
  ['Tech',       /(ammonia|methanol|battery|hybrid|autonomous|digital twin|shore power|wind.assist)/i],
  ['Safety',     /(safety|fatigue|mental health|enclosed space|mooring accident)/i],
  ['Shipbuilding',/(newbuild|shipyard|order(ed|s)? for|delivery of)/i],
  ['Offshore',   /(offshore|platform|wind farm|LNG carrier|FPSO)/i],
  ['Cargo',      /(container|bulk carrier|tanker|\bLNG\b|\bLPG\b|cargo|freight)/i],
];

function headlineDraft(item) {
  const title = String(item.title || '').replace(/\s+/g, ' ').trim();
  if (!title) return { skip: true, skip_reason: 'no_title' };
  if (NOISE.test(title)) return { skip: true, skip_reason: 'fallback_noise' };

  const hay = `${title} ${String(item.content || '').slice(0, 600)}`;
  const tags = TAG_RULES.filter(([, re]) => re.test(hay)).map(([t]) => t).slice(0, 3);
  if (!tags.length) return { skip: true, skip_reason: 'fallback_no_topic' };

  return { skip: false, title_en: title.slice(0, 110), body_en: '', onboard_en: '', tags, fallback: true };
}

async function summarize(item) {
  const input = [
    `SOURCE: ${item.source}`,
    `TITLE: ${item.title}`,
    `TEXT: ${String(item.content || '').slice(0, 4000)}`,
  ].join('\n');

  const errors = [];

  for (const name of order()) {
    const p = PROVIDERS[name];
    if (!p.enabled()) continue;

    const s = st(name);
    if (Date.now() < s.until) continue;
    if (s.used >= p.dailyLimit()) { s.reason = 'суточный лимит'; continue; }

    try {
      const wait = s.last + p.gapMs() - Date.now();
      if (wait > 0) await sleep(wait);
      s.last = Date.now();
      s.used++;

      const draft = parseDraft(await p.call(input));
      s.ok++;
      s.reason = '';
      return draft;
    } catch (e) {
      const cd = cooldownMs(e);
      if (cd) { s.until = Date.now() + cd; s.reason = e.message; }
      errors.push(e.message);
      console.error(`[llm:${name}]`, e.message, cd ? `— выключен на ${Math.round(cd / 60000)} мин` : '');
    }
  }

  if (CONFIG.HEADLINE_FALLBACK) return headlineDraft(item);
  throw new Error('ИИ недоступен: ' + (errors.join(' | ') || 'нет ни одного ключа'));
}

// Все ли провайдеры сейчас недоступны (или ни один не настроен).
function llmAllDown() {
  return !order().some((n) => {
    const p = PROVIDERS[n];
    return p.enabled() && Date.now() >= st(n).until && st(n).used < p.dailyLimit();
  });
}

function llmStatusText() {
  const lines = order().map((n) => {
    const p = PROVIDERS[n];
    if (!p.enabled()) return `${n}: нет ключа`;
    const s = st(n);
    if (Date.now() < s.until) return `${n}: ⛔ ${s.reason.slice(0, 120)}`;
    if (s.used >= p.dailyLimit()) return `${n}: ⛔ суточный лимит ${p.dailyLimit()}`;
    return `${n}: ✅ ${s.used}/${p.dailyLimit()} за сутки`;
  });
  return lines.join('\n');
}

module.exports = { summarize, llmAllDown, llmStatusText, headlineDraft };
