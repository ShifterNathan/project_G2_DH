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

    // Method DELETE

destroy : (req, res)=>{
    
    let idProductoNuevo=req.params.id;

    let arregloProducto= products.filter(function(elemento){
        return elemento.id!= idProductoNuevo
    })
    
    fs.writeFileSync(tiendaFilePath,JSON.stringify(arregloProducto,null, " "));

		res.redirect("/tienda");    
}

}

module.exports = controller;
