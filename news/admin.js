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
      { text: '📈 Статистика',   callback_data: 'adm:stats' },
      { text: '🔄 Обновить',     callback_data: 'adm:panel' },
    ],
  ],
};

async function panelText() {
  const news = db.collection('news');
  const [queued, published, skipped] = await Promise.all([
    news.countDocuments({ status: { $in: ['review', 'approved'] } }),
    news.countDocuments({ status: 'published' }),
    news.countDocuments({ status: 'skipped' }),
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
    `📊 Последняя сводка: ${when}`,
  ].join('\n');
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

    if (what === 'news') {
      await bot.answerCallbackQuery(cb.id, { text: 'Проверяю источники…' });
      const { collect } = require('./index');
      await collect(bot);
      await bot.sendMessage(chatId, 'Источники проверены. Новые черновики придут отдельно.');
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
