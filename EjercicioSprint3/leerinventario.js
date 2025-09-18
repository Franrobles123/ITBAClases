const fs = require("fs");

// Lee en Nodejs (misma carpeta del script)
fs.readFile(__dirname + "\\inventario.txt", "utf8", (err, data) => {
  if (err) { console.error(err.message); return; }
  console.log(data);
});

// Crea el nuevo UN NIVEL ARRIBA (Sprint1)
const salida = "Archivo creado en la carpeta padre (Sprint1)";
fs.writeFile(__dirname + "\\..\\inventario.txt", salida, "utf8", (err) => {
  if (err) { console.error(err.message); return; }
  console.log("Creado en:", __dirname + "\\..\\inventario.txt");
});