// Фильтры релевантности. Применяются ДО отправки в Claude — экономят токены
// на широких лентах, где морского контента меньшинство.
const MARITIME_FILTER =
  /(море|морськ|морск|судн|порт|танкер|балкер|контейнер|фрахт|екіпаж|экипаж|моряк|навігац|навигац|причал|термінал|терминал|shipping|vessel|seafarer|port|tanker|freight)/i;

const DOC_FILTER =
  /(STCW|MLC|diploma|диплом|сертифікат|сертификат|посвідчення|удостоверен|кваліфікац|квалификац|підтвердження|подтвержден|виза|віза|visa|seaman|CoC|certificate of competency|endorsement|revalidation|medical certificate|ENG1|manning|Морська адміністрація)/i;

// Источники новостей.
// category — влияет на ротацию публикаций: конвейер по очереди берёт из той
//            категории, из которой дольше всего не публиковали.
// filter   — необязательный: если задан, заголовок+текст должны совпасть,
//            иначе статья даже не уйдёт в Claude.
const SOURCES = [
  // ── Общие издания ─────────────────────────────────────────────
  { name: 'Splash 247',         url: 'https://splash247.com/feed/',                        category: 'WORLD' },
  { name: 'Maritime Executive', url: 'https://maritime-executive.com/articles.rss',        category: 'WORLD' },
  { name: 'Safety4Sea',         url: 'https://safety4sea.com/feed/',                       category: 'WORLD' },
  { name: 'Marine Insight',     url: 'https://www.marineinsight.com/feed/',                category: 'WORLD' },
  { name: 'gCaptain',           url: 'https://gcaptain.com/feed/',                         category: 'WORLD' },

  // ── Расследования аварий: разборы, а не заметки ───────────────
  { name: 'MAIB',    url: 'https://www.gov.uk/government/organisations/marine-accident-investigation-branch.atom', category: 'WORLD' },
  { name: 'NTSB',    url: 'https://www.ntsb.gov/news/press-releases/Pages/RSSFeed.aspx',   category: 'WORLD' },
  { name: 'ATSB',    url: 'https://www.atsb.gov.au/rss.xml',                               category: 'WORLD' },

  // ── Экипаж, зарплаты, брошенные суда ──────────────────────────
  { name: 'ITF Seafarers', url: 'https://www.itfseafarers.org/en/rss.xml',                 category: 'WORLD' },
  { name: 'Nautilus Int',  url: 'https://www.nautilusint.org/en/news-insight/news/rss/',   category: 'WORLD' },

  // ── Украина ───────────────────────────────────────────────────
  { name: 'USM',           url: 'https://en.usm.media/feed/',                              category: 'UA' },
  { name: 'USM (укр)',     url: 'https://usm.media/feed/',                                 category: 'UA' },
  { name: 'ЦТС',           url: 'https://cfts.org.ua/rss',                                 category: 'UA', filter: MARITIME_FILTER },
  { name: 'ПРМТУ',         url: 'https://mtwtu.org.ua/feed/',                              category: 'UA' },

  // ── Европа и оффшор ───────────────────────────────────────────
  { name: 'Offshore Energy',  url: 'https://www.offshore-energy.biz/feed/',                category: 'EU_OFFSHORE' },
  { name: 'Offshore Wind',    url: 'https://www.offshorewind.biz/feed/',                   category: 'EU_OFFSHORE' },
  { name: 'Naval Today',      url: 'https://www.navaltoday.com/feed/',                     category: 'EU_OFFSHORE' },
  { name: 'Hellenic Shipping', url: 'https://www.hellenicshippingnews.com/feed/',          category: 'EU_OFFSHORE' },

  // ── Документы: дипломы, конвенции, требования ─────────────────
  { name: 'IMO',       url: 'https://www.imo.org/en/MediaCentre/Pages/rss.aspx',           category: 'DOCS' },
  // gov.uk отдаёт Atom для любого поискового URL — отсюда идут MGN/MSN
  { name: 'MCA (UK)',  url: 'https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=maritime-and-coastguard-agency', category: 'DOCS' },
  { name: 'Safety4Sea Docs', url: 'https://safety4sea.com/feed/',                          category: 'DOCS', filter: DOC_FILTER },

  // ПЛАТНЫЕ, RSS не отдают — не добавляй, потратишь время:
  // TradeWinds, Lloyd\'s List, Fairplay
  //
  // БЕЗ RSS, нужен watcher по странице (механизм есть в news/digest/):
  // marad.gov.ua, uspa.gov.ua, emsa.europa.eu, liscr.com, register-iri.com
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

Отдельно важно: всё, что меняет требования к документам моряка — дипломы,
подтверждения, сертификаты, медкомиссия, визы, требования флагов и портов.
Такие новости не пропускай, даже если они выглядят сухо и бюрократично.

Украинские новости: порты, морской коридор, работа моряков, крюинг, документы
Морской администрации. Военную и политическую сводку как таковую — пропускай,
она не про работу. Про удары по портам пиши сдержанно и по фактам.

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

  // Автопубликация. Очередь заполняется сразу со статусом approved,
  // модерация по кнопкам не запрашивается. Верни true — вернётся ручной шаг.
  MODERATION: false,
};

module.exports = { SOURCES, AUDIENCE_BRIEF, CONFIG, EMOJI, THEMES, MARITIME_FILTER, DOC_FILTER };
