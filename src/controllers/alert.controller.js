const { getChatIdByDevice } = require('../services/device.service');
const { sendAlert } = require('../services/telegram.service');

exports.createAlert = (req, res) => {
  const { device_id } = req.body;

  console.log("Alerta de:", device_id);

  const chatId = getChatIdByDevice(device_id);

  if (!chatId) {
    console.log("❌ No hay usuario vinculado");
    return res.status(404).json({ error: "Dispositivo no vinculado" });
  }

  console.log("📲 Enviando a:", chatId);

  sendAlert(chatId, `🚨 ALERTA del dispositivo ${device_id}`);

  res.json({ ok: true });
};