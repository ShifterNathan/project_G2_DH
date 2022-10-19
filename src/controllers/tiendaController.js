const fs = require('fs');
const path = require('path');

const tiendaFilePath = path.join(__dirname, '../data/tiendaData.json');
const tiendaProductos = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));

// -------------------- EL CONTROLADOR DE TIENDA --------------------
const controller = {

    tienda: (req, res) => {
        const tiendaProductos = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));
        res.render('tienda', {productos: tiendaProductos});
    },

    // ---------- CARGAR PRODUCTOS EN LA TIENDA ----------
    
    crearProducto: (req, res) => {
        res.render('tiendaCreateForm');
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
//Delete -Delete one product 

<<<<<<< HEAD
destroy : (req, res)=>{
    
    let idProductoNuevo=req.params.id;

    let arregloProducto= products.filter(function(elemento){
        return elemento.id!= idProductoNuevo
    })
    
    fs.writeFileSync(tiendaFilePath, JSON.stringify(arregloProducto,null, " "));

		res.redirect("/tienda");    
}
=======
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
    }
>>>>>>> 2ff2c2686acf76219f2efa813494f9b8fe8c06de

}

module.exports = controller;
