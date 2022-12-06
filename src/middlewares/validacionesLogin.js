// Middleware de ruta

// Función MW: sirve para validar con express-validator el login

const { body } = require('express-validator');

validacionesLogin = [
    body('emailUsuario')
        .notEmpty().withMessage('Debes completar con el mismo mail con el cual te registraste').bail()
        .isEmail().withMessage('Email inválido'),
    body('claveLogin').notEmpty().withMessage('Debes completar con tu contraseña')
];

module.exports = validacionesLogin;


