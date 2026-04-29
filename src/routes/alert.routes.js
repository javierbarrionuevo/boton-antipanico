const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { device_id } = req.body;

  console.log('Alerta de:', device_id);

  res.json({ ok: true });
});

module.exports = router;