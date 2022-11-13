const fs = require('fs');

const path = require('path');
const {validationResult} = require('express-validator');

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

        let errors = validationResult(req);
        
        // Si el proceso de registro sale bien...
        if (errors.isEmpty()) { // if (errors.errors.length>0)...
	
        let idUsuarioNuevo;
        
        if (registroUsuarios.length > 0){
            idUsuarioNuevo = (registroUsuarios[registroUsuarios.length-1].id)+1;    
        } else {
            idUsuarioNuevo = 1;
        };

        //let avatar = req.file.filename;
        
        let usuarioNuevo = {
			id: idUsuarioNuevo, 
			nombre: req.body.nombreUsuario,
			apellido: req.body.apellidoUsuario,
            telefono:req.body.telefonoUsuario,
			email: req.body.emailUsuario,
            contraseña: req.body.claveUsuario,
            direccion: req.body.direccionUsuario,
            //imagen: avatar
		   };
		
        registroUsuarios.push(usuarioNuevo);

		fs.writeFileSync(usuariosFilePath, JSON.stringify(registroUsuarios, null, " "));

		res.redirect("/");
        }

        // Si el proceso de registro sale mal, pasale los errores como 2do parámetro...
        else {
            res.render('registro', {errors: 
                errors.mapped(), // errors es un array que tiene varias cosas, justamente el método mapped lo convierte a un objeto literal
                oldData: req.body // para la persistencia de los datos del formulario 
            });     
        }; 
    },
    
    // Vista LOGIN
    login: (req, res) => {
        res.render('...') //falta completar vista
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
