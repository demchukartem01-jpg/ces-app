// Фильтры релевантности. Применяются ДО отправки в Claude — экономят токены
// на широких лентах, где морского контента меньшинство.
// ─────────────── ФИЛЬТРЫ РЕЛЕВАНТНОСТИ ───────────────
// Применяются ДО отправки в Claude — экономят токены на широких лентах.
// Одна и та же лента может стоять в разных категориях с разными фильтрами:
// так из общего потока вытягиваются только нужные темы.

const MARITIME_FILTER =
  /(море|морськ|морск|судн|порт|танкер|балкер|контейнер|фрахт|екіпаж|экипаж|моряк|навігац|навигац|причал|термінал|терминал|shipping|vessel|seafarer|port|tanker|freight)/i;

// Документы моряка: дипломы, подтверждения, медкомиссия, визы
const DOC_FILTER =
  /(STCW|MLC|diploma|диплом|сертифікат|сертификат|посвідчення|удостоверен|кваліфікац|квалификац|підтвердження|подтвержден|виза|віза|visa|seaman|CoC|certificate of competency|endorsement|revalidation|medical certificate|ENG1|manning|Морська адміністрація)/i;

// Техника: машина, мостик, новые технологии, судостроение
const TECH_FILTER =
  /(engine|machinery|propulsion|thruster|generator|boiler|purifier|separator|scrubber|turbocharger|fuel system|lubric|bearing|shaft|ECDIS|radar|AIS|GMDSS|gyro|autopilot|navigation system|bridge system|VDR|BNWAS|sensor|automation|digital twin|remote monitoring|newbuild|shipyard|retrofit|drydock|ammonia|methanol|LNG dual|dual.fuel|battery|hybrid|shore power|wind.assist|двигател|машинн|дизел|котёл|котел|сепаратор|навигацион|радар|автопилот|автоматизац)/i;

// Веттинг и проверки: PSC, SIRE, RightShip, задержания, обсервации
const VETTING_FILTER =
  /(port state control|PSC|detention|detained|deficienc|SIRE|OCIMF|RightShip|vetting|inspection regime|Paris MoU|Tokyo MoU|CDI|TMSA|banned from|ban on vessel|веттинг|задержан)/i;

// Пиратство, war risk, проливы, безопасность районов плавания
const RISK_FILTER =
  /(pirac|piracy|armed robber|hijack|kidnap|stowaway|war risk|HRA|Gulf of Aden|Gulf of Guinea|Red Sea|Bab el.?Mandeb|Hormuz|Malacca|Singapore Strait|Suez|Panama Canal|Bosphorus|Dardanelles|Houthi|drone attack|missile|mine|seizure|dark fleet|sanction)/i;

// Экономика и рынок: ставки, компании, контейнерные линии, порты
const ECON_FILTER =
  /(freight rate|charter rate|spot rate|TCE|newbuild order|orderbook|merger|acquisition|joint venture|alliance|capacity|congestion|terminal|throughput|TEU|box trade|carrier|liner service|fleet growth|scrapping|demolition|tonnage|ставк|фрахт)/i;

