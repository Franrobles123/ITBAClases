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

