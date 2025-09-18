const IVA = 0.21;
function calcularPrecioConIVA(precio) {
    return precio + (precio * IVA);
}

module.exports = {calcularPrecioConIVA};


