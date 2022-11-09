const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");
const registroUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {


    // Guardar un usuario nuevo en JSON
    registro: (req, res) => {
	
        let idUsuarioNuevo;
        
        if (registroUsuarios.length > 0){
            idUsuarioNuevo = (registroUsuarios[registroUsuarios.length-1].id)+1;    
        } else {
            idUsuarioNuevo = 1;
        };
        
        let usuarioNuevo = {
			id: idUsuarioNuevo, 
			//nombre: req.body.registerName,
			//apellido: req.body.registerSurname,
			email: req.body.email,
            //telefono: req.body.registerContactNumber,
            //direccion: req.body.registerAdress,
			contraseña: req.body.password
		   };
		
        registroUsuarios.push(usuarioNuevo);

		fs.writeFileSync(usuariosFilePath, JSON.stringify(registroUsuarios, null, " "));

		res.redirect("/");
    } 
}

// ********** Exportación del controlador de usuario. No tocar **********
module.exports = controller;
