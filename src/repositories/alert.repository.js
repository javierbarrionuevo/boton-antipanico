const Alert = require('../models/alert.model');

async function saveAlert(data) {
  const alert = new Alert(data);
  await alert.save();
}

async function getAlertsByDevice(deviceId) {
  return await Alert.find({ device_id: deviceId }).sort({ created_at: -1 });
}

module.exports = {
  saveAlert,
  getAlertsByDevice
};