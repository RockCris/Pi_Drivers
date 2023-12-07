const express = require('express');
const { Op } = require('sequelize');
const { Driver, Team } = require('../db'); // Ajusta la ruta según tu estructura

const router = express.Router();

// Modifica la ruta para escuchar en /character
router.get('/character', async (req, res) => {
    try {
      const { nombre } = req.query;
      let drivers;
  
      if (nombre) {
        drivers = await Driver.findAll({
          where: {
            nombre: { [Op.like]: `%${nombre}%` }
          },
          include: Team
        });
      } else {
        drivers = await Driver.findAll({ include: Team });
      }
  
      console.log('Conductores:', drivers); // Agregar este mensaje de registro
  
      res.json(drivers);
    } catch (error) {
      console.error('Error al obtener los conductores:', error);
      res.status(500).send('Error interno del servidor');
    }
  });

// Modifica la ruta para escuchar en /character
router.post('/character', async (req, res) => {
  try {
    // Obten los datos del cuerpo de la solicitud
    const { nombre, apellido, descripcion, imagen, nacionalidad, fechaNacimiento } = req.body;

    // Crea el nuevo conductor en la base de datos
    const nuevoConductor = await Driver.create({
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fechaNacimiento,
    });

    // Responde con el nuevo conductor creado
    res.status(201).json(nuevoConductor);
  } catch (error) {
    console.error('Error al crear un nuevo conductor:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Otras rutas para los conductores
// ...

module.exports = router;
