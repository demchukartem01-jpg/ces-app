const fs = require('fs');
const path = require('path');
const { Resvg } = require('@resvg/resvg-js');
const { THEMES } = require('./config');

// Шрифты лежат рядом в репозитории — на системные полагаться нельзя,
// в контейнере Render их может не оказаться вовсе.
const FONT_DIR = path.join(__dirname, 'fonts');
const FONTS = ['DejaVuSansCondensed-Bold.ttf', 'DejaVuSansCondensed.ttf']
  .map((f) => path.join(FONT_DIR, f))
  .filter((f) => fs.existsSync(f));

const W = [0.313,0.4102,0.4688,0.7539,0.626,0.9014,0.7847,0.2754,0.4111,0.4111,0.4702,0.7539,0.3418,0.3735,0.3418,0.3286,0.626,0.626,0.626,0.626,0.626,0.626,0.626,0.626,0.626,0.626,0.3599,0.3599,0.7539,0.7539,0.7539,0.522,0.8999,0.6963,0.6855,0.6602,0.7471,0.6148,0.6148,0.7383,0.7529,0.3345,0.3345,0.6973,0.5733,0.8955,0.7529,0.7647,0.6592,0.7647,0.6929,0.648,0.6138,0.7305,0.6963,0.9927,0.6938,0.6514,0.6523,0.4111,0.3286,0.4111,0.7539,0.4497,0.4497,0.6069,0.644,0.5332,0.644,0.6104,0.3911,0.644,0.6406,0.3081,0.3081,0.5981,0.3081,0.9375,0.6406,0.6182,0.644,0.644,0.4438,0.5356,0.4302,0.6406,0.5864,0.8311,0.5801,0.5864,0.5234,0.6406,0.3286,0.6406,0.7539];

// Ширина символа в долях кегля, снято с DejaVu Sans Condensed Bold.
// Нужно, чтобы переносить строки точно, а не на глаз — на глаз заголовки
// вылезали за правый край.
function textWidth(str, fontSize) {
  let w = 0;
  for (const ch of String(str)) {
    const code = ch.charCodeAt(0);
    w += (code >= 32 && code <= 126) ? W[code - 32] : 0.6;
  }
  return w * fontSize;
}

const esc = (s) => String(s || '')
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Перенос по словам с точным измерением ширины.
function wrap(text, fontSize, maxWidth, maxLines) {
  const words = String(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';

  for (const word of words) {
    const next = cur ? cur + ' ' + word : word;
    if (textWidth(next, fontSize) <= maxWidth) {
      cur = next;
      continue;
    }
    if (cur) lines.push(cur);
    cur = word;
    if (lines.length >= maxLines) { cur = ''; break; }
  }
  if (cur && lines.length < maxLines) lines.push(cur);

  // Заголовок не поместился — обрезаем последнюю строку с многоточием
  const used = lines.join(' ');
  if (used.replace(/\s+/g, ' ') !== String(text).replace(/\s+/g, ' ').trim()) {
    let last = lines[lines.length - 1] || '';
    while (last && textWidth(last + '…', fontSize) > maxWidth) last = last.slice(0, -1);
    lines[lines.length - 1] = last.replace(/[\s,.;:—-]+$/, '') + '…';
  }

  return lines;
}

function buildSvg(title, tag, source) {
  const theme = THEMES[String(tag || '').toLowerCase()] || THEMES.default;

  // Длинный заголовок — уменьшаем кегль, чтобы не вылезал
  const size = title.length > 90 ? 52 : title.length > 60 ? 60 : 68;
  const lines = wrap(title, size, 1000, 4);

  const blockH = lines.length * (size * 1.22);
  const startY = 400 - blockH / 2 + size;

  const tspans = lines
    .map((l, i) => `<tspan x="140" y="${Math.round(startY + i * size * 1.22)}">${esc(l)}</tspan>`)
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720">
  <defs>
    <radialGradient id="bg" cx="26%" cy="30%" r="92%">
      <stop offset="0%" stop-color="${theme.top}"/>
      <stop offset="100%" stop-color="#060C15"/>
    </radialGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#bg)"/>

  <g transform="translate(96,72) scale(0.22)">
    <path d="M 245.53 106.32 A 150 150 0 0 0 117.44 313.41"
          fill="none" stroke="#E8382B" stroke-width="46" stroke-linecap="round"/>
    <path d="M 266.47 106.32 A 150 150 0 0 1 394.56 313.41"
          fill="none" stroke="#12B67A" stroke-width="46" stroke-linecap="round"/>
    <circle cx="256" cy="256" r="27" fill="#F2EFE6"/>
  </g>

  <text x="188" y="128" font-family="DejaVu Sans Condensed" font-weight="bold"
        font-size="30" fill="${theme.accent}" letter-spacing="5">${esc(String(tag || '').toUpperCase())}</text>

  <rect x="96" y="${Math.round(400 - blockH / 2)}" width="7"
        height="${Math.round(blockH)}" fill="${theme.accent}" rx="3"/>

  <text font-family="DejaVu Sans Condensed" font-weight="bold" font-size="${size}"
        fill="#F2EFE6">${tspans}</text>

  <line x1="96" y1="600" x2="1184" y2="600" stroke="#22384F" stroke-width="2"/>

  <text x="96" y="656" font-family="DejaVu Sans Condensed" font-size="26"
        fill="#6B819A" letter-spacing="4">${esc(String(source || '').toUpperCase())}</text>

  <text x="1184" y="656" text-anchor="end" font-family="DejaVu Sans Condensed"
        font-size="26" fill="#6B819A" letter-spacing="4">BRIDGE WATCH</text>
</svg>`;
}

// Возвращает Buffer с PNG или null, если что-то пошло не так.
// null означает «используй обычную обложку» — падать нельзя.
function renderCard(title, tag, source) {
  try {
    const svg = buildSvg(title, tag, source);
    const resvg = new Resvg(svg, {
      fitTo: { mode: 'width', value: 1280 },
      font: { fontFiles: FONTS, loadSystemFonts: false, defaultFontFamily: 'DejaVu Sans Condensed' },
    });
    return resvg.render().asPng();
  } catch (e) {
    console.error('[card]', e.message);
    return null;
  }
}

module.exports = { renderCard, buildSvg };
