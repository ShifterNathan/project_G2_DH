// Función MW: se va a encargar de las validaciones correspondientes al registro de un nuevo usuario

const {body} = require('express-validator');
const path = require('path');

let validacionesRegistro = [
    body('nombreUsuario').notEmpty().withMessage('Debes completar tu nombre'),
    body('apellidoUsuario').notEmpty().withMessage('Debes completar tu apellido'),
    body('mailUsuario')
        .notEmpty().withMessage('Debes completar tu email').bail()
        .isEmail().withMessage('Formato de email inválido'),
    // body('registerContactNumber'),
    body('claveUsuario')
        .notEmpty().withMessage('La contraseña debe contener al menos ocho caracteres, una mayúscula, una minúscula, un número y un simbolo')
        .isStrongPassword({
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
            returnScore: false,
            pointsPerUnique: 1,
            pointsPerRepeat: 0.5,
            pointsForContainingLower: 10,
            pointsForContainingUpper: 10,
            pointsForContainingNumber: 10,
            pointsForContainingSymbol: 10,
          }),
    body('direccionUsuario').notEmpty().withMessage('Debes completar tu nombre'),
    body('avatar').custom((value,{req}) => {
        let file = req.file;
        let extensionesAceptadas = ['.jpg','.png','.gif'];
            
        if (!file) { 
            throw new Error ('Falta subir imagen');
        } else { 
            let extensionArchivo = path.extname(file.originalname);
            if (!extensionesAceptadas.includes(extensionArchivo)){
                throw new Error ('Las extensiones de archivo permitidas son ${extensionesAceptadas.join(‘, ’)}');
        };
        }
        return true;
        }),
 ];

 module.exports= validacionesRegistro;