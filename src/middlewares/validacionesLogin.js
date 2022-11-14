const session = require('express-session');
const { body } = require('express-validator');

validations = [
    body('email').notEmpty().isEmail().withMessage('Escribe un email'),
    body('password').notEmpty.withMessage('Escribe una contraseña')
]

module.exports = validations;


