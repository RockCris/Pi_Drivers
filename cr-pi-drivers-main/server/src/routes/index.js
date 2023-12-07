const express = require('express');
const driversRouter = require('./drivers');
const teamsRouter = require('./teams');

const router = express.Router();

// Rutas principales
router.use('/drivers', driversRouter);
router.use('/teams', teamsRouter);

module.exports = router;
