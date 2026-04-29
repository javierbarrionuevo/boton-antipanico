const express = require('express');

const alertRoutes = require('./routes/alert.routes');

const app = express();

console.log("Cargando rutas de alerts...");

app.use(express.json());

app.use('/api/alerts', alertRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando');
});

// 👇 CLAVE PARA RENDER
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

const { sendAlert } = require('./services/telegram.service');

sendAlert(process.env.TEST_CHAT_ID, "🧪 TEST DESDE RENDER");