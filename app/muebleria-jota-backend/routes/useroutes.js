const express = require('express');
const router = express.Router();

// Datos de ejemplo
const users = [{ id: 1, name: 'Ana' }, { id: 2, name: 'Luis' }];

// GET /api/users
router.get('/', (req, res) => {
  res.json(users);
});

// GET /api/users/:id
router.get('/:id', (req, res, next) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    const error = new Error('Usuario no encontrado');
    error.status = 404;
    return next(error);
  }
  res.json(user);
});

// POST /api/users
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Usuario creado' });
});

module.exports = router;