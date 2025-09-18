// Seleccionamos el botón por su id
const boton = document.querySelector('#Boton');

// Agregamos el listener
boton.addEventListener("click", () => {
  // Alternamos la clase 'favorito'
  boton.classList.toggle("favorito");

  // Cambiamos el texto según si tiene o no la clase
  if (boton.classList.contains("favorito")) {
    boton.textContent = "⭐ Quitar de Favoritos";
  } else {
    boton.textContent = "❤️ Añadir a Favoritos";
  }
});