const catalogoMuebles = [
{ 
    id: 'silla-01',
    nombre: "Silla de Oficina Ergonómica",
    precio: 25000,
    stock: 15,
    imagenURL: "http://valenziana.com/producto/silla-salta/"
},
{ 
    id: 'mesa-01',
    nombre: "Mesa de Roble para Comedor",
    precio: 80000,
    stock: 5,
    imagenURL: "https://www.imcofue.com.ar/mesa-base-central-roble-2-60x1-20x0-80"
},
{ 
    id: 'sofa-01',
    nombre: "Sofá de 3 Cuerpos",
    precio: 150000,
    stock: 0,
    imagenURL: "https://fullconfort.com.ar/product/sofa-tiziano-compact-3-cuerpos/"
}
]

const container = document.getElementById("product-container");

catalogoMuebles.forEach(producto => {
  // Crear el div de la tarjeta
  const card = document.createElement("div");
  card.classList.add("product-card");

  // Crear elementos
  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;

  const precio = document.createElement("p");
  precio.textContent = `Precio: $${producto.precio}`;

  const imagen = document.createElement("img");
  imagen.src = producto.imagenURL;
  imagen.alt = producto.nombre;

  // Agregar elementos a la tarjeta
  card.appendChild(nombre);
  card.appendChild(precio);
  card.appendChild(imagen);

  // Agregar la tarjeta al contenedor
  container.appendChild(card);
});

