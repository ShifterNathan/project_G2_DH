const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");
const registroUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
const user = require ('../models/user')

// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {
    
    // Vista REGISTRO
    registro: (req, res) => {
        res.render('registro')
    },

    // Procesar el REGISTRO
    procesoRegistro: (req, res) => {

        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
            return res.render('registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        else {
	
        let idUsuarioNuevo;
        
        if (registroUsuarios.length > 0){
            idUsuarioNuevo = (registroUsuarios[registroUsuarios.length-1].id)+1;    
        } else {
            idUsuarioNuevo = 1;
        };

        let avatar = req.file.filename;
        
        let usuarioNuevo = {
			id: idUsuarioNuevo, 
			nombre: req.body.nombreUsuario,
			apellido: req.body.apellidoUsuario,
            telefono:req.body.telefonoUsuario,
			email: req.body.emailUsuario,
            contraseña: bcrypt.hashSync(req.body.claveUsuario, 10),
            direccion: req.body.direccionUsuario,
            imagen: avatar
		   };
		
        registroUsuarios.push(usuarioNuevo);

		fs.writeFileSync(usuariosFilePath, JSON.stringify(registroUsuarios, null, " "));

		res.redirect("/");
        }
    },

    login: (req, res) => {
        res.render('login')
    },

    // Proceso Login
    loginProcess: (req, res) => {

    const resultValidation = validationResult(req);

    let errors = validationResult (req); 

    if (resultValidation.errors.length > 0) {
        return res.render('login', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }
	
        else {
        // primero traigo a los usuarios
            let userToLogin = user.findByEmail(req.body.email);
            if (userToLogin) {
                let isOkThePassword = bcrypt.compareSync(req.body.password, userToLogin.contraseña);
                if (isOkThePassword) {
                    res.send('Ok puedes ingresar');
                }
            }

            
        } 
    }
}


// ********** Exportación del controlador de usuario. No tocar **********
module.exports = controller;
