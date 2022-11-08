const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");
const registroUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {

    registro: (req, res) => {
        res.render('registro')
    },

    // Guardar un usuario nuevo en JSON
    guardarUsuarioNuevo: (req, res) => {

        let errors = validationResult(req);
        console.log("errors ", errors); //no sé si esto hace falta o era de prueba

        if (errors.isEmpty()) {
	
        let idUsuarioNuevo;
        
        if (registroUsuarios.length > 0){
            idUsuarioNuevo = (registroUsuarios[registroUsuarios.length-1].id)+1;    
        } else {
            idUsuarioNuevo = 1;
        };
        
        let usuarioNuevo = {
			id: idUsuarioNuevo, 
			nombre: req.body.registerName,
			apellido: req.body.registerSurname,
			email: req.body.registerEmail,
            telefono: req.body.registerContactNumber,
            direccion: req.body.registerAdress,
			contraseña: req.body.registerPassword
		   };
		
        registroUsuarios.push(usuarioNuevo);

		fs.writeFileSync(usuariosFilePath, JSON.stringify(registroUsuarios, null, " "));

		res.redirect("/");
        }

        else {
            res.render('registro', {errors: errors.array()});
        } 
    } 
}

// ********** Exportación del controlador de usuario. No tocar **********
module.exports = controller;
