// ============ РУБРИЧНЫЙ КОНТЕНТ ============
// Term of the week, Ship spotlight, Maritime history, Weekly poll.
// Всё это curated-контент — без внешних API, без риска авторских прав,
// без непроверенных источников. Наполняешь один раз, ротация сама.

const CONTENT = {
  TERM_CRON:    '0 9 * * 1',   // понедельник, 09:00 UTC
  SHIP_CRON:    '0 9 * * 3',   // среда
  HISTORY_CRON: '0 8 * * *',   // каждый день — проверяет календарь, молчит, если нечего сказать
  POLL_CRON:    '0 9 * * 5',   // пятница

  // Автопубликация — рубрики низкорисковые, curated. Если хочешь модерацию
  // по кнопке, как у новостей — поставь false.
  MODERATION: false,
};

// ── Term of the week ────────────────────────────────────────────────────
// Ротация по кругу, порядок — по порядку в массиве. Пиши по-английски.
const TERMS = [
  { term: 'SIRE 2.0', def: 'OCIMF\'s updated tanker vetting programme. Moves from a fixed checklist to risk-based Vessel HSSE Questions and inspector-observed behaviour, not just paperwork.' },
  { term: 'PSC Detention', def: 'A port state control order stopping a ship from sailing until deficiencies are corrected. Recorded against the vessel, operator and flag — affects your next inspection everywhere.' },
  { term: 'ISM Non-Conformity', def: 'A finding that the Safety Management System failed in practice, not just on paper. Major NC can suspend the Document of Compliance and ground the fleet.' },
  { term: 'Letter of Protest', def: 'A formal notice you issue when something outside your control affects cargo, schedule or safety — terminal delay, bad stowage instructions, short-loading. Protects you and the owner later.' },
  { term: 'War Risk Area (JWC)', def: 'Zones the Joint War Committee lists as elevated risk. Entering one usually triggers extra insurance premiums and can allow crew to decline the voyage under CBA terms.' },
  { term: 'Paris MoU Black/Grey/White List', def: 'Ranks flag states by detention history over three years. A black-flag ship gets inspected far more often — it follows the vessel, not just the owner.' },
  { term: 'ECA (Emission Control Area)', def: 'Sea zones with stricter sulphur and NOx limits than the global cap. Entering one without the right fuel or scrubber setup is a compliance failure, not a grey area.' },
  { term: 'Condition of Class', def: 'A class society requirement to fix something within a set time or lose class. Losing class can void P&I cover and stop the ship trading.' },
  { term: 'Bunker Delivery Note (BDN)', def: 'Paperwork proving what fuel was actually loaded. Mismatched BDN and sulphur test results are one of the most common PSC and MARPOL Annex VI findings.' },
  { term: 'Abandonment (ITF definition)', def: 'When the shipowner fails to cover repatriation, owed wages, or basic provisions for two months or more. Triggers ITF and flag-state intervention.' },
];

// ── Ship spotlight ───────────────────────────────────────────────────────
// Не фотографии — факты. Держи их проверяемыми, без спорных цифр.
// title идёт в заголовок карточки, fact — в текст поста.
const SHIPS = [
  {
    title: 'Ever Given',
    fact: 'The 20,000 TEU container ship ran aground in the Suez Canal in March 2021, blocking the waterway for six days and holding up an estimated $9 billion in trade per day. The grounding was later attributed to a combination of high winds and a bank-effect suction along the canal wall.',
  },
  {
    title: 'Emma Maersk',
    fact: 'One of the first ships in the Maersk E-class, launched in 2006 at roughly 170,000 GT and 397 metres long. At the time of delivery it was the largest container ship in the world, a title container ships have since traded repeatedly.',
  },
  {
    title: 'Queen Mary 2',
    fact: 'Delivered in 2004, she remains one of the few ocean liners still built to genuine liner standards for regular transatlantic crossings, rather than as a cruise-only ship, with a stronger hull built for open-ocean weather.',
  },
  {
    title: 'Seawise Giant',
    fact: 'At 458 metres, the ULCC was the longest ship ever built — longer than the height of most skyscrapers. She was too large to transit the English Channel and was eventually scrapped in 2010 after decades of service under several names.',
  },
  {
    title: 'MSC Irina',
    fact: 'Delivered in 2023 at over 24,000 TEU capacity, among the largest container ships afloat, reflecting the continued push toward ultra-large vessels despite port and canal draft limits many of them cannot use.',
  },
];

