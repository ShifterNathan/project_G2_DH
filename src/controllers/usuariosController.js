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

        let errors = validationResult(req);
        console.log("errors ", errors); //no sé si esto hace falta o era de prueba
        
        // Si el proceso de registro sale bien...
        if (errors.isEmpty()) {
	
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
        // Si el proceso de registro sale mal, pasale los errores como 2do parámetro...
        else {
            res.render('registro', {errors: errors.array()});
        } 
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
