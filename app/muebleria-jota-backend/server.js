const express = require('express');
const app = express();

// Importamos las rutas
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Montamos las rutas
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Middleware para rutas no encontradas
app.use((req, res, next) => {
  const error = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  error.status = 404;
  next(error);
});

// Middleware centralizado de manejo de errores
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({
    message: err.message || 'Error en el servidor',
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));