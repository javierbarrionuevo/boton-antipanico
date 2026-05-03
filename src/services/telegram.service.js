const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

// configurar webhook (una vez al iniciar)
const url = `https://boton-antipanico.onrender.com/bot${process.env.TELEGRAM_TOKEN}`;

bot.setWebHook(url)
  .then(() => console.log("🌐 Webhook configurado"))
  .catch(err => console.error("❌ Error webhook:", err));

// lógica de vinculación
bot.onText(/\/start (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const deviceId = match[1];

  console.log(`Vinculando ${deviceId} con ${chatId}`);

  const { linkDevice } = require('./device.service');
  linkDevice(deviceId, chatId);

  bot.sendMessage(chatId, `✅ Dispositivo ${deviceId} vinculado`);
});

// enviar alerta
function sendAlert(chatId, message) {
  if (!chatId) {
    console.log("❌ chatId undefined");
    return;
  }

  bot.sendMessage(chatId, message);
}

module.exports = { bot, sendAlert };