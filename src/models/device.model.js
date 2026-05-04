const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  device_id: { type: String, unique: true },
  chat_id: String
});

module.exports = mongoose.model('Device', deviceSchema);