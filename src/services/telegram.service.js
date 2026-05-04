const TelegramBot = require('node-telegram-bot-api');
const { linkDevice } = require('./device.service');

const token = process.env.TELEGRAM_TOKEN;

// ❌ IMPORTANTE: sin polling (porque usás webhook)
const bot = new TelegramBot(token);

// comando /start
bot.onText(/\/start (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const deviceId = match[1];

  console.log("Vinculando", deviceId, "con", chatId);

  await linkDevice(deviceId, chatId);

  bot.sendMessage(chatId, `✅ Dispositivo ${deviceId} vinculado`);
});

// enviar alerta
async function sendAlert(chatId, message) {
  console.log("📲 Enviando alerta a:", chatId);
  await bot.sendMessage(chatId, message);
}

module.exports = {
  bot,
  sendAlert
};