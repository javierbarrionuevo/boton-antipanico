const { sendAlert } = require('../services/telegram.service');
const { testChatId } = require('../config/env');

const handleAlert = async (req, res) => {
  try {
    const { device_id } = req.body;

    console.log('Alerta de:', device_id);

    const message = `🚨 ALERTA\nDispositivo: ${device_id}`;

    await sendAlert(testChatId, message);

    res.json({ ok: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error interno' });
  }
};

module.exports = { handleAlert };