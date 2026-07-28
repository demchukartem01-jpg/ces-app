// ============ НАСТРОЙКИ СУТОЧНОЙ СВОДКИ ============

const DIGEST = {
  // Во сколько выходит сводка (UTC). 06:00 UTC — утро для Европы,
  // день для Азии, вечер для Филиппин.
  CRON: '0 6 * * *',

  // false — сводка уходит в канал сама, без твоего подтверждения.
  // Флаг СВОЙ, отдельный от новостей: модерация новостей остаётся как была.
  MODERATION: false,

  // Напоминание про Admiralty NM. 4 = четверг.
  NM_WEEKDAY: 4,

  // За сколько дней предупреждать о вступающих в силу требованиях
  CONVENTION_LOOKAHEAD_DAYS: 45,
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
  // ПРИМЕР — замени на реальные:
  // { date: '2027-01-01', title: 'Amendments enter into force', ref: 'MARPOL Annex VI' },
];

module.exports = { DIGEST, CURRENCIES, WATCHED, CONVENTIONS };
