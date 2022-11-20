const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const User = require('../models/Users');

// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {
    
    // Vista REGISTRO
    registro: (req, res) => {
        res.render('registro')
    },

    // Procesar el REGISTRO
    procesoRegistro: (req, res) => {
        const resultValidation = validationResult(req);
        
        // Si hay errores de validación en el proceso de registro...
        if (resultValidation.errors.length > 0) {
            return res.render('registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        };     
        
        // Después tengo que hacer una mini-validación previa para que si ese mail ya está en mi DB
        let userInDB = User.findByField('emailUsuario', req.body.emailUsuario);

            // Si el usuario a registrarse ya está en mi DB ... le voy a mostrar el error, porque no puede volver a registrarse
            if(userInDB) {
                return res.render('registro', {
                    errors: {
                        emailUsuario: {msg: 'Éste email ya está registrado'}
                    },
                    oldData: req.body,
                });
            }

            // Si el usuario no está en mi DB... genero y registro la información de ese usuario, para después guardarla en mi DB (por ahora JSON)
            let userToCreate = {
                ...req.body,
                avatar: req.file.filename,
                claveUsuario: bcrypt.hashSync(req.body.claveUsuario, 10)
            }

            let userCreated = User.create(userToCreate);
       
            res.redirect("/usuario/ingreso");        
    },
        
    // Vista LOGIN
    login: (req, res) => {
        res.render('login')
    },

    // Procesar el LOGIN
    procesoLogin: (req, res) => {
        const resultValidationLogin = validationResult(req);
        
        // Si hay errores de validación en el proceso de registro...
        if (resultValidationLogin.errors.length > 0) {
            return res.render('login', {
                errors: resultValidationLogin.mapped(),
                oldData: req.body
            });
        };    

        // Si no hay errores de validación en el login, me fijo si el email que ponen en el login está en mi DB
        let userToLogin = User.findByField("emailUsuario", req.body.emailLogin);
            
            // Si efectivamente quiere entrar alguien que ya tiene un email registrado...
            if(userToLogin){
                let contraseñaCorrecta = bcrypt.compareSync(req.body.claveLogin, userToLogin.claveUsuario);
                if (contraseñaCorrecta) {
                    // La persona ingresó con el email y la contraseña correcta, entonces...
                    delete userToLogin.claveUsuario; // por seguridad que no se guarde la contraseña en memoria del navegador
                    req.session.userLogged = userToLogin; //.userLogged es una propiedad de session donde yo voy a guardar justamente la información de este userToLogin
                    

                    if(req.body.recordame) {
                        res.cookie('emailUsuario', req.body.emailLogin, { maxAge: (1000 * 60) * 60 })
                    }
                
                    return res.redirect('/usuario/perfil');//en el futuro la tenemos que redirigir al perfil del usuario --> (1:02 al del video de 2hs del Módulo 5)
                }
            
                // Si es un usuario que quiere ingresar, pero está poniendo mal su contraseña... 
                return res.render('login', {
                    errors: {
                        emailLogin: {msg: 'Las credenciales son inválidas'},
                        claveLogin: {msg: 'Las credenciales son inválidas'}
                    }
                });
            };

            // Si no se encuentra ese email registrado en nuestra DB...
            return res.render('login', {
                errors: {
                    emailLogin: {msg: 'No se encuentra registrado este email, por favor verificar'}
                }
            });   
    },
    
    
    profile: (req, res) => {
        res.render('userProfile', { user: req.session.userLogged });
    },


    
    logout: (req, res) => {
        res.clearCookie('emailUsuario');
        req.session.destroy();
        res.redirect('/');
    },
}; 


// ********** Exportación del controlador de usuario. No tocar **********
module.exports = controller;


//****const db = require('../database/models');

//const controller ={
  //  index: (req,res)=>

//db.servicio.findAll()
//.then((resultados)=>{
    
  //  let servicios=[];
    //console.log(resultados)

   // for (servicio of servicios){
  //      servicios.push(servicio.nombre);
  //  }
  //  res.render('producto', {Allservicios: servicios})
//});
   // },
//};