// Cargar variables de entorno
require("dotenv").config();

// Importar dependencias
const cors = require("cors");
const express = require("express");

const { useroutas } = require("./routes/users");
const { inforoutas } = require("./routes/info");  

// Crear la app de Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurar puerto (desde .env o 3000 por defecto)
const port = process.env.PORT || 3000;

const { loggerMiddleware } = require("../logger");
app.use(loggerMiddleware); // Usar el middleware de logging

app.use("/api/usuarios", useroutas);
app.use(inforoutas);

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder leer JSON en peticiones POST

// Ruta principal


// Ejemplo de ruta GET adicional
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde la API 🚀" });
});

app.post("/api/usuarios", (req, res) => {
  const id = usuarios.length + 1;

  const usuario = {
    id,
    nombre: "Pepito " + id,
    email: `pepito${id}@gmail.com`
  };

  usuarios.push(usuario);

  res.status(201).json(usuario);
});


app.use((req, res)=> {
    res.status(404).send("Pagina no encontrada"); 
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage = err.message || "Error en el servidor";

  console.error({statusCode, errorMessage, stack: err.stack});
  res.status(statusCode).json({ message: errorMessage });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
