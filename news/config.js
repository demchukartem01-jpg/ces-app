// Фильтры релевантности. Применяются ДО отправки в Claude — экономят токены
// на широких лентах, где морского контента меньшинство.
const MARITIME_FILTER =
  /(море|морськ|морск|судн|порт|танкер|балкер|контейнер|фрахт|екіпаж|экипаж|моряк|навігац|навигац|причал|термінал|терминал|shipping|vessel|seafarer|port|tanker|freight)/i;

const DOC_FILTER =
  /(STCW|MLC|diploma|диплом|сертифікат|сертификат|посвідчення|удостоверен|кваліфікац|квалификац|підтвердження|подтвержден|виза|віза|visa|seaman|CoC|certificate of competency|endorsement|revalidation|medical certificate|ENG1|manning|Морська адміністрація)/i;

// Техника: машинное отделение, навигационное оборудование, автоматика.
// Фильтр широкий — на профильных лентах пропускает почти всё,
// на общих отсекает коммерцию и финансы.
const TECH_FILTER =
  /(engine|machinery|propulsion|thruster|generator|boiler|purifier|separator|scrubber|turbocharger|fuel system|lubric|bearing|shaft|двигател|машинн|механизм|дизел|котёл|котел|сепаратор|топливн|ECDIS|radar|AIS|GMDSS|gyro|autopilot|navigation system|bridge system|VDR|BNWAS|sensor|automation|digital twin|remote monitoring|навигацион|радар|гироком|автопилот|электроник|автоматизац|ammonia|methanol|LNG dual|battery|hybrid|shore power|retrofit)/i;

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

  // ── Техника: машина, навигация, новые технологии ──────────────
  { name: 'The Motorship',    url: 'https://www.motorship.com/feed',                        category: 'TECH' },
  { name: 'Riviera Maritime', url: 'https://www.rivieramm.com/rss/news',                    category: 'TECH' },
  { name: 'Ship Technology',  url: 'https://www.ship-technology.com/feed/',                 category: 'TECH' },
  { name: 'Marine Insight Tech', url: 'https://www.marineinsight.com/feed/',                category: 'TECH', filter: TECH_FILTER },
  { name: 'Safety4Sea Tech',  url: 'https://safety4sea.com/feed/',                          category: 'TECH', filter: TECH_FILTER },

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


// Цвета для генерируемых карточек. Единый красный стиль канала —
// категории различаются только оттенком и яркостью акцента, фон
// у всех одинаково тёмный (почти чёрный), без синих/зелёных пятен.
const THEMES = {
  psc:         { accent: '#E8352B', top: '#170807' },
  regulation:  { accent: '#D6432E', top: '#170807' },
  casualty:    { accent: '#FF4433', top: '#1D0906' },
  piracy:      { accent: '#C22E1F', top: '#170807' },
  crewing:     { accent: '#E85A3D', top: '#170807' },
  wages:       { accent: '#E87A3D', top: '#170807' },
  environment: { accent: '#D6432E', top: '#170807' },
  cargo:       { accent: '#C22E1F', top: '#170807' },
  training:    { accent: '#E85A3D', top: '#170807' },
  tech:        { accent: '#FF6B3D', top: '#170807' },
  navigation:  { accent: '#FF6B3D', top: '#170807' },
  machinery:   { accent: '#E87A3D', top: '#170807' },
  safety:      { accent: '#FF4433', top: '#1D0906' },
  fleet:       { accent: '#D6432E', top: '#170807' },
  management:  { accent: '#C22E1F', top: '#170807' },
  default:     { accent: '#E8352B', top: '#170807' },
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

Техника: новое оборудование в машине и на мостике, ECDIS/радары/автоматика,
альтернативное топливо, ретрофиты, цифровые системы. Пиши, что это меняет
для вахты: что появится на борту, что придётся обслуживать, чему учиться.

Им НЕ важно: квартальные отчёты и прибыль, котировки акций, фрахтовые
индексы сами по себе, пресс-релизы про партнёрства, реклама оборудования.
Разница простая: смена управляющей компании касается моряка напрямую,
её финансовые показатели — нет.
`;

const CONFIG = {
  COLLECT_CRON: '0 * * * *',      // сбор раз в час
  PUBLISH_CRON: '*/25 * * * *',   // публикация максимум раз в 25 минут
  QUIET_HOURS_UTC: [23, 0, 1, 2, 3, 4],
  DEDUPE_WINDOW: 800,
  // Понижен с 0.6: разные издания один и тот же инцидент часто называют
  // совсем разными словами ("Houthi drone strikes tanker" vs "Yemen
  // rebels attack VLCC near Yanbu") — по одним словам не поймать.
  // Основную работу теперь делает вторая проверка — по именам собственным,
  // см. news/store.js.
  SIMILARITY_THRESHOLD: 0.5,
  MAX_PER_SOURCE: 10,
  MODEL: 'claude-haiku-4-5-20251001',

  // Сколько слов в пересказе. Русский блок убран, места стало больше.
  // Выше 90 — пост перестанет влезать в подпись под фото (лимит 1024).
  BODY_WORDS: 80,

  // Автопубликация. Очередь заполняется сразу со статусом approved,
  // модерация по кнопкам не запрашивается. Верни true — вернётся ручной шаг.
  MODERATION: false,
};

module.exports = { SOURCES, AUDIENCE_BRIEF, CONFIG, EMOJI, THEMES, MARITIME_FILTER, DOC_FILTER, TECH_FILTER };
