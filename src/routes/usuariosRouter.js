const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

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


//***  Validaciones ¿las llevamos tipo a un middleware? ****/

/* Registro */ 
let validacionesRegistro = [
    body('registerName').notEmpty().withMessage('Campo vacio'),
    body('registerSurname').notEmpty().withMessage('Campo vacio'),
    body('registerEmail')
        .notEmpty().withMessage('Campo vacio').bail()
        .isEmail().withMessage('Formato de email inválido'),
    body('registerContactNumber'),
    body('registerAdress'),
    body('registerPassword').isStrongPassword(str [options]), //no sé cómo usar la libreria claramente y sus parámetros, creo que cuando le pones options ya se lo hace por default no hace falta {ponerle toooodo acá}
    body('registerRepeatPassword'),
 ]

 /* Login */
 let validacionesLogin = [
    body(''),
 ]

// ********** RUTAS **********/

/* Registro nuevo usuario y el guardado de sus datos */ 
router.get('/registro', usuariosController.registro);
router.post('/registro', validacionesRegistro, usuariosController.procesoRegistro);
// no sólo tenemos que agregar el middleware de validaciones si no que también tenemos que agregar lo de auth y guest?

/* Login usuario */
router.get('/login', usuariosController.login);
router.post('/login', validacionesLogin, usuariosController.procesoLogin);
// en el video agrega tipo una ruta check, ¿vale la pena?
// faltaría encriptar contraseña
// dicen de hacer el middleware de recordame?

// ********** Exportación de las rutas. No tocar **********
module.exports = router;