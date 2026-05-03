const TelegramBot = require('node-telegram-bot-api');

let bot;

if (!global.telegramBot) {
  console.log("🤖 Inicializando bot de Telegram...");

  bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {
    polling: true
  });

  global.telegramBot = bot;

  // manejar /start
  bot.onText(/\/start (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const deviceId = match[1];

    console.log(`Vinculando ${deviceId} con ${chatId}`);

    const { linkDevice } = require('./device.service');
    linkDevice(deviceId, chatId);

    bot.sendMessage(chatId, `✅ Dispositivo ${deviceId} vinculado`);
  });

} else {
  bot = global.telegramBot;
}

// función para enviar mensajes
function sendAlert(chatId, message) {
  if (!chatId) {
    console.log("❌ chatId undefined");
    return;
  }

  bot.sendMessage(chatId, message);
}

module.exports = { sendAlert };