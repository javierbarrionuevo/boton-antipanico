const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
  device_id: String,
  chat_id: String,
  message: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Alert', alertSchema);