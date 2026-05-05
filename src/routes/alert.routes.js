const express = require('express');
const router = express.Router();

const { getDeviceAlerts } = require('../services/alert.service');

const { createAlert } = require('../controllers/alert.controller');

router.post('/', createAlert);

module.exports = router;



router.get('/:device_id', async (req, res) => {
  const { device_id } = req.params;

  const alerts = await getDeviceAlerts(device_id);

  res.json(alerts);
});