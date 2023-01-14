const apiController = require('../controllers/apiController');

const express = require('express');
const router = express.Router();

router.get('/usuarios', apiController.usuarios);
// acá falta "un servicio que retorne un usuario particular por id (no retornar password o datos sensibles)"
// router.get('/usuario/:id', apiController.usuario);

router.get('/productos', apiController.productos)

// acá falta "un servicio que retorne un producto particular por id. Tener en cuenta también los datos de tablas relacionadas y la ruta o url de la imagen del producto"
// router.get('/producto/:id', apiController.producto);

module.exports = router;