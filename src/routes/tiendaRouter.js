const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const tiendaController = require('../controllers/tiendaController');

//***  Configuración de multer  ****/



// ********** RUTAS **********
router.get('/', tiendaController.tienda);

router.get('/crear');





// ********** Exportación de las rutas. No tocar **********
module.exports = router;


