// CES Tests — данные грузятся с сервера
const TEST_SECTIONS = [];
const LOADED_CATS = {};
const API_URL = 'https://ces-bot.onrender.com';

const CATEGORY_META = {
  "GMDSS": { icon: "📡", deck: true, level: "gmdss" },
  "Bulk Carrier Management": { icon: "🚢", deck: true, level: "management" },
  "Container Ship Management": { icon: "🏗️", deck: true, level: "management" },
  "Chemical Tanker Management": { icon: "⚗️", deck: true, level: "management" },
  "General Cargo Management": { icon: "📦", deck: true, level: "management" },
  "LPG Tanker Management": { icon: "🔥", deck: true, level: "management" },
  "Oil Tanker Management": { icon: "🛢️", deck: true, level: "management" },
  "RoRo Management": { icon: "🚗", deck: true, level: "management" },
  "ETO": { icon: "⚡", deck: false, level: "management" },
  "Slow Speed Management": { icon: "🐢", deck: false, level: "management" },
  "Medium Speed Management": { icon: "⚙️", deck: false, level: "management" },
  "Steam Management": { icon: "💧", deck: false, level: "management" },
  "Slow Speed Operational": { icon: "🔄", deck: false, level: "operational" },
  "Medium Speed Operational": { icon: "🔁", deck: false, level: "operational" },
};

async function loadCategory(cat) {
  if (LOADED_CATS[cat]) return true;
  try {
    const res = await fetch(`${API_URL}/api/category/${encodeURIComponent(cat)}`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const sections = await res.json();
    LOADED_CATS[cat] = sections;
    return true;
  } catch(e) {
    console.error('Failed to load', cat, e);
    return false;
  }
}

async function loadFinal(cat, count) {
  try {
    const res = await fetch(`${API_URL}/api/final/${encodeURIComponent(cat)}/${count}`);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch(e) {
    console.error('Failed to load final', e);
    return null;
  }
}
