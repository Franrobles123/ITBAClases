//De esta manera importo la funcion fs con requiere, para leer un archivo
const fs = require("fs");

// Lee en Nodejs (misma carpeta del script)
fs.readFile(__dirname + "\\miarchivo.txt", "utf8", (err, data) => {
  if (err) { console.error(err.message); return; }
  console.log("OK lectura");
});

// Crea el nuevo UN NIVEL ARRIBA (Sprint1)
const salida = "Archivo creado en la carpeta padre (Sprint1)";
fs.writeFile(__dirname + "\\..\\miarchivo_2.txt", salida, "utf8", (err) => {
  if (err) { console.error(err.message); return; }
  console.log("Creado en:", __dirname + "\\..\\miarchivo_2.txt");
});


