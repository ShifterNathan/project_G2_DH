const express = require('express');
const router = express.Router();
const suscripcionController = require('../controllers/suscripcionController');

router.get('/', suscripcionController.suscripcion);

module.exports = router;



