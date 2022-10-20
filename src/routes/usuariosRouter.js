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

router.get('/login', usuariosController.login);

router.get('/registro', usuariosController.registro);
router.post('/registro', usuariosController.guardarUsuarioNuevo)

//router.get('/create', usuariosController.login);
//router.post('/create', uploadFile.single('imageDOG'), usuariosController.login);

//router.get('/create', usuariosController.registro);
//router.post('/create', uploadFile.single('imageDOG'), usuariosController.registro);


// ********** Exportación de las rutas. No tocar **********
module.exports = router;