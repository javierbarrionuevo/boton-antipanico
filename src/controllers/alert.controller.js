const { getChatIdByDevice } = require('../services/device.service');
const { sendAlert } = require('../services/telegram.service');

exports.createAlert = (req, res) => {
  const { device_id } = req.body;

  console.log("Alerta de:", device_id);

  // 🔍 BUSCAR USUARIO
  const chatId = getChatIdByDevice(device_id);

  console.log("🔍 Buscando:", device_id);
  console.log("📲 chatId encontrado:", chatId);

  if (!chatId) {
    console.log("❌ No hay usuario vinculado");
    return res.status(404).json({ error: "Dispositivo no vinculado" });
  }

  console.log("📲 Enviando alerta a:", chatId);

  // 📲 ENVIAR TELEGRAM
  sendAlert(chatId, `🚨 ALERTA del dispositivo ${device_id}`);

  res.json({ ok: true });
};