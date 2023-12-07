const axios = require('axios');
const server = require('./src/server');
const { conn } = require('./src/db.js');
const PORT = 3001;

const startServer = async () => {
  try {
    // Sincronizar la base de datos
    await conn.sync({ force: true });
    console.log('Base de datos sincronizada correctamente.');

    // Iniciar el servidor
    server.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
  }
};

startServer();
