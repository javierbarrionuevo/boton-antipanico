const devices = {};

function linkDevice(device_id, chat_id) {
  console.log("💾 Guardando:", device_id, chat_id);
  devices[device_id] = chat_id;
}

function getChatIdByDevice(device_id) {
  console.log("🔍 Buscando:", device_id, devices);
  return devices[device_id];
}

module.exports = {
  linkDevice,
  getChatIdByDevice
};