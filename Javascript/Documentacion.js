// =======================
// ARRAYS (listas en JS)
// =======================
const producto1 = 'Silla de Comedor';
const producto2 = 'Mesa de Centro';
const producto3 = 'Sofá de 3 Cuerpos';
const producto4 = 'Estantería';
const producto5 = 'Escritorio';
// Un array de strings (texto)
const catalogoMuebles = ['Silla de Comedor', 'Mesa de Centro', 'Sofá de 3 Cuerpos', 'Estantería'];
console.log('Producto 1: ', catalogoMuebles[0]); // → ['Silla de Comedor', 'Mesa de Centro', 'Sofá de 3 Cuerpos', 'Estantería']
// Un array de números
const precios = [4500, 25000, 80000, 12000];

// Un array puede contener distintos tipos de datos (aunque no es común)
const datosProducto = ['Silla Ergonómica', 4.8, true]; // nombre, rating, hayStock

// Accedemos a un elemento por su índice (empiezan en 0)
console.log(catalogoMuebles[0]); // → 'Silla de Comedor'
console.log(catalogoMuebles[2]); // → 'Sofá de 3 Cuerpos'

// Modificar un elemento usando su índice
catalogoMuebles[1] = 'Mesa de Roble'; 
console.log(catalogoMuebles); // Ahora el segundo elemento es 'Mesa de Roble'

// Saber cuántos elementos tiene el array
console.log(catalogoMuebles.length); // → 4

// ----------------------------
// Métodos de arrays
// ----------------------------

// Agregar al final
precios.push(5500); 
console.log(precios); // [4500, 25000, 80000, 12000, 5500]

// Agregar al principio
precios.unshift(1000);
console.log(precios); // [1000, 4500, 25000, 80000, 12000, 5500]

// Eliminar el último
const precioEliminado = precios.pop();
console.log(precioEliminado); // → 5500
console.log(precios); // [1000, 4500, 25000, 80000, 12000]

// Eliminar el primero
const primerPrecio = precios.shift();
console.log(primerPrecio); // → 1000
console.log(precios); // [4500, 25000, 80000, 12000]

// =======================
// RECORRER ARRAYS
// =======================

const listadoDeMuebles = ['Silla', 'Mesa', 'Cama'];

// Usando un bucle FOR clásico
for (let i = 0; i < listadoDeMuebles.length; i++) {
  console.log('Producto encontrado: ' + listadoDeMuebles[i]);
}
// → Producto encontrado: Silla
// → Producto encontrado: Mesa
// → Producto encontrado: Cama

// Usando forEach con función tradicional
listadoDeMuebles.forEach(function(mueble, indice) {
  console.log(`Índice ${indice}: ${mueble}`);
});

// Usando forEach con función flecha (más moderno)
listadoDeMuebles.forEach((mueble, indice) => {
  console.log(`Índice ${indice}: ${mueble}`);
});


// =======================
// OBJETOS en JS
// =======================

// Un objeto con propiedades (clave: valor)
const sillaGamer = {
  nombre: "Silla Gamer Pro-Level",
  material: "Cuero sintético",
  precio: 45000,
  enStock: true,
  coloresDisponibles: ["Rojo", "Negro", "Azul"] // Un array dentro del objeto
};

// Acceder a propiedades con corchetes y string
const propiedadAconsultar = 'precio';
console.log(sillaGamer[propiedadAconsultar]); // → 45000
console.log(sillaGamer['material']); // → "Cuero sintético"

// Modificar una propiedad existente
sillaGamer.enStock = false;

// Agregar una nueva propiedad
sillaGamer.garantia = "2 años";

console.log(sillaGamer); 
// Ahora tiene enStock: false y garantía: "2 años"

// =======================
// OBJETOS con MÉTODOS
// =======================

const producto = {
  nombre: "Mesa de Centro",
  precio: 22000,
  descuento: 15, // en porcentaje
  
  // Método para calcular precio con descuento
  calcularPrecioConDescuento: function() {
    const montoDescuento = (this.precio * this.descuento) / 100;
    const precioFinal = this.precio - montoDescuento;
    return precioFinal;
  },

  // Método para mostrar información
  mostrarInfo: function() {
    console.log(`Producto: ${this.nombre} - Precio Original: $${this.precio}`);
  }
};

// Usar un método
producto.mostrarInfo(); // → Producto: Mesa de Centro - Precio Original: $22000

// Usar el método que calcula descuento
const precioFinal = producto.calcularPrecioConDescuento();
console.log(`Precio con descuento: $${precioFinal}`); // → Precio con descuento: $18700


// =======================
// CATÁLOGO DE OBJETOS
// =======================

// Un array de objetos (cada uno representa un producto)
const catalogo = [
  { 
    id: 'silla-01',
    nombre: "Silla de Oficina Ergonómica",
    precio: 25000,
    stock: 15 
  },
  { 
    id: 'mesa-01',
    nombre: "Mesa de Roble para Comedor",
    precio: 80000,
    stock: 5 
  },
  { 
    id: 'sofa-01',
    nombre: "Sofá de 3 Cuerpos",
    precio: 150000,
    stock: 0 
  }
];

// Acceder al nombre del segundo producto (índice 1)
console.log(catalogo[1].nombre); // → "Mesa de Roble para Comedor"

// Mostrar todos los productos sin stock
catalogo.forEach(producto => {
  if (producto.stock === 0) {
    console.log(`${producto.nombre} está agotado.`);
  }
});

//Document.querySelector(selectorCSS)
// Seleccionar el elemento con el ID 'titulo-principal'
const tituloPrincipal = document.querySelector('#titulo-principal');
 
// Seleccionar el primer elemento con la clase 'item-destacado'
const itemDestacado = document.querySelector('.item-destacado');
 
// Seleccionar el primer <a> dentro de un <li>
const primerLink = document.querySelector('li a');

// Document.querySelectorAll(selectorCSS)
// Seleccionar todos los párrafos dentro de un <article>
const todosLosParrafos = document.querySelectorAll('article p');
 
// Ahora podemos iterar sobre ellos
todosLosParrafos.forEach(parrafo => {
  parrafo.style.lineHeight = '1.6'; // Aumentamos el interlineado de cada párrafo
});

// Manipular los Elementos Seleccionados
// Cambiar el Contenido
tituloPrincipal.textContent = 'Mueblería Jota - ¡Nuevos Productos!';

// Cambiar Estilos
tituloPrincipal.style.color = 'navy';
tituloPrincipal.style.backgroundColor = '#f1f1f1';

const menu = document.querySelector('#menu-mobile');
menu.classList.add('abierto');

// Crear y Añadir Nuevos Elementos
// 1. Seleccionamos el contenedor padre (la lista <ul>)
const listaCatalogo = document.querySelector('#lista-de-muebles');
 
// 2. Creamos el nuevo elemento <li> en memoria
const nuevoMueble = document.createElement('li');
 
// 3. Le damos contenido
nuevoMueble.textContent = 'Sofá Cama';
nuevoMueble.classList.add('nuevo-item'); // ¡También le podemos añadir clases!
 
// 4. Lo añadimos al final de la lista <ul>
listaCatalogo.appendChild(nuevoMueble);

const botonComprar = document.querySelector('#btn-comprar');

// Escuchando Eventos del Usuario 
botonComprar.addEventListener('click', function() {
  alert('¡Gracias por tu interés! Producto añadido al carrito.');
});
