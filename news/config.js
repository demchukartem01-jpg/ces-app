// Источники новостей. Начни с 4 — больше на старте только шум.
const SOURCES = [
  // ── Общие издания ─────────────────────────────────────────────
  { name: 'Splash 247',         url: 'https://splash247.com/feed/' },
  { name: 'Maritime Executive', url: 'https://maritime-executive.com/articles.rss' },
  { name: 'Safety4Sea',         url: 'https://safety4sea.com/feed/' },
  { name: 'Marine Insight',     url: 'https://www.marineinsight.com/feed/' },
  { name: 'gCaptain',           url: 'https://gcaptain.com/feed/' },

  // ── Расследования аварий: разборы, а не заметки ───────────────
  { name: 'MAIB',    url: 'https://www.gov.uk/government/organisations/marine-accident-investigation-branch.atom' },
  { name: 'NTSB',    url: 'https://www.ntsb.gov/news/press-releases/Pages/RSSFeed.aspx' },
  { name: 'ATSB',    url: 'https://www.atsb.gov.au/rss.xml' },

  // ── Экипаж, зарплаты, брошенные суда ──────────────────────────
  { name: 'ITF Seafarers', url: 'https://www.itfseafarers.org/en/rss.xml' },
  { name: 'Nautilus Int',  url: 'https://www.nautilusint.org/en/news-insight/news/rss/' },

  // ── Регулирование и практика ──────────────────────────────────
  { name: 'IMO',           url: 'https://www.imo.org/en/MediaCentre/Pages/rss.aspx' },
  { name: 'Offshore Energy', url: 'https://www.offshore-energy.biz/feed/' },

  // ПЛАТНЫЕ, RSS не отдают — не добавляй, потратишь время:
  // TradeWinds, Lloyd's List, Fairplay
];

// Эмодзи по теме — ставится перед заголовком. Меняй свободно.
// Ключ = тег в нижнем регистре, он же имя файла обложки.
const EMOJI = {
  psc:         '🛃',
  regulation:  '⚖️',
  casualty:    '🚨',
  piracy:      '🏴‍☠️',
  crewing:     '🧑‍✈️',
  wages:       '💵',
  environment: '🌊',
  cargo:       '📦',
  training:    '🎓',
  safety:      '🦺',
  fleet:       '🚢',
  management:  '🏢',
  default:     '⚓',
};


// Цвета для генерируемых карточек. Ключ — тег в нижнем регистре.
// accent — полоса и подпись темы, top — верх фонового градиента.
const THEMES = {
  psc:         { accent: '#E8A33D', top: '#1B2A3A' },
  regulation:  { accent: '#4A8FE8', top: '#152539' },
  casualty:    { accent: '#E8382B', top: '#221A22' },
  piracy:      { accent: '#D6541F', top: '#20201C' },
  crewing:     { accent: '#12B67A', top: '#132A2C' },
  wages:       { accent: '#D9B44A', top: '#1E2430' },
  environment: { accent: '#17A2A2', top: '#122A2E' },
  cargo:       { accent: '#8296AD', top: '#16232F' },
  training:    { accent: '#E3DCCB', top: '#1A2433' },
  safety:      { accent: '#F2C14E', top: '#1D2430' },
  fleet:       { accent: '#6FA8DC', top: '#152331' },
  management:  { accent: '#B08BD6', top: '#1C1E33' },
  default:     { accent: '#93A9BF', top: '#12263A' },
};

// Главный файл настройки. Его будешь править регулярно, код — нет.
const AUDIENCE_BRIEF = `
Аудитория канала — действующие моряки: палубные офицеры, механики, рядовой состав.
Они на борту, читают с телефона, интернет медленный.

Им важно: PSC и задержания судов, изменения конвенций и требований к дипломам,
аварии и их разбор, пиратство и зоны риска, зарплаты и условия контрактов,
крюинг, новые правила по топливу и экологии, смены экипажей.

Им также важно:
- смена владельца или управляющей компании их судна: от этого зависит
  работодатель, контракт, условия и порядок смены экипажа
- продажи и покупки судов, передача флота другому шипменеджеру
- инициативы компаний по безопасности экипажа: новое оборудование,
  изменения процедур, программы по усталости и психическому здоровью
- заказы на новострой, если они влекут набор экипажей

Им НЕ важно: квартальные отчёты и прибыль, котировки акций, фрахтовые
индексы сами по себе, пресс-релизы про партнёрства, реклама оборудования.
Разница простая: смена управляющей компании касается моряка напрямую,
её финансовые показатели — нет.
`;

const CONFIG = {
  COLLECT_CRON: '0 * * * *',      // сбор раз в час
  PUBLISH_CRON: '*/25 * * * *',   // публикация максимум раз в 25 минут
  QUIET_HOURS_UTC: [23, 0, 1, 2, 3, 4],
  DEDUPE_WINDOW: 300,
  SIMILARITY_THRESHOLD: 0.6,
  MAX_PER_SOURCE: 10,
  MODEL: 'claude-haiku-4-5-20251001',

  // Сколько слов в пересказе. Русский блок убран, места стало больше.
  // Выше 90 — пост перестанет влезать в подпись под фото (лимит 1024).
  BODY_WORDS: 80,

  MODERATION: true,
};

module.exports = { SOURCES, AUDIENCE_BRIEF, CONFIG, EMOJI, THEMES };
