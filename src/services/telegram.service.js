const TelegramBot = require('node-telegram-bot-api');
const { linkDevice } = require('./device.service');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

// cuando alguien escribe /start
bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const deviceId = match[1];

  console.log(`Vinculando ${deviceId} con ${chatId}`);

  // guardar relación
  linkDevice(deviceId, chatId);

  // responder al usuario
  bot.sendMessage(chatId, `✅ Dispositivo ${deviceId} vinculado correctamente`);
});

// enviar alerta
function sendAlert(chatId, message) {
  bot.sendMessage(chatId, message);
}

module.exports = { sendAlert };