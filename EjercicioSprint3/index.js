// Cargar variables de entorno
require("dotenv").config();

// Importar dependencias
const cors = require("cors");
const express = require("express");

// Crear la app de Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Configurar puerto (desde .env o 3000 por defecto)
const port = process.env.PORT || 3000;

const { loggerMiddleware } = require("./logger");
app.use(loggerMiddleware); // Usar el middleware de logging

// Middlewares
app.use(cors());
app.use(express.json()); // Para poder leer JSON en peticiones POST

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

// Ejemplo de ruta GET adicional
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde la API 🚀" });
});

app.get("/acerca-de", (req, res)=>{
    res.send("Este es un servidor que provee funcionalidades de alta, baja y modificaciones de usuarios");

});

app.get("/contacto", (req, res)=>{
    res.send("francisco.robles@hospitalitaliano.org.ar");
    
});

const usuarios = [
  { id: 1, nombre: "Ed", email: "ed@gmail.com" },
  { id: 2, nombre: "Edd", email: "edd@gmail.com" },
  { id: 3, nombre: "Eddy", email: "eddy@gmail.com" }
];

app.get("/api/usuarios", (req, res) => {
    res.json(usuarios);
});

app.get("/api/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const usuario = usuarios.find((u)=> u.id == id);
    if (usuario){
        res.json(usuario);
    }else{
        res.status(404).json({error:"Usuario no encontrado"});
    }
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

app.post("/api/usuarios/", (res, req) =>{
    const id = usuarios.length + 1;
    const {nombre, email} = req.body;
    if (!nombre || !email){
        return res.status(400).json({error: "Nombre y email son requeridos"});
    }
    const usuario = {id, nombre, email};
    usuarios.push(usuario);
    res.send(201).json(usuario);
});


app.use((req, res)=> {
    res.status(404).send("Pagina no encontrada"); 
});
// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
