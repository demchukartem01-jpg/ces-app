// ============ НАСТРОЙКИ СУТОЧНОЙ СВОДКИ ============

const DIGEST = {
  // Во сколько выходит сводка (UTC). 06:00 — утро для Европы,
  // день для Азии, вечер для Филиппин.
  CRON: '0 6 * * *',

  // true — не публиковать, если содержимое дословно совпало с прошлой сводкой.
  SKIP_IF_UNCHANGED: true,

  // false — сводка уходит в канал сама, без твоего подтверждения.
  // Флаг СВОЙ, отдельный от новостей: модерация новостей остаётся как была.
  MODERATION: false,

  // Напоминание про Admiralty NM. 4 = четверг.
  NM_WEEKDAY: 4,

  // Крупные вехи — уходят ОТДЕЛЬНЫМ постом со своей обложкой.
  // Такой пост читают внимательно и пересылают своим.
  CONVENTION_MAJOR: [180, 90, 30, 0],

  // Мелкие вехи — строкой внутри сводки, как напоминание в последний момент.
  CONVENTION_MINOR: [14, 7, 3, 1],

  // Через сколько дней ПОСЛЕ вступления напомнить в сводке —
  // для тех, кто был в рейсе и пропустил
  CONVENTION_AFTER: [7, 30],

  // Во сколько выходит регуляторный пост (UTC). Отдельно от сводки,
  // чтобы два поста не падали в одну минуту.
  REG_CRON: '30 7 * * *',
};

// Валюты в сводке. Показывается «сколько за 1 доллар».
const CURRENCIES = [
  { code: 'PHP', label: '🇵🇭 Peso' },
  { code: 'INR', label: '🇮🇳 Rupee' },
  { code: 'UAH', label: '🇺🇦 Hryvnia' },
  { code: 'EUR', label: '🇪🇺 Euro' },
];

// Точки, по которым показываем волнение. Добавляй/убирай свободно —
// это узловые проходы, через которые идёт большинство рейсов.
const CHOKEPOINTS = [
  { name: 'North Atlantic',    lat:  50.0, lon:  -30.0 },
  { name: 'Bay of Biscay',     lat:  45.5, lon:   -5.0 },
  { name: 'Cape of Good Hope', lat: -35.0, lon:   20.0 },
  { name: 'Gulf of Aden',      lat:  12.5, lon:   47.0 },
  { name: 'Malacca Strait',    lat:   2.5, lon:  101.0 },
  { name: 'South China Sea',   lat:  15.0, lon:  115.0 },
];

// Волна выше этого — помечаем восклицательным знаком
const SEA_STATE_ALERT_M = 4.0;

// Минимальная магнитуда землетрясения для попадания в сводку
const QUAKE_MIN_MAG = 6.0;

// Криптовалюты — показываются ценой в долларах, не наоборот.
// Хочешь добавить — id берётся из адреса монеты на coingecko.com
const CRYPTO = [
  { id: 'bitcoin', label: '₿ Bitcoin' },
  // { id: 'the-open-network', label: '💎 TON' },
  // { id: 'tether',           label: '💵 USDT' },
];

// Страницы, за изменениями которых следим.
// Меняется содержимое — бот сообщает и даёт ссылку.
const WATCHED = [
  {
    id: 'jwc',
    title: '⚔️ <b>War risk areas</b>',
    note: 'Joint War Committee has updated the listed areas',
    url: 'https://www.lmalloyds.com/LMA/Underwriting/Marine/JWC/Joint_War.aspx',
  },
  {
    id: 'parismou',
    title: '🛃 <b>Paris MoU</b>',
    note: 'New detention list published',
    url: 'https://parismou.org/inspections-risk/inspection-results/detentions',
  },
  {
    id: 'tokyomou',
    title: '🛃 <b>Tokyo MoU</b>',
    note: 'New detention list published',
    url: 'https://www.tokyo-mou.org/inspections_detentions/detention_list.php',
  },
];

