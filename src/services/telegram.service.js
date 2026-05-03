const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

// webhook
const url = `https://boton-antipanico.onrender.com/bot${process.env.TELEGRAM_TOKEN}`;

bot.setWebHook(url)
  .then(() => console.log("🌐 Webhook configurado"))
  .catch(err => console.error(err));

// /start
bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const deviceId = match[1];

  console.log(`Vinculando ${deviceId} con ${chatId}`);

  const { linkDevice } = require('./device.service');
  linkDevice(deviceId, chatId);

  bot.sendMessage(chatId, `✅ Dispositivo ${deviceId} vinculado`);
});

// 🔥 ESTE ES EL IMPORTANTE
function sendAlert(chatId, message) {
  if (!chatId) {
    console.log("❌ chatId undefined");
    return;
  }

  console.log("📲 Enviando alerta a:", chatId);

  bot.sendMessage(chatId, message)
    .then(() => console.log("✅ Mensaje enviado"))
    .catch(err => console.log("❌ Error Telegram:", err.message));
}

module.exports = { bot, sendAlert };