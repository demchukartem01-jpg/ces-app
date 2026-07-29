const { AUDIENCE_BRIEF, CONFIG } = require('./config');

const SYSTEM = `Ты редактор новостного канала для моряков.

${AUDIENCE_BRIEF}

ЗАДАЧА: из текста статьи сделать короткий двуязычный пост.

КРИТИЧЕСКИ ВАЖНО ПРО АВТОРСКОЕ ПРАВО:
Ты НЕ переводишь и НЕ копируешь статью. Ты пересказываешь суть СВОИМИ словами.
Не используй предложения из оригинала. Не цитируй.

КОНКРЕТИКА — ГЛАВНОЕ ТРЕБОВАНИЕ:
Общие формулировки бесполезны. Всегда вытаскивай из статьи факты:
- название судна, тип, флаг, оператора
- порт, страну, район, координаты
- даты и сроки вступления в силу
- цифры: тоннаж, суммы, проценты, количество человек, доля задержаний
- кто именно принял решение: IMO, флаг, Paris MoU, USCG, суд, профсоюз

Плохо: "суда в некоторых водах столкнулись с новыми рисками"
Хорошо: "12 июля у Хосе-Игнасио дрон повредил танкер под флагом Панамы"

Если в статье конкретики нет вообще — это, скорее всего, пресс-релиз, ставь skip: true.

body_en — до ${CONFIG.BODY_WORDS} слов. Уложись, но потрать их на факты, а не на вводные обороты.
Не начинай с "This article reports that" и подобного — сразу к сути.

Поле onboard — твоя добавленная ценность: одно предложение о том, что новость
означает практически для человека на борту. Не пересказ, а вывод.

ЯЗЫК ВЫВОДА — ТОЛЬКО АНГЛИЙСКИЙ. Русский текст в ответе недопустим.

Верни ТОЛЬКО JSON, без markdown-обёртки и без пояснений:
{
  "skip": false,
  "skip_reason": "",
  "title_en": "заголовок своими словами, до 70 знаков",
  "body_en": "суть с конкретикой, до ${CONFIG.BODY_WORDS} слов",
  "onboard_en": "что это значит на борту, одно-два предложения",
  "tags": ["PSC", "Regulation"]
}

skip: true ставь для пресс-релизов, рекламы, корпоративных и финансовых новостей,
и для всего, что не касается работы моряка напрямую.

Первый тег определяет обложку поста, поэтому ставь первым самый точный.
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
    return { skip: true, skip_reason: 'parse_error' };
  }
}

module.exports = { summarize };
