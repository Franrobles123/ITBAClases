const fs = require("fs");
const path = require("path");

const LOG_FILE = path.join(__dirname, "sistema.log"); // al lado de logger.js

function log(mensaje) {
  const timestamp = new Date().toLocaleString("es-AR"); // fecha y hora
  const linea = `[${timestamp}] ${mensaje}\n`;
  fs.appendFile(LOG_FILE, linea, "utf8", (err) => {
    if (err) console.error("Error al escribir en sistema.log:", err.message);
  });
  return linea; // opcional: por si querés imprimirlo también
}
module.exports = {log};