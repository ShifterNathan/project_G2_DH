const mainController = require('../controllers/mainController');

const express = require('express');
const router = express.Router();

router.get('/', mainController.index);

router.get('/login', mainController.login);
router.get('/registro', mainController.registro);

module.exports = router;


