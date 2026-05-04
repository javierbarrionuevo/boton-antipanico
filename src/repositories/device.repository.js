const Device = require('../models/device.model');

async function saveDevice(deviceId, chatId) {
  await Device.findOneAndUpdate(
    { device_id: deviceId },
    { chat_id: chatId },
    { upsert: true }
  );
}

async function findChatId(deviceId) {
  const device = await Device.findOne({ device_id: deviceId });
  return device ? device.chat_id : null;
}

module.exports = {
  saveDevice,
  findChatId
};