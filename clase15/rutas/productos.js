const express = require('express');
const router = express.Router();

const productos = [
    { id: 1, nombre: "Silla", precio: 2000 },
    { id: 2, nombre: "Mesa", precio: 3000 }
];

// Obtener todos los productos
router.get('/', (req, res) => {
    res.status(200).json(productos);
});

// Crear un nuevo producto
router.post('/', (req, res) => {
    try {
        const traeAlgoElBody = req.body.precio || req.body.nombre;

        if (!traeAlgoElBody) {
            return res.status(400).json({ 
                mensaje: 'No hay datos',
                error: "Necesita nombre y precio"
            });
        }

        const nuevoProducto = {
            id: productos.length + 1,
            nombre: req.body.nombre,
            precio: req.body.precio
        };

        productos.push(nuevoProducto);
        res.status(201).json(nuevoProducto);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error interno",
            error: "Internal error"
        });
    }
});

module.exports = router;



