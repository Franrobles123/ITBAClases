const fs = require('fs');
const path = require('path');

// Ruta al archivo inventario.txt
const ruta = path.join(__dirname, 'inventario.txt');

// Leer el archivo en formato UTF-8
fs.readFile(ruta, 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err.message);
    return;
  }

  // Imprimir todo el contenido
  console.log('Contenido de inventario.txt:\n');
  console.log(data);
});
