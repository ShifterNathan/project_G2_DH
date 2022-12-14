const mainController = require('../controllers/mainController');

const express = require('express');
const router = express.Router();

router.get('/', mainController.index);
router.get('/faq', mainController.faq);
router.get('/nosotros', mainController.nosotros);

module.exports = router;


