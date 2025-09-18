console.log("Hola, consola");
console.log(5+3);
//
let edad = 18;
console.log("Edad inicial:", edad); // Muestra: Edad inicial: 18
//
edad = 19; // El valor de la caja ha cambiado
console.log("Edad actualizada:", edad); // Muestra: Edad actualizada: 19
//
const NOMBRE_USUARIO = "JotaMuebles";
console.log(NOMBRE_USUARIO); // Muestra: JotaMuebles
 
// Si intentas hacer esto, obtendrás un error en la consola ¡y eso es bueno!
// NOMBRE_USUARIO = "OtroNombre"; // TypeError: Assignment to constant variable.

// Ejemplo control
let stockDeSillas = 25;
 
if (stockDeSillas > 20) {
  console.log("Stock alto: Hay muchas sillas disponibles.");
} else if (stockDeSillas > 0) {
  console.log("Stock bajo: ¡Quedan pocas unidades, aprovecha!");
} else {
  console.log("Agotado: No hay sillas disponibles por el momento.");
}
// Resultado en la consola: "Stock bajo: ¡Quedan pocas unidades, aprovecha!"
for (let i = 1; i <= 3; i++) {
  console.log("Mostrando silla de comedor modelo #" + i);
}
// Resultado en la consola:
// Mostrando silla de comedor modelo #1
// Mostrando silla de comedor modelo #2
// Mostrando silla de comedor modelo #3
// Ejemplo bucle While
let piezasEnsambladas = 0;
const piezasTotales = 5;
 
while (piezasEnsambladas < piezasTotales) {
  piezasEnsambladas++; // En cada repetición, ensamblamos una pieza.
  console.log("Ensamblando pieza " + piezasEnsambladas + " de " + piezasTotales);
}
 
console.log("¡Mueble ensamblado con éxito!");

// 1. Declaramos la función con dos parámetros: precio y tasaDeImpuesto
function calcularPrecioFinal(precioBase, tasaDeImpuesto) {
  const impuesto = precioBase * tasaDeImpuesto;
  const precioTotal = precioBase + impuesto;
  return precioTotal; // 3. La función devuelve el resultado del cálculo
}
 
// 2. Llamamos a la función con dos argumentos reales
const precioMesa = 800;
const iva = 0.21;
 
const precioFinalMesa = calcularPrecioFinal(precioMesa, iva);
 
console.log("El precio final de la mesa es: $" + precioFinalMesa); 
// Resultado en la consola: El precio final de la mesa es: $605