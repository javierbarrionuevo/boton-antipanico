const express = require('express');
const router = express.Router();
const { handleAlert } = require('../controllers/alert.controller');

router.post('/', handleAlert);

module.exports = router;