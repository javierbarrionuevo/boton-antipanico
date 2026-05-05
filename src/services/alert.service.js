const alertRepo = require('../repositories/alert.repository');

async function createAlertRecord(deviceId, chatId, message) {
  await alertRepo.saveAlert({
    device_id: deviceId,
    chat_id: chatId,
    message
  });
}

async function getDeviceAlerts(deviceId) {
  return await alertRepo.getAlertsByDevice(deviceId);
}

module.exports = {
  createAlertRecord,
  getDeviceAlerts
};