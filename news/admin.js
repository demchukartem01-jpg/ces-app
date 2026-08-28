// Панель управления. Доступна только с ADMIN_CHAT_ID — никаких проверок
// по username или правам, только жёсткое сравнение с переменной окружения.

let db;
let actions = {};

const isAdmin = (chatId) => String(chatId) === String(process.env.ADMIN_CHAT_ID);

const KEYBOARD = {
  inline_keyboard: [
    [
      { text: '📊 Сводка',        callback_data: 'adm:digest' },
      { text: '⚖️ Регуляторный',  callback_data: 'adm:reg' },
    ],
    [
      { text: '📰 Собрать новости', callback_data: 'adm:news' },
    ],
    [
      { text: '📋 Очередь',  callback_data: 'adm:queue' },
      { text: '🧹 Чистка',   callback_data: 'adm:clean' },
    ],
    [
      { text: '📈 Статистика',   callback_data: 'adm:stats' },
      { text: '🔄 Обновить',     callback_data: 'adm:panel' },
    ],
  ],
};

async function panelText() {
  const news = db.collection('news');
  const [queued, published, skipped, stuck] = await Promise.all([
    news.countDocuments({ status: 'approved' }),
    news.countDocuments({ status: 'published' }),
    news.countDocuments({ status: 'skipped' }),
    news.countDocuments({ status: 'review' }),
  ]);

  const lastDigest = await db.collection('digests').findOne(
    { status: 'published' }, { sort: { publishedAt: -1 } }
  );

  const when = lastDigest && lastDigest.publishedAt
    ? new Date(lastDigest.publishedAt).toISOString().slice(0, 16).replace('T', ' ') + ' UTC'
    : 'ещё не выходила';

  return [
    '🛠 <b>Панель управления</b>',
    '',
    `📰 Новости: <b>${queued}</b> в очереди · ${published} опубликовано · ${skipped} отсеяно`,
    stuck ? `⚠️ Зависших в модерации: ${stuck} — жми Чистку` : '',
    `📊 Последняя сводка: ${when}`,
  ].filter(Boolean).join('\n');
}

async function stats() {
  const news = db.collection('news');

  const bySource = await news.aggregate([
    { $match: { status: 'published' } },
    { $group: { _id: '$source', n: { $sum: 1 } } },
    { $sort: { n: -1 } },
    { $limit: 8 },
  ]).toArray();

  const dayAgo = new Date(Date.now() - 86400000);
  const [last24, skipped24] = await Promise.all([
    news.countDocuments({ status: 'published', createdAt: { $gte: dayAgo } }),
    news.countDocuments({ status: 'skipped',   createdAt: { $gte: dayAgo } }),
  ]);

  const lines = bySource.length
    ? bySource.map((s) => `  ${s._id} — ${s.n}`).join('\n')
    : '  пока пусто';

  return [
    '📈 <b>Статистика</b>',
    '',
    `За сутки: опубликовано ${last24}, отсеяно ${skipped24}`,
    '',
    '<b>Опубликовано по источникам</b>',
    lines,
  ].join('\n');
}

// Показывает ближайшие посты в очереди. У каждого — своя кнопка «В эфир»,
// чтобы срочную новость можно было выпустить, не дожидаясь слота планировщика.
async function sendQueue(bot, chatId) {
  const docs = await db.collection('news')
    .find({ status: 'approved' })
    .sort({ createdAt: 1 })
    .limit(8)
    .toArray();

  if (!docs.length) {
    await bot.sendMessage(chatId, '📋 Очередь пуста — все собранные новости уже вышли.');
    return;
  }

  const total = await db.collection('news').countDocuments({ status: 'approved' });

  await bot.sendMessage(chatId,
    `📋 <b>Очередь</b> — ${total} шт., показаны первые ${docs.length}\n` +
    'Порядок публикации решает ротация по категориям, а не этот список.',
    { parse_mode: 'HTML' });

  for (const d of docs) {
    const age = Math.round((Date.now() - new Date(d.createdAt)) / 60000);
    const when = age < 60 ? `${age} мин назад` : `${Math.round(age / 60)} ч назад`;
    const title = d.titleEn || d.titleRaw || '(без заголовка)';

    await bot.sendMessage(chatId,
      `<b>${title}</b>\n` +
      `${d.category || 'WORLD'} · ${d.source} · собрано ${when}`,
      {
        parse_mode: 'HTML',
        disable_web_page_preview: true,
        reply_markup: {
          inline_keyboard: [[
            { text: '🚨 В эфир сейчас', callback_data: 'adm:now:' + d._id },
            { text: '🗑 Снять',          callback_data: 'adm:drop:' + d._id },
          ]],
        },
      });
  }
}

