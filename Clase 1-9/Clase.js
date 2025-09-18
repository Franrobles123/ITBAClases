const catalogoMuebles = ['Silla de Comedor', 'Mesa de Centro', 'Sofá de 3 Cuerpos', 'Estantería'];
const procucto = {
  id: 'silla-01',
  nombre: "Silla de Oficina Ergonómica",
  precio: 25000,
  stock: 15,
  color: "Marrón",
  esclienteregistrado: true,
  aplicardescuento: function() {
    if(this.esclienteregistrado) {
      const montoDescuento = (this.precio * 10) / 100;
      return montoDescuento;
    }
  }
}
console.log('El descuento es de: ',procucto.aplicardescuento());

const arrayproductos = [{
  id: 'silla-01',
  nombre: "Silla de Oficina Ergonómica",
  precio: 25000,
  stock: 15,
  color: "Marrón",
  esclienteregistrado: true,
  aplicardescuento: function() {
    if(this.esclienteregistrado) {
      const montoDescuento = (this.precio * 10) / 100;
      return montoDescuento;
    }
    else {
      return false;
    }
  }
},
{
  id: 'mesa-01',
  nombre: "Mesa de Roble para Comedor",
  precio: 80000,
  stock: 5,
  color: "Marrón",
  esclienteregistrado: false,
  aplicardescuento: function() {
    if(this.esclienteregistrado) {
      const montoDescuento = (this.precio * 10) / 100;
      return montoDescuento;
    }
    else {
      return false;
    }
  }
},
{
  id: 'sofa-01',
  nombre: "Sofá de 3 Cuerpos",
  precio: 150000,
  stock: 0,
  color: "Gris",
  esclienteregistrado: true,
  aplicardescuento: function() {
    if(this.esclienteregistrado) {
      const montoDescuento = (this.precio * 10) / 100;
      return montoDescuento;
    }
    else {
      return false;
    }
  }
}
]
console.log("Nombre del producto:",arrayproductos[0].nombre);
console.log ("Color del producto:",arrayproductos[2].color);
// while
let i = 0;
while (i < catalogoMuebles.length) {
  console.log('Producto while:',catalogoMuebles[i]);
  i++;
}

let j = 0;
for (let j = 0; j < catalogoMuebles.length; j++) {
  console.log('Producto for:',catalogoMuebles[j]);
}


//Primer ejecucion del while
// i == 0
// 0 < 5 ? SI
// Mostrar procucto[0] -> Silla de Comedor

// i++ -> i = 1
//Segunda ejecucion del while
// i == 1
// 1 < 5 ? SI
// Mostrar procucto[1] -> Mesa de Roble

// i++ -> i = 2
//Tercer ejecucion del while
// i == 2
// 2 < 5 ? SI
// Mostrar procucto[2] -> Sofá de 3 Cuerpos

// i == 5 
// 5 < 5 ? NO
// Fin del while

// El DOM es como una version viva del HTML 
const titulo = document.querySelector('#titulo');
const boton = document.querySelector('#boton');
titulo.textContent = "Catálogo de Muebles";
boton.addEventListener('click', function() {    
  console.log('Diste click en el botón');
  titulo.textContent = "Catálogo de Muebles - Actualizado";
} ) 
