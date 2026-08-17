// news/sources.js
// Категории: WORLD | UA | EU_OFFSHORE | DOCS
// trust: 'auto'   — публикуем без модерации
//        'review' — уходит в личку на кнопки (как сейчас)
// filter: если задан, заголовок+описание должны совпасть с регуляркой
//         (нужно для широких новостных лент вроде Интерфакса)

const MARITIME_FILTER =
  /(море|морськ|морск|судн|порт|танкер|балкер|контейнер|фрахт|екіпаж|экипаж|моряк|навігац|навигац|причал|термінал|терминал|shipping|vessel|seafarer|port|tanker|freight)/i;

const DOC_FILTER =
  /(STCW|MLC|диплом|сертифікат|сертификат|посвідчення|удостоверен|документ|кваліфікац|квалификац|підтвердження|подтвержден|виза|віза|visa|seaman.?s book|CoC|endorsement|revalidation|medical certificate|ENG1|Морська адміністрація|Морская администрация)/i;

module.exports = {
  // Сколько постов в час максимум по категории (защита от того,
  // чтобы одна тема не забила всю ленту)
  quotas: {
    WORLD: 3,
    UA: 2,
    EU_OFFSHORE: 2,
    DOCS: 1,
  },

  // Порядок обхода при выборе следующего поста (round-robin со сдвигом)
  rotation: ['WORLD', 'EU_OFFSHORE', 'UA', 'WORLD', 'DOCS'],

  feeds: [
    // ─────────── WORLD (то, что уже работает) ───────────
    { id: 'splash', url: 'https://splash247.com/feed/', category: 'WORLD', trust: 'auto', tag: '#shipping' },
    { id: 'gcaptain', url: 'https://gcaptain.com/feed/', category: 'WORLD', trust: 'auto', tag: '#shipping' },
    { id: 'safety4sea', url: 'https://safety4sea.com/feed/', category: 'WORLD', trust: 'auto', tag: '#safety' },
    { id: 'maritime-exec', url: 'https://maritime-executive.com/articles/rss', category: 'WORLD', trust: 'auto', tag: '#shipping' },

    // ─────────── UA ───────────
    { id: 'usm-en', url: 'https://en.usm.media/feed/', category: 'UA', trust: 'auto', tag: '#Ukraine' },
    { id: 'usm-ua', url: 'https://usm.media/feed/', category: 'UA', trust: 'auto', tag: '#Ukraine' },
    { id: 'cfts', url: 'https://cfts.org.ua/rss', category: 'UA', trust: 'auto', tag: '#Ukraine', filter: MARITIME_FILTER },
    { id: 'mtwtu', url: 'https://mtwtu.org.ua/feed/', category: 'UA', trust: 'auto', tag: '#Ukraine' },
    // широкая лента — только морское, и на модерацию (много политики)
    { id: 'interfax-ua', url: 'https://ua.interfax.com.ua/news/economic.html', category: 'UA', trust: 'review', tag: '#Ukraine', filter: MARITIME_FILTER },

    // ─────────── EU / OFFSHORE ───────────
    { id: 'offshore-energy', url: 'https://www.offshore-energy.biz/feed/', category: 'EU_OFFSHORE', trust: 'auto', tag: '#offshore' },
    { id: 'offshorewind', url: 'https://www.offshorewind.biz/feed/', category: 'EU_OFFSHORE', trust: 'auto', tag: '#offshore' },
    { id: 'navaltoday', url: 'https://www.navaltoday.com/feed/', category: 'EU_OFFSHORE', trust: 'auto', tag: '#offshore' },
    { id: 'hellenic', url: 'https://www.hellenicshippingnews.com/feed/', category: 'EU_OFFSHORE', trust: 'auto', tag: '#Europe' },
    { id: 'scandoil', url: 'https://scandoil.com/bm.feed.xml', category: 'EU_OFFSHORE', trust: 'auto', tag: '#offshore' },

    // ─────────── DOCS (дипломы, конвенции, требования) ───────────
    // gov.uk отдаёт Atom для любого поиска — добавь .atom к URL финдера
    {
      id: 'mca-uk',
      url: 'https://www.gov.uk/search/news-and-communications.atom?organisations%5B%5D=maritime-and-coastguard-agency',
      category: 'DOCS',
      trust: 'auto',
      tag: '#documents',
    },
    { id: 'itf-seafarers', url: 'https://www.itfseafarers.org/en/news/feed', category: 'DOCS', trust: 'auto', tag: '#documents', filter: DOC_FILTER },
    { id: 'safety4sea-docs', url: 'https://safety4sea.com/feed/', category: 'DOCS', trust: 'auto', tag: '#documents', filter: DOC_FILTER },
  ],

  // Страницы без RSS — сюда же, обрабатываются существующим page-diff
  // механизмом из news/digest/. При изменении контрольного блока —
  // короткий пост «что поменялось».
  watchers: [
    { id: 'marad-ua', url: 'https://marad.gov.ua/ua/novini', selector: '.news-list', category: 'DOCS', tag: '#documents' },
    { id: 'marad-dkk', url: 'https://marad.gov.ua/ua/diyalnist/diplomuvannya', selector: 'main', category: 'DOCS', tag: '#documents' },
    { id: 'imo-media', url: 'https://www.imo.org/en/MediaCentre/Pages/Default.aspx', selector: '#content', category: 'DOCS', tag: '#IMO' },
    { id: 'emsa', url: 'https://www.emsa.europa.eu/newsroom/latest-news.html', selector: '.news', category: 'EU_OFFSHORE', tag: '#Europe' },
    { id: 'liberia-notices', url: 'https://www.liscr.com/marine-notices', selector: 'main', category: 'DOCS', tag: '#flagstate' },
    { id: 'iri-notices', url: 'https://www.register-iri.com/notices/', selector: 'main', category: 'DOCS', tag: '#flagstate' },
    { id: 'uspa', url: 'https://www.uspa.gov.ua/en/news', selector: 'main', category: 'UA', tag: '#Ukraine' },
  ],

  filters: { MARITIME_FILTER, DOC_FILTER },
};
