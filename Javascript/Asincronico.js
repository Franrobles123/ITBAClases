// Ejemplo con setTimeout (que simula una espera de red)
console.log("1. Pidiendo una mesa en Mueblería Jota...");
 
// setTimeout delega la tarea a una API del navegador.
setTimeout(() => {
  // Este código se ejecutará DESPUÉS de 2 segundos.
  console.log("3. ¡Mesa confirmada después de 2 segundos!");
}, 2000); // 2000 milisegundos = 2 segundos
 
console.log("2. Mientras esperas, puedes seguir mirando nuestro catálogo.");

// Esta función simula una petición y devuelve una promesa.
function verificarStock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hayStock = Math.random() > 0.5; // Simula aleatoriamente si hay stock o no
      if (hayStock) {
        resolve("Producto en stock. ¡Puedes comprar!"); // Promesa cumplida
      } else {
        reject("Lo sentimos, el producto está agotado."); // Promesa rechazada
      }
    }, 1500);
  });
}
 
console.log("Verificando stock del producto...");
 
verificarStock()
  .then(mensajeDeExito => {
    console.log("Éxito:", mensajeDeExito);
  })
  .catch(mensajeDeError => {
    console.error("Error:", mensajeDeError);
  })
  .finally(() => {
    console.log("Verificación de stock finalizada."); // .finally() se ejecuta siempre
  });


// La función que devuelve la promesa es la misma de antes.
// ...
 
// Creamos una función 'async' para poder usar 'await'
async function realizarCompra() {
  console.log("Verificando stock del producto (con async/await)...");
  try {
    // 'await' pausa la ejecución aquí hasta que la promesa de verificarStock se resuelva.
    const mensaje = await verificarStock();
    console.log("Éxito:", mensaje);
    console.log("Procediendo al pago...");
  } catch (error) {
    // Si la promesa es rechazada, el 'catch' la atrapará.
    console.error("Error:", error);
    console.log("No se puede continuar con la compra.");
  } finally {
    console.log("Verificación de stock finalizada.");
  }
}
 
realizarCompra(); // Llamamos a nuestra función asíncrona

// Aplicación Real: La API fetch
// Pedir datos de un producto a una API pública (con async/await)
async function obtenerProducto(id) {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const respuesta = await fetch(url);
 
    // fetch no considera un error 404 como un rechazo de la promesa,
    // así que debemos verificar la respuesta manualmente.
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: El estado es ${respuesta.status}`);
    }
 
    // response.json() también devuelve una promesa, ¡así que también usamos await!
    const datosProducto = await respuesta.json();
 
    console.log("Producto obtenido:", datosProducto);
 
  } catch (error) {
    console.error("No se pudo obtener el producto:", error);
  }
}
 
obtenerProducto(1); // Pedimos el producto con ID 1

new Promise((resolve, reject) => {
  /* Si fue resuelto, resolve (Promesa cumplida)
  Si fue rechazado, reject (Promesa rechazada) */
})