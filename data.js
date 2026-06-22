// CES Tests — lazy loading index

const DATA_FILES = {
  "GMDSS": "gmdss.js",
  "Bulk Carrier Management": "bulk_carrier_management.js",
  "Container Ship Management": "container_ship_management.js",
  "Chemical Tanker Management": "chemical_tanker_management.js",
  "RoRo Management": "roro_management.js",
  "Oil Tanker Management": "oil_tanker_management.js",
  "General Cargo Management": "general_cargo_management.js",
  "LPG Tanker Management": "lpg_tanker_management.js",
  "ETO": "eto.js",
  "Slow Speed Management": "slow_speed_management.js",
  "Medium Speed Management": "medium_speed_management.js",
  "Steam Management": "steam_management.js",
  "Slow Speed Operational": "slow_speed_operational.js",
  "Medium Speed Operational": "medium_speed_operational.js",
};

const DATA_VARS = {
  "GMDSS": "DATA_GMDSS",
  "Bulk Carrier Management": "DATA_BULK_CARRIER_MANAGEMENT",
  "Container Ship Management": "DATA_CONTAINER_SHIP_MANAGEMENT",
  "Chemical Tanker Management": "DATA_CHEMICAL_TANKER_MANAGEMENT",
  "RoRo Management": "DATA_RORO_MANAGEMENT",
  "Oil Tanker Management": "DATA_OIL_TANKER_MANAGEMENT",
  "General Cargo Management": "DATA_GENERAL_CARGO_MANAGEMENT",
  "LPG Tanker Management": "DATA_LPG_TANKER_MANAGEMENT",
  "ETO": "DATA_ETO",
  "Slow Speed Management": "DATA_SLOW_SPEED_MANAGEMENT",
  "Medium Speed Management": "DATA_MEDIUM_SPEED_MANAGEMENT",
  "Steam Management": "DATA_STEAM_MANAGEMENT",
  "Slow Speed Operational": "DATA_SLOW_SPEED_OPERATIONAL",
  "Medium Speed Operational": "DATA_MEDIUM_SPEED_OPERATIONAL",
};

const TEST_SECTIONS = [];
const LOADED_CATS = {};

async function loadCategory(cat) {
  if (LOADED_CATS[cat]) return; // уже загружено
  const fname = DATA_FILES[cat];
  if (!fname) { console.error('No file for cat:', cat); return; }

  // Проверяем что скрипт ещё не добавлен в DOM
  if (document.querySelector(`script[data-cat="${cat}"]`)) {
    // Скрипт уже в DOM — просто ждём пока переменная появится
    await new Promise(resolve => setTimeout(resolve, 100));
    return;
  }

  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = fname + '?v=3';
    s.setAttribute('data-cat', cat);
    s.onload = () => { console.log('Loaded:', fname); resolve(); };
    s.onerror = (e) => { console.error('Failed:', fname, e); reject(e); };
    document.head.appendChild(s);
  });
}
