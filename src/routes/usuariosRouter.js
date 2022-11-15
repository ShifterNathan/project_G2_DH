const express = require('express');
const router = express.Router();
const path = require('path');

const usuariosController = require('../controllers/usuariosController');
const { Router } = require('express');


//***  Middlewares  ****/

const uploadAvatar = require('../middlewares/multerUsuario');
const validacionesRegistro = require('../middlewares/validacionesRegistro');
const validacionesLogin = require('../middlewares/validacionesLogin')
const guestMw = require('../middlewares/guestMw');
// const authMw = require('../middlewares/authMw'); --> es para la ruta get del perfil del usuario


// ********** RUTAS **********/

/* Registro nuevo usuario + el guardado de sus datos */ 
router.get('/registro', guestMw, usuariosController.registro); 
router.post('/registro', uploadAvatar.single('avatar'), validacionesRegistro, usuariosController.procesoRegistro);

/* Login + proceso login */ 
router.get('/ingreso', guestMw, usuariosController.login);
router.post('/ingreso', validacionesLogin, usuariosController.procesoLogin);

router.get('/ingreso', usuariosController.login);
router.post('/ingreso', usuariosController.loginProcess);

// ********** Exportación de las rutas. No tocar **********
module.exports = router;






