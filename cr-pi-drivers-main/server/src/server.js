const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const axios = require('axios');
const { conn, Driver } = require('./db'); // Asegúrate de importar la instancia de Sequelize y el modelo Driver correctamente
const router = require('./routes');

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors());

// Verificar la conexión a la base de datos
conn
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
  
  server.use(
    cors({
      origin: 'http://localhost:5173', // Cambia esto con la URL de tu frontend
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    })
  );
  
// Ruta para obtener conductores desde la API externa
server.get('/character', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/drivers');
    const conductores = response.data;
    res.json(conductores);
  } catch (error) {
    console.error('Error al obtener la información:', error);
    res.status(500).send('Error interno del servidor');
  }
});


// Ruta para agregar un nuevo conductor
server.post('/character', async (req, res) => {
  try {
    // Obtener los datos del cuerpo de la solicitud
    const { nombre, apellido, descripcion, imagen, nacionalidad, fechaNacimiento } = req.body;

    // Crear un nuevo conductor en la base de datos
    const nuevoConductor = await Driver.create({
      nombre,
      apellido,
      descripcion,
      imagen,
      nacionalidad,
      fechaNacimiento,
    });

    // Responder con el nuevo conductor creado
    res.status(201).json(nuevoConductor);
  } catch (error) {
    console.error('Error al crear un nuevo conductor:', error);
    res.status(500).send('Error interno del servidor');
  }
});

// Rutas principales
server.use(router);

module.exports = server;
