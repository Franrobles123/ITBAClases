// De Objeto JavaScript a String JSON: JSON.stringify()
// 1. Tenemos nuestro objeto de JavaScript
const productoJS = {
  nombre: "Escritorio Minimalista",
  material: "Madera de pino",
  precio: 35000,
  requiereMontaje: true
};
 
// 2. Lo convertimos a un string JSON para enviarlo
const stringJSON = JSON.stringify(productoJS);
 
console.log(stringJSON);
// Resultado en la consola (un solo string de texto):
// "{\"nombre\":\"Escritorio Minimalista\",\"material\":\"Madera de pino\",\"precio\":35000,\"requiereMontaje\":true}"


// De String JSON a Objeto JavaScript: JSON.parse()
// 1. Recibimos una respuesta del servidor (como un string)
const respuestaDelServidor = '{"id":"lam-01","nombre":"Lámpara de Pie","voltaje":220,"enStock":true}';
 
// 2. Lo "parseamos" para convertirlo en un objeto JavaScript
const lamparaObjeto = JSON.parse(respuestaDelServidor);
 
// 3. Ahora podemos trabajar con él como cualquier otro objeto
console.log(lamparaObjeto.nombre); // Muestra: "Lámpara de Pie"
console.log(lamparaObjeto.voltaje); // Muestra: 220

// Manejo de Errores con try, catch y throw
console.log("Iniciando el programa...");
 
try {
  console.log("Dentro del bloque try, a punto de ejecutar algo riesgoso...");
  // Esta función no está definida en ninguna parte, por lo que lanzará un error.
  funcionQueNoExiste(); 
  
  // Esta línea NUNCA se ejecutará porque el error detiene el bloque 'try'.
  console.log("Esto no se mostrará."); 
 
} catch (error) {
  console.error("¡Ups! Atrapamos un error. El programa no se detuvo.");
  console.error("El error fue:", error.message); // .message es una propiedad útil del objeto error.
}
 
console.log("El programa continúa su ejecución después del bloque try...catch.");

// El Bloque finally (Opcional)
try {
  console.log("Intentando procesar un pedido...");
  // Simulemos un posible error
  let pedidoValido = false;
  if (!pedidoValido) {
    throw new Error("El pedido no tiene productos."); // Lanzamos un error a propósito
  }
  console.log("Pedido procesado con éxito.");
 
} catch (error) {
  console.error("Error al procesar:", error.message);
 
} finally {
  // Este bloque se ejecuta SIEMPRE.
  console.log("Proceso de pedido finalizado. Ocultando spinner de carga.");
}

// Lanzando Nuestros Propios Errores con throw
function agregarProductoAlCatalogo(producto) {
  if (!producto.nombre || !producto.precio) {
    // Si el producto no tiene nombre o precio, creamos y lanzamos un error.
    throw new Error("El producto debe tener un nombre y un precio.");
  }
  
  // Si no hay error, el código continúa.
  console.log(`Producto "${producto.nombre}" agregado con éxito.`);
}
 
try {
  const silla = { nombre: "Silla de Pino", precio: 5000 };
  const mesaSinPrecio = { nombre: "Mesa de Centro" };
 
  agregarProductoAlCatalogo(silla);         // Esto funcionará.
  agregarProductoAlCatalogo(mesaSinPrecio); // Esto lanzará un error.
 
} catch (error) {
  console.error("No se pudo agregar el producto:", error.message);
}