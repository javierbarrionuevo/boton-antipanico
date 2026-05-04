const deviceRepo = require('../repositories/device.repository');

// guardar vínculo
async function linkDevice(deviceId, chatId) {
  console.log("💾 Guardando en Mongo:", deviceId, chatId);
  await deviceRepo.saveDevice(deviceId, chatId);
}

// buscar usuario
async function getChatIdByDevice(deviceId) {
  const chatId = await deviceRepo.findChatId(deviceId);
  console.log("🔍 Mongo result:", chatId);
  return chatId;
}

module.exports = {
  linkDevice,
  getChatIdByDevice
};