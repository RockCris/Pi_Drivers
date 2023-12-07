const express = require('express');
const { Driver, Team } = require('../db'); // Cambia la ruta según la estructura de tus archivos

const router = express.Router();

// Definición de rutas para los equipos
router.get('/', async (req, res) => {
  try {
    const teams = await Team.findAll();
    res.json(teams);
  } catch (error) {
    console.error('Error al obtener los equipos:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Otras rutas para los equipos
// ...

module.exports = router;
