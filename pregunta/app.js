const { estaDisponible, obtenerInfo } = require("../EjercicioSprint3/productoUtils");
const Silla = {
  nombre: "Silla de Pino",
  stock: 15
};

const Mueble = {
  nombre: "Mueble",
  stock: 0
};
console.log(estaDisponible(Silla))
console.log(estaDisponible(Mueble))
console.log(obtenerInfo(Silla))
console.log(obtenerInfo(Mueble))