// ── Maritime history ─────────────────────────────────────────────────────
// date в формате 'MM-DD', год не нужен — повторяется ежегодно.
// Проверяй даты перед добавлением, ошибка тут заметнее, чем где-либо ещё.
const HISTORY = [
  { date: '01-13', title: 'Costa Concordia', fact: 'On this day in 2012, the cruise ship Costa Concordia struck rocks off Isola del Giglio, Italy, and capsized. 32 people died. The disaster led to major revisions in cruise ship stability and evacuation procedures.' },
  { date: '03-06', title: 'Herald of Free Enterprise', fact: 'On this day in 1987, the ferry capsized minutes after leaving Zeebrugge with her bow doors open, killing 193 people. The disaster directly shaped modern ro-ro ferry design and the ISM Code that followed.' },
  { date: '03-18', title: 'Torrey Canyon', fact: 'On this day in 1967, the tanker ran aground off Cornwall, spilling roughly 120,000 tonnes of crude oil — the first major tanker disaster of its kind and a direct catalyst for MARPOL.' },
  { date: '03-23', title: 'Ever Given blocks Suez', fact: 'On this day in 2021, the Ever Given ran aground in the Suez Canal, blocking the waterway for six days and disrupting an estimated $9 billion in trade per day.' },
  { date: '03-24', title: 'Exxon Valdez', fact: 'On this day in 1989, the tanker struck Bligh Reef in Prince William Sound, Alaska, spilling roughly 37,000 tonnes of crude. The spill led directly to the US Oil Pollution Act of 1990 and double-hull tanker requirements.' },
  { date: '04-15', title: 'RMS Titanic', fact: 'On this day in 1912, the Titanic sank in the North Atlantic after striking an iceberg, killing over 1,500 people. The disaster led directly to the first SOLAS Convention in 1914.' },
  { date: '11-13', title: 'Prestige', fact: 'On this day in 2002, the tanker Prestige began taking on water off Galicia, Spain, and later broke apart and sank, spilling around 63,000 tonnes of fuel oil and prompting the EU\'s phase-out of single-hull tankers.' },
  { date: '12-12', title: 'Erika', fact: 'On this day in 1999, the tanker Erika broke in two off Brittany, France, spilling around 20,000 tonnes of heavy fuel oil and leading to the EU\'s Erika I and II packages on maritime safety.' },
  { date: '12-20', title: 'Doña Paz', fact: 'On this day in 1987, the ferry Doña Paz collided with the tanker Vector in the Tablas Strait, Philippines. With over 4,000 people aboard against a certified capacity of 1,424, it remains the deadliest peacetime maritime disaster on record.' },
];

// ── Weekly poll ───────────────────────────────────────────────────────────
// Telegram-опрос, анонимный, один вопрос за раз, ротация по кругу.
const POLLS = [
  {
    question: 'Have you ever been on a ship detained by PSC?',
    options: ['Yes, more than once', 'Yes, once', 'No, never', 'Not sure — wasn\'t my watch'],
  },
  {
    question: 'How do you mainly prepare for a CBA / office interview?',
    options: ['Question bank + notes', 'Ask colleagues who went recently', 'Wing it', 'Haven\'t needed to yet'],
  },
  {
    question: 'Biggest source of stress on your last contract?',
    options: ['Workload / short-staffing', 'Inspections and paperwork', 'Being away from family', 'Nothing major, it was fine'],
  },
  {
    question: 'Has your company changed hands (owner or manager) while you were under contract?',
    options: ['Yes, more than once', 'Yes, once', 'No', 'Not sure'],
  },
  {
    question: 'What would help you most right now?',
    options: ['Better pay', 'Shorter contracts', 'Faster crew change', 'Less paperwork'],
  },
];

module.exports = { CONTENT, TERMS, SHIPS, HISTORY, POLLS };
