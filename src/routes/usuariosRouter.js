const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const usuariosController = require('../controllers/usuariosController');
const { Router } = require('express');

//***  Configuración de multer  ****/
const storage = multer.diskStorage({
    
    destination: function(req, file, cb) {       
        cb(null, path.join(__dirname,"../../public/img/avatars"));   
    },
    
    filename: function(req, file, cb) {          
        let imageName = Date.now() + file.originalname;  
        cb(null, imageName);         
    }
});

const uploadFile = multer({ storage: storage});

//***  Validaciones  ****/



//***  Middlewares  ****/

const validacionesRegistro = require('../middlewares/validacionesRegistro')
const {guestMw} = require('../middlewares/guestMw');
const {authMw} = require('../middlewares/authMw');

// ********** RUTAS **********/

/* Registro nuevo usuario y el guardado de sus datos */ 
router.get('/registro', usuariosController.registro); // (Tiene que ser invitado para entrar a este formulario)
router.post('/registro', uploadFile.single('avatar'), validacionesRegistro, usuariosController.procesoRegistro);

// ********** Exportación de las rutas. No tocar **********
module.exports = router;