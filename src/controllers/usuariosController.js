const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');
const usuariosNuevo = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));

// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {
    
    login: (req, res) => {
        res.render('login')
    },

    registro: (req, res) => {
        res.render('registro')
    },

    // Guardar un usuario nuevo en JSON
    guardarUsuarioNuevo: (req, res) => {
	
        let nombreImagen = req.file.filename;
        let idProductoNuevo;
        
        if (tiendaProductos.length > 0){
            idProductoNuevo = (tiendaProductos[tiendaProductos.length-1].id)+1;    
        } else {
            idProductoNuevo = 1;
        }
        
        let productoNuevo = {
			id: idProductoNuevo, 
			nombre: req.body.nombre,
			precio: req.body.precio,
			descuento: req.body.descuento,
			categoria: req.body.categoria,
			descripcion: req.body.descripcion,
			imagen: nombreImagen
		   };
		
        tiendaProductos.push(productoNuevo);

		fs.writeFileSync(tiendaFilePath, JSON.stringify(tiendaProductos, null, " "));

		res.redirect("/");
    }, 

    }; 

// ********** Exportación del controlador de usuario. No tocar **********
module.exports = controller;
