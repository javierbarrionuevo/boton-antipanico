const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("🚨 BOTÓN PRESIONADO");
  res.send("OK");
});

module.exports = router;