const express = require('express');
const app = express();

// express.json() - El Traductor de JSON
// Usamos el middleware. ¡Debe ir ANTES de las rutas que lo necesiten!
app.use(express.json());
 
app.post('/api/productos', (req, res) => {
  // Gracias a express.json(), req.body ahora es un objeto JS con los datos del cliente.
  const nuevoProducto = req.body; 
  console.log(nuevoProducto); // { "nombre": "Sofá", "precio": 120000 }
  res.status(201).json({ mensaje: 'Producto recibido' });
});

//express.static() - El Servidor de Archivos

// Le decimos a Express que cualquier petición a un archivo que exista
// en la carpeta 'public' debe ser servida directamente.
app.use(express.static('public'));
 
// Si ahora un usuario visita http://localhost:4000/imagenes/logo.png,
// Express buscará y devolverá el archivo /public/imagenes/logo.png.

// Ejemplo 1: Un Logger de Peticiones (Middleware Global)
// mi-logger.js
const logger = (req, res, next) => {
  console.log(`Petición Recibida: ${req.method} en la ruta ${req.originalUrl}`);
  
  // ¡Crucial! Llamamos a next() para que la petición pueda continuar su viaje.
  next(); 
};
 
// server.js
const logger = require('./mi-logger.js');
// ...
app.use(logger); // Lo aplicamos globalmente. Se ejecutará para CADA petición.

// Ejemplo 2: Un "Guardia" de Autenticación (Middleware a nivel de Ruta)
// auth-guard.js
const authGuard = (req, res, next) => {
  // Obtenemos el valor del encabezado 'authorization'
  const tokenRecibido = req.headers['authorization'];
 
  if (tokenRecibido === 'muebles123') {
    // El token es correcto. Añadimos información al objeto req y continuamos.
    req.usuario = { id: 1, rol: 'admin' };
    next(); // ¡Permitimos el paso!
  } else {
    // El token es incorrecto o no existe.
    // Enviamos una respuesta de error y NO llamamos a next().
    res.status(401).json({ mensaje: 'Acceso no autorizado.' });
  }
};
 
// server.js
const authGuard = require('./auth-guard.js');
// ...
 
// Esta ruta es pública y no usa el middleware.
app.get('/api/productos', (req, res) => { /* ... */ });
 
// Esta ruta ESTÁ PROTEGIDA. Pasamos el middleware antes del controlador final.
app.get('/api/admin/panel', authGuard, (req, res) => {
  // Si llegamos aquí, es porque authGuard llamó a next().
  // Podemos acceder a la información que el middleware añadió a req.
  res.send(`Bienvenido al panel de admin, usuario con ID: ${req.usuario.id}`);
});
