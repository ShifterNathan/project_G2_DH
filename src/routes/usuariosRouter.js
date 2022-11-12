const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const usuariosController = require('../controllers/usuariosController');
const { Router } = require('express');

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

//***  Middlewares  ****/

const {guestMw} = require('../middlewares/guestMw');
const {authMw} = require('../middlewares/authMw');
const validacionesRegistroMw = require('../middlewares/validacionesRegistroMw');

// ********** RUTAS **********/

/* Registro nuevo usuario y el guardado de sus datos */ 
router.get('/registro', guestMw, usuariosController.registro); // (Tiene que ser invitado para entrar a este formulario)
router.post('/registro', validacionesRegistroMw, usuariosController.procesoRegistro);

// ********** Exportación de las rutas. No tocar **********
module.exports = router;