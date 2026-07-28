// ============ НАСТРОЙКИ СУТОЧНОЙ СВОДКИ ============

const DIGEST = {
  // Во сколько выходит сводка (UTC). 06:00 UTC — утро для Европы,
  // день для Азии, вечер для Филиппин.
  CRON: '0 6 * * *',

  // Напоминание про Admiralty NM. 4 = четверг.
  NM_WEEKDAY: 4,

  // За сколько дней предупреждать о вступающих в силу требованиях
  CONVENTION_LOOKAHEAD_DAYS: 45,

  // Проверять изменения на страницах военного риска и PSC — раз в сутки
  WATCH_CRON: '0 5 * * *',
};

// Валюты в сводке. Ключ — код, значение — как подписать.
// USD базовая, курсы показываются как «сколько за 1 доллар».
const CURRENCIES = [
  { code: 'PHP', label: '🇵🇭 Песо' },
  { code: 'INR', label: '🇮🇳 Рупия' },
  { code: 'UAH', label: '🇺🇦 Гривна' },
  { code: 'RON', label: '🇷🇴 Лей' },
  { code: 'EUR', label: '🇪🇺 Евро' },
];

// Страницы, за изменениями которых следим.
// Меняется содержимое — бот сообщает и даёт ссылку.
const WATCHED = [
  {
    id: 'jwc',
    title: '⚔️ Зоны военного риска',
    note: 'Joint War Committee обновил список районов',
    url: 'https://www.lmalloyds.com/LMA/Underwriting/Marine/JWC/Joint_War.aspx',
  },
  {
    id: 'parismou',
    title: '🛃 Paris MoU',
    note: 'Опубликован новый список задержаний',
    url: 'https://parismou.org/inspections-risk/inspection-results/detentions',
  },
  {
    id: 'tokyomou',
    title: '🛃 Tokyo MoU',
    note: 'Опубликован новый список задержаний',
    url: 'https://www.tokyo-mou.org/inspections_detentions/detention_list.php',
  },
];

// ============ КАЛЕНДАРЬ КОНВЕНЦИЙ ============
// Заполняешь сам. Бот достаёт то, что наступает в ближайшие 45 дней.
// date — ISO, что вступает в силу. Проверяй даты по IMO, я их не выдумываю.
//
// Формат:
//   { date: '2027-01-01', title: 'Краткая суть', ref: 'SOLAS ch.II-1', url: '...' }

const CONVENTIONS = [
  // ПРИМЕРЫ — замени на реальные, сверившись с IMO:
  // { date: '2027-01-01', title: 'Новые требования к ...', ref: 'SOLAS', url: 'https://www.imo.org' },
];

module.exports = { DIGEST, CURRENCIES, WATCHED, CONVENTIONS };
