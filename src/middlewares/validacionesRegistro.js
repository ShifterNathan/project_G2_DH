// Middleware de ruta

// Función MW: sirve para validar con express-validator el registro

const { body } = require('express-validator');
const path = require('path');

let validacionesRegistro = [
    body('nombreUsuario').notEmpty().withMessage('Debes completar tu nombre'),
    body('apellidoUsuario').notEmpty().withMessage('Debes completar tu apellido'),
    body('telefonoUsuario').notEmpty().withMessage('Debes completar tu teléfono de contacto'),
    body('emailUsuario')
        .notEmpty().withMessage('Debes completar tu email').bail()
        .isEmail().withMessage('Formato de email inválido'),
    body('claveUsuario').notEmpty().withMessage('Debes completar tu clave'),
    body('direccionUsuario').notEmpty().withMessage('Debes completar tu dirección'),
    body('avatar').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
            
        if (!file) { //cuando no suben un archivo
            throw new Error ('Falta subir imagen');
        } else {  //cuando suben un archivo, verificar la extensión del mismo
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error (`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            };
        }
        return true;
        })
];


module.exports = validacionesRegistro;
