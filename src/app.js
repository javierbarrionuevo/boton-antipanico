const connectDB = require('./database/mongo');

connectDB();

const express = require('express');
const app = express();

// middleware
app.use(express.json());

// rutas
const alertRoutes = require('./routes/alert.routes');
app.use('/api/alerts', alertRoutes);

// telegram
const { bot } = require('./services/telegram.service');

// endpoint webhook
app.post(`/bot${process.env.TELEGRAM_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// test
app.get('/', (req, res) => {
  res.send('API funcionando');
});

// puerto (Render)
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});