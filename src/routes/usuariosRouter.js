const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

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


//***  Validaciones  ****/

/* Registro */ 
let validacionesRegistro = [
    body('registerName').notEmpty().withMessage('Campo vacio'),
    body('registerSurname').notEmpty().withMessage('Campo vacio'),
    body('registerEmail'),
    body('registerContactNumber'),
    body('registerAdress'),
    body('registerPassword').isStrongPassword(str [options]), //acá no sé si falta ponerle las options o vienen tipo por default de esta libreria
    body('registerRepeatPassword'),
 ]

 /* Login */
 

// ********** RUTAS **********/

/* Registro nuevo usuario y el guardado de sus datos */ 
router.get('/registro', usuariosController.registro);
router.post('/registro', validacionesRegistro, usuariosController.guardarUsuarioNuevo);

// ********** Exportación de las rutas. No tocar **********
module.exports = router;