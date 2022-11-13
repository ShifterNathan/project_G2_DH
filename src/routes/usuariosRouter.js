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
     cb(null, path.join(__dirname,"../../public/img/avatars"));   
    },
    
    filename: function(req, file, cb) {          
     let imageName = Date.now() + file.originalname;  
     cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: multerDiskStorage });

//***  Validaciones  ****/

let validacionesRegistro = [
    body('nombreUsuario').notEmpty().withMessage('Debes completar tu nombre'),
    body('apellidoUsuario').notEmpty().withMessage('Debes completar tu apellido'),
    body('telefonoUsuario').notEmpty().withMessage('Debes completar tu teléfono de contacto'),
    body('emailUsuario')
        .notEmpty().withMessage('Debes completar tu email').bail()
        .isEmail().withMessage('Formato de email inválido'),
    body('claveUsuario').notEmpty().withMessage('Debes completar tu clave'),
    body('direccionUsuario').notEmpty().withMessage('Debes completar tu dirección'),
    /*body('avatar').custom((value,{req}) => {
        
        let file = req.file;
        let extensionesAceptadas = ['.jpg','.png','.gif'];
            
        if (!file) { //cuando no suben un archivo
            throw new Error ('Falta subir imagen');
        } else {  //cuando suben un archivo, verificar la extensión del mismo
            let extensionArchivo = path.extname(file.originalname);
            if (!extensionesAceptadas.includes(extensionArchivo)){
                throw new Error ('Las extensiones de archivo permitidas son ');
            };
        }
        return true;
        }),*/
 ];

//***  Middlewares  ****/

const {guestMw} = require('../middlewares/guestMw');
const {authMw} = require('../middlewares/authMw');

// ********** RUTAS **********/

/* Registro nuevo usuario y el guardado de sus datos */ 
router.get('/registro', usuariosController.registro); // (Tiene que ser invitado para entrar a este formulario)
router.post('/registro', validacionesRegistro, usuariosController.procesoRegistro);

// ********** Exportación de las rutas. No tocar **********
module.exports = router;