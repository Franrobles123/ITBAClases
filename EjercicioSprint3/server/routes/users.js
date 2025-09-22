const express = require("express");
const createHttpError = require("http-errors");
const useroutas = express.Router();

const usuarios = [
  { id: 1, nombre: "Ed", email: "ed@gmail.com" },
  { id: 2, nombre: "Edd", email: "edd@gmail.com" },
  { id: 3, nombre: "Eddy", email: "eddy@gmail.com" }
];

useroutas.get("/", (req, res) => {
    res.json(usuarios);
});

useroutas.get("/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const usuario = usuarios.find((u)=> u.id == id);
    if (usuario){
        res.json(usuario);
    }else{
        res.status(404).json({error:"Usuario no encontrado"});
    }
});


useroutas.post("/", (res, req) =>{
    const id = usuarios.length + 1;
    const {nombre, email} = req.body;
    if (!nombre || !email){
        return res.status(400).json({error: "Nombre y email son requeridos"});
    }
    const usuario = {id, nombre, email};
    usuarios.push(usuario);
    res.send(201).json(usuario);
});

module.exports = {useroutas};
