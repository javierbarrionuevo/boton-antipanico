const { getChatIdByDevice } = require('../services/device.service');
const { sendAlert } = require('../services/telegram.service');
const { createAlertRecord } = require('../services/alert.service');

exports.createAlert = async (req, res) => {
  const { device_id } = req.body;

  console.log("Alerta de:", device_id);

  const chatId = await getChatIdByDevice(device_id);

  if (!chatId) {
    return res.status(404).json({ error: "No vinculado" });
  }

  const message = `🚨 ALERTA del dispositivo ${device_id}`;

  // 📲 enviar telegram
  await sendAlert(chatId, message);

  // 💾 guardar en Mongo
  await createAlertRecord(device_id, chatId, message);

  res.json({ ok: true });
};