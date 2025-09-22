const express = require("express");
const app = express();
// Configurar puerto (desde .env o 3000 por defecto)
const port = process.env.PORT || 3000;

const { loggerMiddleware } = require("../Ejercicio2/logger");
app.use(loggerMiddleware); // Usar el middleware de logging

app.get("/", (req, res) => {
  res.send("¡Bienvenido al servidor de Mueblería Jota!");
});
// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
