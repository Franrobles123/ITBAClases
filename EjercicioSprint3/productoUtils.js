function estaDisponible(producto){
    return producto.stock > 0;
}
// Función que devuelve info formateada del producto
function obtenerInfo(producto) {
  return `Producto: ${producto.nombre} - Stock: ${producto.stock} unidades.`;
}

// Exportamos las funciones
module.exports = { estaDisponible, obtenerInfo };