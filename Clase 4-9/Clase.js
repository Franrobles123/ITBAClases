// Ejemplo de forEach en JavaScript
// Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// LOOPS / BUCLES
// while => cuando no tengamos claro o muy claro la longitud del array
// for => cuando sabemos la cantidad de repeticiones
/*  
const array1 = ["a", "b", "c"];

let ejecucion= 1; 
array1.forEach(function(cadaElementoDelArray, i, array) {
    console.log("Ejecución número:", ejecucion);
    console.log("Índice:", i);
    console.log("Array completo:", array);
    console.log(cadaElementoDelArray);
    ejecucion++;
});


const objet1 = {
  nombre: "Pedro",
  edad: 25
};
const arrayDeObjetos = [
  { nombre: "Pedro", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Luis", edad: 28 }
];


// Ejemplo básico: recorrer cada elemento
array1.forEach(function (element) {
  console.log(element);
});

// Ejemplo con índice y array completo
array1.forEach(function (element, i, array) {
  console.log(element, i, array);
});
*/
// Con arrays de objetos
const productos = [
  { nombre: "Mesa", precio: 25000 },
  { nombre: "Silla", precio: 15000 }
];

// Recorrer productos mostrando nombre y precio
productos.forEach(function (producto) {
  console.log("Producto:", producto.nombre, "- Precio:", producto.precio);
});

const div = document.querySelector("#producto-conteiner");
console.log(div);
const h3Nuevo = document.createElement("h3");
h3Nuevo.textContent = "Titulo";
console.log(h3Nuevo);

div.appendChild(h3Nuevo);
/*
// DIFERENCIAS ENTRE for, while y forEach

// --- FOR ---
// Se usa cuando sabemos cuántas veces queremos repetir algo
// o podemos calcular la cantidad de iteraciones.
// Necesita un contador (ej: let i = 0) y una condición de parada.
for (let i = 0; i < 5; i++) {
  console.log("FOR -> Iteración número:", i);
}

// --- WHILE ---
// Se usa cuando NO sabemos cuántas veces se repetirá,
// pero sí conocemos una condición de parada.
// Puede volverse infinito si la condición nunca cambia.
let j = 0;
while (j < 5) {
  console.log("WHILE -> Iteración número:", j);
  j++;
}

// --- FOREACH ---
// Es un método propio de los arrays.
// Recorre automáticamente todos los elementos de un array.
// Es más simple y legible, pero no sirve en cualquier cosa, solo en arrays.
const frutas = ["manzana", "pera", "uva"];
frutas.forEach(function (fruta, index) {
  console.log("FOREACH -> Índice:", index, "Fruta:", fruta);
});

// RESUMEN:
// - FOR: cuando sabemos cuántas veces repetir (ej: de 0 a 10).
// - WHILE: cuando no sabemos cuántas veces, depende de una condición.
// - FOREACH: para recorrer arrays de forma más sencilla y moderna.
*/