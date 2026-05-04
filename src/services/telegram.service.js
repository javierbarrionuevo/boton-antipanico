const { linkDevice } = require('./device.service');

bot.onText(/\/start (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const deviceId = match[1];

  await linkDevice(deviceId, chatId);

  bot.sendMessage(chatId, `✅ Dispositivo ${deviceId} vinculado`);
});