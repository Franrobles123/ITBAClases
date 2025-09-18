const path = require("path");

// Unir rutas de forma multiplataforma 
const rutaCompleta = path.join("Nodejs", "miarchivo.txt");

console.log("Ruta completa:", rutaCompleta);

//Obtener la extension de un archivo
const extension = path.extname(rutaCompleta);
console.log("Extension del archivo:", extension);
//Obtener el nombre base de un archivo
const nombreBase = path.basename(rutaCompleta);
console.log("Nombre base:", nombreBase);