// ─────────────── ИСТОЧНИКИ ───────────────
// category решает ротацию публикаций: конвейер по очереди берёт из той
// категории, из которой дольше всего не публиковали.
// filter — необязательный: если задан, заголовок+текст должны совпасть.
//
// Проверено 28.08.2026: все ленты ниже отдавали валидный RSS.
const SOURCES = [
  // ── WORLD: общая повестка, аварии, экипажи ───────────────────
  { name: 'Splash 247',          url: 'https://splash247.com/feed/',                       category: 'WORLD' },
  { name: 'Maritime Executive',  url: 'https://maritime-executive.com/articles.rss',       category: 'WORLD' },
  { name: 'gCaptain',            url: 'https://gcaptain.com/feed/',                        category: 'WORLD' },
  { name: 'Marine Insight',      url: 'https://www.marineinsight.com/feed/',               category: 'WORLD' },
  { name: 'MarineLink',          url: 'https://www.marinelink.com/news/rss',               category: 'WORLD' },
  { name: 'Safety4Sea',          url: 'https://safety4sea.com/feed/',                      category: 'WORLD' },
  { name: 'Container News',      url: 'https://container-news.com/feed',                   category: 'WORLD', filter: MARITIME_FILTER },
  { name: 'MAIB',                url: 'https://www.gov.uk/government/organisations/marine-accident-investigation-branch.atom', category: 'WORLD' },
  { name: 'Marine Log',          url: 'https://www.marinelog.com/feed',                    category: 'WORLD' },
  { name: 'ITF Seafarers',       url: 'https://www.itfseafarers.org/en/rss.xml',           category: 'WORLD' },

  // ── RISK: пиратство, проливы, war risk, санкции ──────────────
  { name: 'Splash Risk',         url: 'https://splash247.com/feed/',                       category: 'RISK', filter: RISK_FILTER },
  { name: 'MarineLink Risk',     url: 'https://www.marinelink.com/news/rss',               category: 'RISK', filter: RISK_FILTER },
  { name: 'Maritime Exec Risk',  url: 'https://maritime-executive.com/articles.rss',       category: 'RISK', filter: RISK_FILTER },

  // ── ECONOMY: рынок, компании, контейнера, порты ──────────────
  { name: 'The Loadstar',        url: 'https://theloadstar.com/feed/',                     category: 'ECONOMY' },
  { name: 'Container News',      url: 'https://container-news.com/feed',                   category: 'ECONOMY' },
  { name: 'Hellenic Shipping',   url: 'https://www.hellenicshippingnews.com/feed/',        category: 'ECONOMY' },
  { name: 'Splash Markets',      url: 'https://splash247.com/feed/',                       category: 'ECONOMY', filter: ECON_FILTER },

  // ── OFFSHORE: оффшор, газовозы, СПГ, энергетика ──────────────
  { name: 'Offshore Energy',     url: 'https://www.offshore-energy.biz/feed/',             category: 'OFFSHORE' },
  { name: 'Offshore Wind',       url: 'https://www.offshorewind.biz/feed/',                category: 'OFFSHORE' },
  { name: 'Naval Today',         url: 'https://www.navaltoday.com/feed/',                  category: 'OFFSHORE' },

  // ── TECH: машина, мостик, судостроение, топливо ──────────────
  { name: 'Marine Log',          url: 'https://www.marinelog.com/feed',                    category: 'TECH' },
  { name: 'Ship Technology',     url: 'https://www.ship-technology.com/feed/',             category: 'TECH' },
  { name: 'MarineLink Tech',     url: 'https://www.marinelink.com/news/rss',               category: 'TECH', filter: TECH_FILTER },
  { name: 'Marine Insight Tech', url: 'https://www.marineinsight.com/feed/',               category: 'TECH', filter: TECH_FILTER },
  { name: 'Safety4Sea Tech',     url: 'https://safety4sea.com/feed/',                      category: 'TECH', filter: TECH_FILTER },
  { name: 'Container News Tech', url: 'https://container-news.com/feed',                   category: 'TECH', filter: TECH_FILTER },

  // ── VETTING: PSC, SIRE, RightShip, задержания ────────────────
  { name: 'Safety4Sea Vetting',  url: 'https://safety4sea.com/feed/',                      category: 'VETTING', filter: VETTING_FILTER },
  { name: 'MarineLink Vetting',  url: 'https://www.marinelink.com/news/rss',                category: 'VETTING', filter: VETTING_FILTER },
  { name: 'Splash Vetting',      url: 'https://splash247.com/feed/',                        category: 'VETTING', filter: VETTING_FILTER },
  { name: 'Maritime Exec PSC',   url: 'https://maritime-executive.com/articles.rss',       category: 'VETTING', filter: VETTING_FILTER },
  { name: 'gCaptain PSC',        url: 'https://gcaptain.com/feed/',                        category: 'VETTING', filter: VETTING_FILTER },

  // ── DOCS: дипломы, конвенции, требования ─────────────────────
  { name: 'MCA (UK)',            url: 'https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=maritime-and-coastguard-agency', category: 'DOCS' },
  { name: 'Safety4Sea Docs',     url: 'https://safety4sea.com/feed/',                      category: 'DOCS', filter: DOC_FILTER },
  { name: 'MarineLink Docs',     url: 'https://www.marinelink.com/news/rss',                category: 'DOCS', filter: DOC_FILTER },
  { name: 'gCaptain Docs',       url: 'https://gcaptain.com/feed/',                         category: 'DOCS', filter: DOC_FILTER },
  { name: 'Marine Insight Docs', url: 'https://www.marineinsight.com/feed/',               category: 'DOCS', filter: DOC_FILTER },

  // ── UA: Украина ──────────────────────────────────────────────
  { name: 'USM',                 url: 'https://en.usm.media/feed/',                        category: 'UA' },
  { name: 'USM (укр)',           url: 'https://usm.media/feed/',                           category: 'UA' },

  // БЕЗ RSS — нужен watcher по странице (механизм в news/digest/):
  //   marad.gov.ua, uspa.gov.ua, cfts.org.ua, mtwtu.org.ua,
  //   imo.org, emsa.europa.eu, liscr.com, register-iri.com,
  //   motorship.com, rivieramm.com, nautilusint.org, atsb.gov.au
  //
  // ПЛАТНЫЕ, RSS не отдают: TradeWinds, Lloyd\'s List, Fairplay, Upstream
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
  vetting:     { accent: '#E8352B', top: '#170807' },
  chokepoint:  { accent: '#FF4433', top: '#1D0906' },
  market:      { accent: '#C22E1F', top: '#170807' },
  offshore:    { accent: '#D6432E', top: '#170807' },
  shipbuilding:{ accent: '#E85A3D', top: '#170807' },
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
  PUBLISH_CRON: '*/13 * * * *',   // публикация максимум раз в 13 минут
  QUIET_HOURS_UTC: [23, 0, 1, 2, 3, 4],
  DEDUPE_WINDOW: 800,
  // Понижен с 0.6: разные издания один и тот же инцидент часто называют
  // совсем разными словами ("Houthi drone strikes tanker" vs "Yemen
  // rebels attack VLCC near Yanbu") — по одним словам не поймать.
  // Основную работу теперь делает вторая проверка — по именам собственным,
  // см. news/store.js.
  SIMILARITY_THRESHOLD: 0.5,
  // При 32 лентах брать по 10 с каждой — это до 320 постов за обход,
  // очередь распухает быстрее, чем канал успевает публиковать.
  MAX_PER_SOURCE: 3,

  // Новость старше этого срока не берётся в сбор и вычищается из очереди:
  // публиковать позавчерашнее как свежее — портить репутацию канала.
  FRESH_HOURS: 20,
  MODEL: 'claude-haiku-4-5-20251001',

  // Сколько слов в пересказе. Русский блок убран, места стало больше.
  // Выше 90 — пост перестанет влезать в подпись под фото (лимит 1024).
  BODY_WORDS: 80,

  // Автопубликация. Очередь заполняется сразу со статусом approved,
  // модерация по кнопкам не запрашивается. Верни true — вернётся ручной шаг.
  MODERATION: false,
};

module.exports = { SOURCES, AUDIENCE_BRIEF, CONFIG, EMOJI, THEMES, MARITIME_FILTER, DOC_FILTER, TECH_FILTER, VETTING_FILTER, RISK_FILTER, ECON_FILTER };
