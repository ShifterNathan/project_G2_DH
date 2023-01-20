const apiController = require('../controllers/apiController');

const express = require('express');
const router = express.Router();
const dashboardMiddleware = require('../middlewares/dashboardMiddleware')

router.get('/usuarios', dashboardMiddleware, apiController.usuarios);
router.get('/usuarios/:id', dashboardMiddleware, apiController.usuario);

router.get('/productos', dashboardMiddleware, apiController.productos);
router.get('/productos/:id', dashboardMiddleware, apiController.producto);

module.exports = router;