const express = require("express");

const inforoutas = express.Router();
inforoutas.get("/", (req, res) => {
  res.send("¡Hola mundo!");
});

inforoutas.get("/acerca-de", (req, res)=>{
    res.send("Este es un servidor que provee funcionalidades de alta, baja y modificaciones de usuarios");

});

inforoutas.get("/contacto", (req, res)=>{
    res.send("francisco.robles@hospitalitaliano.org.ar");
    
});
module.exports = {inforoutas};