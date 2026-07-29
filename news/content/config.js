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
  // ── General / mixed (original set) ──────────────────────────────────
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

  // ── Stability ────────────────────────────────────────────────────────
  { term: 'GM (Metacentric Height)', def: 'The distance between the centre of gravity and the metacentre. Too low and the ship rolls sluggishly and risks capsizing; too high and it snaps back violently, straining lashings and crew.' },
  { term: 'Free Surface Effect', def: 'A partially filled tank lets liquid shift as the ship heels, moving the effective centre of gravity upward and reducing stability. Slack tanks are treated as a stability hazard, not just an operational detail.' },
  { term: 'Angle of Loll', def: 'The angle a ship with negative GM settles at without external force — it looks stable but isn\'t. Righting it the wrong way (ballasting the low side first) can capsize the vessel instead of saving it.' },
  { term: 'Righting Arm (GZ)', def: 'The lever length driving the ship back upright at a given heel angle. Plotted across all angles it gives the GZ curve — the single chart that defines how much the ship can take before it doesn\'t come back.' },
  { term: 'Downflooding Angle', def: 'The heel angle at which water starts entering the hull through an opening that isn\'t weathertight. Beyond it, stability calculations stop mattering — the ship is taking on water.' },
  { term: 'Parametric Rolling', def: 'Violent, unexpected rolling in head or following seas caused by periodic changes in waterplane area as the ship pitches. Container ships are especially prone to it, and it can develop in minutes.' },
  { term: 'Deadweight Scale', def: 'The reference chart linking draft, displacement, deadweight and TPC for a specific ship. Used constantly for loading, ballasting and confirming the vessel isn\'t exceeding load line limits.' },
  { term: 'List vs Trim', def: 'List is a sideways lean (port or starboard); trim is fore-and-aft. Confusing the two in a report to the office isn\'t just wording — it points rescuers and surveyors at the wrong problem.' },

  // ── Engine / Machinery ───────────────────────────────────────────────
  { term: 'Scavenge Fire', def: 'A fire in the scavenge air space of a two-stroke engine, usually from unburnt fuel or lube oil accumulation. One of the most dangerous engine room emergencies — it can escalate to a crankcase explosion if not caught early.' },
  { term: 'Crankcase Explosion', def: 'Hot spots inside the crankcase vaporise lube oil into a mist that ignites explosively when disturbed. The reason engineers wait before opening crankcase doors after a suspected overheat — early opening has killed people.' },
  { term: 'Turbocharger Surge', def: 'A sudden reversal of airflow through the turbocharger, usually from fouling, overload or a rapid manoeuvre. Shows up as loud banging and vibration — ignoring it risks serious turbocharger damage.' },
  { term: 'Cold Corrosion', def: 'Sulphuric acid forming on cylinder liners when jacket water temperature runs too low for the fuel\'s sulphur content, accelerating liner wear. A common finding when engines run low-sulphur fuel without adjusting cooling water temperature.' },
  { term: 'Fuel Changeover Procedure', def: 'The scheduled switch between high- and low-sulphur fuel before entering an ECA, timed to allow fuel system viscosity and temperature to stabilise. Getting the timing wrong is one of the most common MARPOL Annex VI findings.' },
  { term: 'Governor Overspeed Trip', def: 'A safety device that shuts down the engine if RPM exceeds a set limit, protecting against catastrophic mechanical failure. Testing it is a standard part of engine safety checks — and skipping the test is a classic PSC deficiency.' },
  { term: 'Purifier / Separator', def: 'Centrifugal equipment that removes water and solid contaminants from fuel and lube oil before it reaches the engine. A poorly maintained purifier is a leading cause of fuel-related engine damage.' },
  { term: 'Cylinder Liner Wear Rate', def: 'The rate at which the cylinder bore erodes, tracked in mm per 1,000 hours. Exceeding the maker\'s limit means reduced compression, higher lube oil consumption, and eventually a liner change.' },

  // ── Navigation ───────────────────────────────────────────────────────
  { term: 'CPA / TCPA', def: 'Closest Point of Approach and Time to CPA — the core numbers ARPA gives you to judge collision risk with another vessel. Watchkeepers are expected to know both for every tracked target, not just the ones that look close.' },
  { term: 'Squat Effect', def: 'A ship moving through shallow or confined water increases in draft and can trim by the head or stern due to the pressure field around the hull. Misjudging squat in a channel has grounded ships that had UKC on paper.' },
  { term: 'UKC (Under Keel Clearance)', def: 'The vertical gap between the keel and the seabed, adjusted for squat, tide, density and heel — not just the charted depth minus draft. Passage plans specify a minimum UKC for a reason; running it thin removes your margin for error.' },
  { term: 'ROT (Rate of Turn)', def: 'How fast the heading is changing, in degrees per minute, shown on the ROT indicator and used to judge turn timing in pilotage and collision avoidance. A high ROT close to another vessel or a bank can surprise everyone watching.' },
  { term: 'ECDIS Alarm Management', def: 'Configuring ECDIS safety contour, safety depth and alarm settings correctly for the passage — not leaving factory defaults. Wrong settings are a recurring PSC and MAIB finding, often cited after groundings where the alarm never fired.' },
  { term: 'Passage Plan (Berth to Berth)', def: 'The full appraised, planned, executed and monitored route from departure berth to arrival berth, required under SOLAS — not just the open-water leg. A plan that starts at the pilot station is an incomplete plan.' },
  { term: 'Traffic Separation Scheme (TSS)', def: 'IMO-adopted lanes separating opposing traffic in congested or narrow waters, governed by COLREG Rule 10. Crossing one at the wrong angle or against the flow is one of the more visible ways to draw an incident report.' },
  { term: 'Compass Error (Variation & Deviation)', def: 'Variation is the difference between true and magnetic north at your position; deviation is the error your own ship\'s magnetism adds to the compass. Confusing the two, or forgetting to check the deviation card, sends your course line to the wrong place.' },

  // ── Cargo Operations ─────────────────────────────────────────────────
  { term: 'Angle of Repose', def: 'The steepest angle a bulk cargo can hold without sliding, critical for assessing shift risk in bulk carriers. Cargoes near their angle of repose need trimming, not just loading to the plan.' },
  { term: 'TML (Transportable Moisture Limit)', def: 'The maximum moisture content at which a bulk cargo like nickel ore or bauxite fines can be safely carried before liquefaction risk sets in. Loading cargo above TML has caused bulk carriers to capsize in otherwise calm seas.' },
  { term: 'Ullage', def: 'The empty space at the top of a tank, measured to calculate the volume of liquid cargo loaded — the inverse of sounding. Getting ullage wrong on a tanker means the cargo figures on the bill of lading are wrong too.' },
  { term: 'Cargo Securing per CSS Code', def: 'The IMO Code of Safe Practice for Cargo Stowage and Securing, setting the standard for lashing arrangements against the forces a voyage is expected to generate. A lashing plan that meets the CSS Code on paper still needs someone checking it holds in practice.' },
  { term: 'Reefer PTI (Pre-Trip Inspection)', def: 'A functional check of a reefer container\'s refrigeration unit before stuffing, confirming it can hold the required temperature for the voyage. Skipping PTI is how temperature-sensitive cargo claims happen.' },
  { term: 'Hatch Cover Weathertightness Test', def: 'Ultrasonic or hose testing to confirm hatch covers are watertight before loading. A failed test found at PSC after loading is a far more expensive problem than one found before.' },
  { term: 'Bill of Lading Clausing', def: 'Noting visible cargo defects — damage, short quantity, poor condition — on the bill of lading at loading. An unclaused B/L for cargo that was clearly damaged shifts liability onto the ship, not the shipper.' },
  { term: 'Cargo Heating Coils', def: 'Steam or thermal oil coils in tanker cargo tanks used to keep viscous cargoes like heavy fuel oil or certain chemicals pumpable. Heating too fast or too hot can degrade temperature-sensitive cargo just as badly as not heating it enough.' },
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
