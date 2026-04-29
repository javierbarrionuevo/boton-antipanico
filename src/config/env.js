require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  telegramToken: process.env.TELEGRAM_TOKEN,
  testChatId: process.env.TEST_CHAT_ID
};