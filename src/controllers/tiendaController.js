const fs = require('fs');
const path = require('path');

const tiendaFilePath = path.join(__dirname, '../data/tiendaData.json');
const tiendaProductos = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));


// -------------------- EL CONTROLADOR DE TIENDA --------------------
const controller = {

    tienda: (req, res) => {
        const tiendaProductos = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));
        res.render('tienda', {productos: tiendaProductos, user: req.session.userLogged });
    },

    // ---------- CARGAR PRODUCTOS EN LA TIENDA ----------
    
    crearProducto: (req, res) => {
        res.render('formulario');
    }, 

    formulario: (req, res) => {
        res.render('formulario');
    }, 

    guardarProducto: (req, res) => {
        
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

		res.redirect("/tienda");
    }, 

    // ---------- BUSCADOR DE PRODUCTOS EN LA TIENDA ----------
    detalleProducto: (req, res) => {

        let idURL = req.params.id;
        let producto;

		for (let x of tiendaProductos) {
			if (idURL == x.id) {
				producto = x;
				break;
			}
		};

        res.render('tiendaDetalle', {productoDetalle: producto});
    },


    editar: (req, res) => {

		let id = req.params.id;
		let productoEncontrado;

		for (let p of tiendaProductos){
			if (id == p.id){
				productoEncontrado = p;
			}
		}
		res.render('tiendaEditForm',{ProductoaEditar: productoEncontrado});
	},

    actualizar: (req, res) => {

        console.log(req.file)
        let id = req.params.id;
        let nombreImagen = req.file.filename;

		for (let p of tiendaProductos){
			if (id == p.id){
				p.nombre = req.body.nombre;
                p.precio = req.body.precio;
                p.descuento = req.body.descuento;
                p.categoria = req.body.categoria;
				p.descripcion = req.body.descripcion;
				p.imagen = nombreImagen;
				break;
			}
		}
		fs.writeFileSync(tiendaFilePath, JSON.stringify(tiendaProductos, null, ' '));
		res.redirect('/tienda');
    },

    
    destroy : (req, res) => {

    let idProductoNuevo = req.params.id;

    let arregloProducto = tiendaProductos.filter(function(elemento){
        return elemento.id != idProductoNuevo
    })

    fs.writeFileSync(tiendaFilePath, JSON.stringify(arregloProducto,null, " "));
	res.redirect("/tienda");   

    }

}

// ********** Exportación del controlador de la tienda. No tocar **********
module.exports = controller;
