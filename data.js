// CES Tests — lazy loading

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
  if (LOADED_CATS[cat]) return;
  const fname = DATA_FILES[cat];
  if (!fname) return;
  await new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = fname;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  const varname = DATA_VARS[cat];
  const data = window[varname];
  if (data) {
    data.forEach(sec => TEST_SECTIONS.push(sec));
    LOADED_CATS[cat] = true;
  }
}
