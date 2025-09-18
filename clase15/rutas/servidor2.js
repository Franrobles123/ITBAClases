const express = require('express');
const app = express();
const PORT = 4000;
const routerProductos = require('./productos');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "Bienvenido/a a la api Mueblería Jota",
        endpoints: ['GET /api/productos', 'POST /api/productos']
    });
});

app.use('/api/productos', routerProductos);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
    console.error(err.message);

    const statusCode = err.status || 500;

    res.status(statusCode).json({
        mensaje: err.message || 'Error interno del servidor',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
});
