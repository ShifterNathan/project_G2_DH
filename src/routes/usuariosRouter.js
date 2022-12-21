const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');
// const { Router } = require('express');


//***  Middlewares  ****/
const uploadAvatar = require('../middlewares/multerUsuario');
const validacionesRegistro = require('../middlewares/validacionesRegistro');
const validacionesLogin = require('../middlewares/validacionesLogin')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// ********** RUTAS **********/
/* Registro */ 
router.get('/registro', guestMiddleware, usuariosController.registro); 
router.post('/registro', uploadAvatar.single('avatar'), validacionesRegistro, usuariosController.procesoRegistro);

/* Login */ 
router.get('/ingreso', guestMiddleware, usuariosController.login);
router.post('/ingreso', validacionesLogin, usuariosController.procesoLogin);

router.get('/perfil', authMiddleware, usuariosController.profile);

router.get('/salir', usuariosController.logout);


// ********** Exportación de las rutas. No tocar **********
module.exports = router;






