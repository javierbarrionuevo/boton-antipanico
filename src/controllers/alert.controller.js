const { getChatIdByDevice } = require('../services/device.service');
const { sendAlert } = require('../services/telegram.service');

exports.createAlert = (req, res) => {
  const { device_id } = req.body;

  const chatId = getChatIdByDevice(device_id);

  if (!chatId) {
    return res.status(404).json({ error: "Dispositivo no vinculado" });
  }

  sendAlert(chatId, `🚨 ALERTA de ${device_id}`);

  res.json({ ok: true });
};