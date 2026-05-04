const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error("❌ Error DB:", err.message);
  } else {
    console.log("📦 SQLite conectado");
  }
});

// 🔥 crear tabla al iniciar
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS devices (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      device_id TEXT UNIQUE,
      chat_id TEXT
    )
  `);
});

module.exports = db;