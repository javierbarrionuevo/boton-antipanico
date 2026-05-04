const db = require('../database/sqlite');

// guardar vínculo
function saveDevice(deviceId, chatId) {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT OR REPLACE INTO devices (device_id, chat_id) VALUES (?, ?)`,
      [deviceId, chatId],
      function (err) {
        if (err) return reject(err);
        resolve();
      }
    );
  });
}

// buscar chatId
function findChatId(deviceId) {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT chat_id FROM devices WHERE device_id = ?`,
      [deviceId],
      (err, row) => {
        if (err) return reject(err);
        resolve(row ? row.chat_id : null);
      }
    );
  });
}

module.exports = {
  saveDevice,
  findChatId
};