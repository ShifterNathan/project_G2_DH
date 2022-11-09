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
    body('registerEmail'),
    body('registerContactNumber'),
    body('registerAdress'),
    body('registerPassword').isStrongPassword(str [options]), //acá no sé si falta ponerle las options o vienen tipo por default de esta libreria
    body('registerRepeatPassword'),
 ]

 /* Login */
 let validacionesLogin = [
    body(''),
 ]

// ********** RUTAS **********/

/* Registro nuevo usuario y el guardado de sus datos */ 
<<<<<<< HEAD
router.get('/registro', usuariosController.registro);
router.post('/registro', validacionesRegistro, usuariosController.guardarUsuarioNuevo);
// no sólo tenemos que agregar el middleware de validaciones si no que también tenemos que agregar lo de auth y guest?

/* Login usuario */
router.login('/login', usuariosController.login);
router.post('/login', validacionesLogin, usuariosController.procesoLogin);
// en el video agrega tipo una ruta check, ¿vale la pena?
// faltaría encriptar contraseña
// dicen de hacer el middleware de recordame?
=======

router.post('/registro', usuariosController.registro);
>>>>>>> d08aa45566a637a25b4861efec23de4eb6da7465

// ********** Exportación de las rutas. No tocar **********
module.exports = router;