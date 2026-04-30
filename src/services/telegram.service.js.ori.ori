const TelegramBot = require('node-telegram-bot-api');
const { telegramToken } = require('../config/env');

const bot = new TelegramBot(telegramToken);

const sendAlert = async (chatId, message) => {
  try {
    await bot.sendMessage(chatId, message);
  } catch (error) {
    console.error('Error enviando mensaje:', error.message);
  }
};

module.exports = { sendAlert };