async function handleAdminCallback(bot, cb) {
  if (!cb.data || cb.data.indexOf('adm:') !== 0) return false;

  if (!isAdmin(cb.message.chat.id)) {
    await bot.answerCallbackQuery(cb.id, { text: 'Недоступно' });
    return true;
  }

  const what = cb.data.split(':')[1];
  const chatId = cb.message.chat.id;

  try {
    if (what === 'panel') {
      await bot.editMessageText(await panelText(), {
        chat_id: chatId, message_id: cb.message.message_id,
        parse_mode: 'HTML', reply_markup: KEYBOARD,
      }).catch(() => {});   // «сообщение не изменилось» — не ошибка
      await bot.answerCallbackQuery(cb.id, { text: 'Обновлено' });
      return true;
    }

    if (what === 'stats') {
      await bot.answerCallbackQuery(cb.id);
      await bot.sendMessage(chatId, await stats(), { parse_mode: 'HTML' });
      return true;
    }

    if (what === 'digest') {
      await bot.answerCallbackQuery(cb.id, { text: 'Собираю…' });
      const r = await actions.sendDigestNow(bot, chatId, true);
      if (r.empty) await bot.sendMessage(chatId, 'Все блоки пустые — смотри логи.');
      return true;
    }

    if (what === 'reg') {
      await bot.answerCallbackQuery(cb.id, { text: 'Собираю…' });
      const r = await actions.sendRegulatoryNow(bot, chatId);
      if (r.empty) {
        await bot.sendMessage(chatId,
          'Сегодня крупных вех нет — пост не выйдет. Это нормально.');
      }
      return true;
    }

    if (what === 'queue') {
      await bot.answerCallbackQuery(cb.id);
      await sendQueue(bot, chatId);
      return true;
    }

    // Внеочередная публикация: обходит ротацию и слот планировщика.
    if (what === 'now') {
      const id = cb.data.split(':')[2];
      const { getById, setStatus } = require('./store');
      const { publishToChannel } = require('./publish');

      const doc = await getById(id);
      if (!doc || doc.status !== 'approved') {
        await bot.answerCallbackQuery(cb.id, { text: 'Уже вышла или снята' });
        return true;
      }

      await bot.answerCallbackQuery(cb.id, { text: 'Публикую…' });
      await publishToChannel(bot, doc);
      await setStatus(doc._id, 'published', { publishedAt: new Date() });

      await bot.editMessageReplyMarkup(
        { inline_keyboard: [[{ text: '✅ Опубликовано', callback_data: 'adm:noop' }]] },
        { chat_id: chatId, message_id: cb.message.message_id }
      ).catch(() => {});
      return true;
    }

    if (what === 'drop') {
      const id = cb.data.split(':')[2];
      const { setStatus } = require('./store');
      await setStatus(id, 'rejected');
      await bot.answerCallbackQuery(cb.id, { text: 'Снято с очереди' });
      await bot.editMessageReplyMarkup(
        { inline_keyboard: [[{ text: '🗑 Снято', callback_data: 'adm:noop' }]] },
        { chat_id: chatId, message_id: cb.message.message_id }
      ).catch(() => {});
      return true;
    }

    if (what === 'noop') {
      await bot.answerCallbackQuery(cb.id);
      return true;
    }

    // Сбор по кнопке: обходит все ленты и отчитывается, сколько добавилось.
    if (what === 'news') {
      await bot.answerCallbackQuery(cb.id, { text: 'Обхожу источники…' });
      const news = db.collection('news');

      const before = await news.countDocuments({ status: 'approved' });
      const t0 = Date.now();

      const { collect } = require('./index');
      await collect(bot);

      const after   = await news.countDocuments({ status: 'approved' });
      const added   = after - before;
      const seconds = Math.round((Date.now() - t0) / 1000);

      if (!added) {
        await bot.sendMessage(chatId,
          `Обход занял ${seconds} с. Новых новостей нет — всё уже собрано ранее ` +
          'или отсеяно фильтрами. Смотри логи Render, если ждал больше.');
        return true;
      }

      // Что именно пришло — по категориям, чтобы сразу видеть перекос
      const byCat = await news.aggregate([
        { $match: { status: 'approved' } },
        { $group: { _id: '$category', n: { $sum: 1 } } },
        { $sort: { n: -1 } },
      ]).toArray();

      const cats = byCat.map((c) => `${c._id || 'WORLD'} ${c.n}`).join(' · ');

      await bot.sendMessage(chatId,
        `✅ <b>Собрано ${added}</b> за ${seconds} с\n` +
        `В очереди всего <b>${after}</b>: ${cats}\n\n` +
        'Выбрать вручную или выпустить всё подряд?',
        {
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: [
              [{ text: '📋 Показать и выбрать', callback_data: 'adm:queue' }],
              [{ text: '🚀 Выпустить всё подряд', callback_data: 'adm:flush' }],
            ],
          },
        });
      return true;
    }

    // Публикует всю очередь подряд с паузой, чтобы не словить лимит Telegram.
    // Ручная чистка: снимает всё, что старше суток. Показывает, сколько снял.
    if (what === 'clean') {
      const { dropStale } = require('./store');
      const dropped = await dropStale(20);
      const left = await db.collection('news').countDocuments({ status: 'approved' });

      await bot.answerCallbackQuery(cb.id, { text: `Снято ${dropped}` });
      await bot.sendMessage(chatId,
        `🧹 Снято: <b>${dropped}</b> (старше 20 ч, включая зависшие в модерации)\n` +
        `Осталось свежих: <b>${left}</b>`,
        { parse_mode: 'HTML' });
      return true;
    }

    if (what === 'flush') {
      await bot.answerCallbackQuery(cb.id, { text: 'Публикую…' });
      const { setStatus } = require('./store');
      const { publishToChannel } = require('./publish');

      const docs = await db.collection('news')
        .find({ status: 'approved' }).sort({ createdAt: 1 }).limit(20).toArray();

      let done = 0;
      for (const doc of docs) {
        try {
          await publishToChannel(bot, doc);
          await setStatus(doc._id, 'published', { publishedAt: new Date() });
          done++;
          await new Promise((r) => setTimeout(r, 4000));   // пауза между постами
        } catch (e) {
          console.error('[admin:flush]', e.message);
          await setStatus(doc._id, 'failed', { error: e.message });
        }
      }

      const left = await db.collection('news').countDocuments({ status: 'approved' });
      await bot.sendMessage(chatId,
        `Опубликовано ${done}. В очереди осталось ${left}.`);
      return true;
    }
  } catch (e) {
    console.error('[admin]', e.message);
    await bot.sendMessage(chatId, 'Ошибка: ' + e.message);
  }

  return true;
}

function startAdmin(bot, database, deps) {
  db = database;
  actions = deps || {};

  bot.onText(/^\/admin/, async (msg) => {
    if (!isAdmin(msg.chat.id)) return;
    await bot.sendMessage(msg.chat.id, await panelText(), {
      parse_mode: 'HTML', reply_markup: KEYBOARD,
    });
  });

  bot.on('callback_query', (cb) => {
    handleAdminCallback(bot, cb).catch((e) => console.error('[admin]', e.message));
  });

  // Меню ☰ — команды видит только владелец, остальные их не увидят
  bot.setMyCommands(
    [
      { command: 'admin', description: '🛠 Панель управления' },
      { command: 'start', description: 'Открыть тренажёр' },
    ],
    { scope: { type: 'chat', chat_id: Number(process.env.ADMIN_CHAT_ID) } }
  ).catch((e) => console.error('[admin:menu]', e.message));

  console.log('[admin] панель подключена');
}

module.exports = { startAdmin };
