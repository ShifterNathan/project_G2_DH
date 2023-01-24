const apiController = require('../controllers/apiController');
const express = require('express');
const router = express.Router();

router.get('/usuarios', apiController.usuarios);
router.get('/usuarios/:id', apiController.usuario);

router.get('/productos', apiController.productos);
router.get('/productos/:id', apiController.producto);

module.exports = router;