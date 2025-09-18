const express = require('express');
const app = express();
const PORT = 4000;
const rutasProductos = require('./clase15/rutas/productos');

const productos = [
    { id: 1, nombre: "Silla", precio: 2000 },
    { id: 2, nombre: "Mesa", precio: 3000 }
];

// ERROR 1: Middleware roto, ¿Pista? es un middleware que necesita continuar...
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

// ERROR 2: Autorización que no autoriza, ¿Pista? Si no hay authorization en los 'headers', ¿continua?
const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ mensaje: 'No autorizado' });
    }
    console.log('Autorizado');
    next();
};

app.use(express.json());
app.use(logger);

app.get('/api/productos', (req, res) => {
    res.json(productos);
});

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});