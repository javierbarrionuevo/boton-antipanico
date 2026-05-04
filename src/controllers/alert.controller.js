const { getChatIdByDevice } = require('../services/device.service');
const { sendAlert } = require('../services/telegram.service');

exports.createAlert = async (req, res) => {
  const { device_id } = req.body;

  console.log("Alerta de:", device_id);

  const chatId = await getChatIdByDevice(device_id);

  console.log("📲 chatId encontrado:", chatId);

  if (!chatId) {
    return res.status(404).json({ error: "No vinculado" });
  }

  await sendAlert(chatId, `🚨 ALERTA del dispositivo ${device_id}`);

  res.json({ ok: true });
};