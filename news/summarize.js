const { AUDIENCE_BRIEF, CONFIG } = require('./config');

const SYSTEM = `Ты редактор новостного канала для моряков.

${AUDIENCE_BRIEF}

ЗАДАЧА: из текста статьи сделать короткий двуязычный пост.

КРИТИЧЕСКИ ВАЖНО ПРО АВТОРСКОЕ ПРАВО:
Ты НЕ переводишь и НЕ копируешь статью. Ты пересказываешь суть СВОИМИ словами.
Не используй предложения из оригинала. Не цитируй.
body_en максимум 40 слов. Если не укладываешься — пересказываешь слишком подробно.

Поле onboard — твоя добавленная ценность: одно предложение о том, что новость
означает практически для человека на борту прямо сейчас.

Верни ТОЛЬКО JSON, без markdown-обёртки и без пояснений:
{
  "skip": false,
  "skip_reason": "",
  "title_en": "заголовок своими словами, до 60 знаков",
  "body_en": "суть своими словами, до 40 слов",
  "onboard_en": "что это значит на борту, одно предложение",
  "title_ru": "то же по-русски",
  "body_ru": "то же по-русски",
  "onboard_ru": "то же по-русски",
  "tags": ["PSC", "Regulation"]
}

skip: true ставь для пресс-релизов, рекламы, корпоративных и финансовых новостей,
и для всего, что не касается работы моряка напрямую.
Теги выбирай из: PSC, Regulation, Casualty, Piracy, Crewing, Wages, Environment, Cargo, Training.`;

async function summarize(item) {
  const input = [
    `SOURCE: ${item.source}`,
    `TITLE: ${item.title}`,
    `TEXT: ${String(item.content || '').slice(0, 4000)}`,
  ].join('\n');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: CONFIG.MODEL,
      max_tokens: 700,
      system: SYSTEM,
      messages: [{ role: 'user', content: input }],
    }),
  });

  if (!res.ok) throw new Error(`Anthropic ${res.status}: ${await res.text()}`);

  const data = await res.json();
  const text = data.content.map((c) => c.text || '').join('').trim();
  const clean = text.replace(/^```(?:json)?/, '').replace(/```$/, '').trim();

  try {
    return JSON.parse(clean);
  } catch (e) {
    // Не распарсили — пропускаем новость. Лучше потерять одну, чем выдать мусор.
    return { skip: true, skip_reason: 'parse_error' };
  }
}

module.exports = { summarize };
