const deviceRepo = require('../repositories/device.repository');

async function linkDevice(deviceId, chatId) {
  console.log("💾 Guardando en DB:", deviceId, chatId);
  await deviceRepo.saveDevice(deviceId, chatId);
}

async function getChatIdByDevice(deviceId) {
  const chatId = await deviceRepo.findChatId(deviceId);
  console.log("🔍 DB result:", chatId);
  return chatId;
}

module.exports = {
  linkDevice,
  getChatIdByDevice
};