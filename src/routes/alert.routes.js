const express = require('express');
const router = express.Router();

const { createAlert } = require('../controllers/alert.controller');

router.post('/', createAlert);

module.exports = router;