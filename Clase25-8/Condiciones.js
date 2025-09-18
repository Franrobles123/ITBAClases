let totalcompra = 0;
let seguirComprando = true;

while (seguirComprando) {
    const precio = parseInt(prompt("Ingrese el precio del producto:"));
    totalcompra = totalcompra + precio;
    seguirComprando = confirm("¿Desea agregar otro producto?");
}
alert("El total de su compra es: $" + totalcompra);