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

  // За сколько дней предупреждать о вступающих в силу требованиях
  CONVENTION_LOOKAHEAD_DAYS: 60,

  // Сколько дней показывать то, что УЖЕ вступило в силу —
  // для тех, кто был в рейсе и пропустил
  CONVENTION_LOOKBACK_DAYS: 30,
};

// Валюты в сводке. Показывается «сколько за 1 доллар».
const CURRENCIES = [
  { code: 'PHP', label: '🇵🇭 Peso' },
  { code: 'INR', label: '🇮🇳 Rupee' },
  { code: 'UAH', label: '🇺🇦 Hryvnia' },
  { code: 'EUR', label: '🇪🇺 Euro' },
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

  // ── ТРЕБУЕТ ПРОВЕРКИ ПЕРЕД ПУБЛИКАЦИЕЙ ────────────────────────────────
  // IMO Net-Zero Framework: сроки сдвигались, уточни текущий статус
  // на сайте IMO или в циркулярах DNV, прежде чем раскомментировать.
  // { date: '2028-01-01', title: 'IMO Net-Zero Framework: first reporting period begins', ref: 'MARPOL Annex VI' },

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

module.exports = { DIGEST, CURRENCIES, WATCHED, CONVENTIONS };
