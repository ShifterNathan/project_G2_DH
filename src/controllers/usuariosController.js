const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');

const usuariosFilePath = path.join(__dirname, "../data/usuarios.json");
const registroUsuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {
    
    // Vista REGISTRO
    registro: (req, res) => {
        res.render('registro')
    },

    // Procesar el REGISTRO
    procesoRegistro: (req, res) => {

        const resultValidation = validationResult(req);
        
        // Si hay errores en el proceso de registro...
        if (resultValidation.errors.length > 0) {
            return res.render('registro', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })}
        
        // Si no hay errores de validación, registrar el usuario nuevo en el JSON
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
            contraseña: req.body.claveUsuario,
            direccion: req.body.direccionUsuario,
            imagen: avatar
		   };
		
        registroUsuarios.push(usuarioNuevo);

		fs.writeFileSync(usuariosFilePath, JSON.stringify(registroUsuarios, null, " "));

		res.redirect("/");
        }
    },

    // Proceso Login
    procesoLogin: (req, res) => {

    let errors = validationResult (req); 
	
	if (errors.isEmpty()) {
	// primero traigo a los usuarios
	let usuariosJSON = fs.readFileSync('usuarios.json', {encoding: 'utf-8'});
	let usuarios;
	    if (usuariosJSON == '') { 
	        usuarios = [ ];
        } else { 
	        usuarios = JSON.parse (usuariosJSON);
          }

    // empiezo a recorrer a estos usuarios y veo si está el que quiere ingresar
    for (let i=0; i<usuarios.length; i++) {
	    if (usuarios[i].email == req.body.email) { 
            if (bcrypt.compareSync (req.body.password, usuarios[i].password)) {
	            usuarioALoguearse = usuarios[i];
 	            break;
            }
        }
    };
        // Si no está el usuarioALoguearse --> conviene redirigirlo a la vista de registro?
        if (usuarioALoguearse == undefined) {
		    return res.render ('login', {errors: [
			    {msg: "Credenciales inválidas"}
            ]});
        };

    // Para que se mantenga en memoria del navegador (con session)
    req.session.usuarioLogueado = usuarioALoguearse;

    // Si hay errores de base
    } else {
	    return res.render ('login', {errors: errors.errors} );
      }

    res.render ('login'); //¿?
    }
}


// ********** Exportación del controlador de usuario. No tocar **********
module.exports = controller;
