const express = require('express');
const app = express();
const PORT = 3000;

const productos = [
    { 
        id: 1, 
        nombre: 'Mesa', 
        precio: 1000 },
    { 
        id: 2, 
        nombre: 'Silla', 
        precio: 500 
    },
    { 
        id: 3, 
        nombre: 'Sillon', 
        precio: 2000 
    },
];  

// Middleware: son una funcion que va a intervenir entre la http.request y la http.response
// 1. MuebleriaJota.com/productos
// 2. Viaja una peticion http de quiero todos los productos
// 3. Antes de llegar al servidor el midelleware va a intervenir la peticion y loggea de la url de la que viene (muebleriajota.com/productos)
// 4. El midelleware deja pasar la peticion al servidor y entrar al app.get
app.use(express.json());
// la linea de arriba hace lo siguiente
// 1. Se fija en req.body en la peticion hay JSON?
// 2. Si es JSON transformalo a objeto JS.
// 3. Ese objeto JS lo guarda en req.body
// 4. Hay que agregarle Next()

app.get('/', (req, res) => {
    res.send('Bienvenidos a Muebleria Jota');
});

app.post('/api/productos', (req, res) => {
    const nuevoProducto = req.body;
    if (!nuevoProducto) {
        res.status(404).send({ error: 'El producto no se envio correctamente' });
    } 
    productos.push(nuevoProducto);

    res.status(201).json({
        mensaje: 'Producto creado',
        producto : nuevoProducto,
        productos : productos
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});



