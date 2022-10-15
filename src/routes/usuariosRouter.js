const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const usuariosController = require('../controllers/usuariosController');

//***  Configuración de multer  ****/


// ********** RUTAS **********

router.get('/login', usuariosController.login);
router.get('/registro', usuariosController.registro);


// ********** Exportación de las rutas. No tocar **********
module.exports = router;