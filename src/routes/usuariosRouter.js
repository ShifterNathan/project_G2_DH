const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const usuariosController = require('../controllers/usuariosController');

//***  Configuración de multer  ****/
const multerDiskStorage = multer.diskStorage({
    
    destination: function(req, file, cb) {       
     cb(null, path.join(__dirname,"../../public/img/usuarios"));   
    },
    
    filename: function(req, file, cb) {          
     let imageName = Date.now() + file.originalname;  
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });

// ********** RUTAS **********


/* Registro nuevo usuario y el guardado de sus datos */ 

router.post('/registro', usuariosController.registro);

// ********** Exportación de las rutas. No tocar **********
module.exports = router;