// "base de datos" en memoria (temporal)
const devices = {
  "ABC123": "123456789" // device_id → chat_id
};

// obtener chat_id desde device_id
function getChatIdByDevice(device_id) {
  return devices[device_id];
}

// vincular dispositivo a usuario
function linkDevice(device_id, chat_id) {
  devices[device_id] = chat_id;
}

module.exports = {
  getChatIdByDevice,
  linkDevice
};