// ============ КАЛЕНДАРЬ КОНВЕНЦИЙ ============
// Заполняешь сам. Бот достаёт то, что наступает в ближайшие 45 дней.
// title пиши ПО-АНГЛИЙСКИ — он идёт прямо в пост.
// Даты сверяй по IMO, я их не выдумываю.
//
//   { date: '2027-01-01', title: 'New requirements for ...', ref: 'SOLAS ch.II-1' }

const CONVENTIONS = [
  // ── Подтверждено по циркулярам классификационных обществ ──────────────
  {
    date: '2027-01-01',
    title: 'IMSBC Code amendments 08-25 become mandatory — new cargo schedules and revised entries',
    ref: 'IMSBC Code',
  },
  {
    date: '2027-01-01',
    title: 'Polar Code ch. 9-1 and 11-1 apply to existing non-SOLAS ships — fishing vessels over 24 m, yachts 300 GT and above, cargo ships 300-500 GT',
    ref: 'SOLAS ch. XIV',
  },
  {
    date: '2027-03-01',
    title: 'Sulphur limit drops to 0.10 per cent in the Canadian Arctic and Norwegian Sea ECAs',
    ref: 'MARPOL Annex VI',
  },

  // ── Добавлено 28.08.2026 по обзорам DNV (MEPC 83 и MEPC 84) ───────────
  {
    date: '2027-01-01',
    title: 'NOx Tier III certification required for ships contracted on or after this date and intended to operate in the North-East Atlantic ECA',
    ref: 'MARPOL Annex VI',
  },
  {
    date: '2027-03-01',
    title: 'NOx Technical Code amendments enter into force — multiple engine operational profiles (MEOP) and engine re-certification allowed',
    ref: 'NOx Technical Code',
  },
  {
    date: '2027-07-01',
    title: 'Keel-laying cut-off for North-East Atlantic ECA: ships constructed on or after this date need NOx Tier III engines',
    ref: 'MARPOL Annex VI',
  },
  {
    date: '2027-09-01',
    title: 'North-East Atlantic ECA enters into force for SOx, PM and NOx — covers waters of Greenland, Iceland, Faroes, Ireland, UK, France, Spain and Portugal',
    ref: 'MARPOL Annex VI',
  },
  {
    date: '2028-09-01',
    title: '0.10 per cent sulphur limit starts to apply in the North-East Atlantic ECA, twelve months after entry into force',
    ref: 'MARPOL Annex VI',
  },

  // ── ТРЕБУЕТ ПРОВЕРКИ ПЕРЕД ПУБЛИКАЦИЕЙ ────────────────────────────────
  // IMO Net-Zero Framework: по состоянию на май 2026 всё ещё пересматривался
  // на MEPC 84. Дата вступления в силу 01.03.2027 называлась при условии
  // принятия на внеочередной сессии, но сессия переносилась. НЕ публикуй,
  // пока не подтвердишь на imo.org или в свежем обзоре DNV.
  // { date: '2027-03-01', title: 'IMO Net-Zero Framework enters into force', ref: 'MARPOL Annex VI' },
  //
  // Одобрено на MEPC 84, но ещё НЕ принято — даты появятся позже:
  //   поправки к BWM Convention (усиление освидетельствований)
  //   PV-клапаны на танкерах, перевозящих сырую нефть (Annex VI, Reg. 15)

  // ── Как пополнять ─────────────────────────────────────────────────────
  // Смотри регуляторные обзоры классификационных обществ — они выходят
  // готовыми списками с датами:
  //   DNV       — Statutory news / regulatory updates
  //   Lloyd's Register — Class News
  //   UK P&I    — IMO Regulatory Update (раз в год, самый удобный)
  //   IRClass   — технические циркуляры
  //
  // title пиши ПО-АНГЛИЙСКИ, он идёт прямо в пост.
];

module.exports = { DIGEST, CURRENCIES, CRYPTO, WATCHED, CONVENTIONS, CHOKEPOINTS, SEA_STATE_ALERT_M, QUAKE_MIN_MAG };
