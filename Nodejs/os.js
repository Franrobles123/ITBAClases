// Sistema operativo
const os = require("os");

//Obtener la plataforma del sistema operativo 
const plataforma = os.platform();
console.log("Plataforma:", plataforma);
//Obtener la memoria libre del sistema 
const memoriaLibre = os.freemem();
console.log("Memoria Libre:", memoriaLibre);
//Obtener memoria total del sistema
const memoriatotal = os.totalmem();
console.log("Memoria total:", memoriatotal);
