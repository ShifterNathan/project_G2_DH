const fs = require('fs');
const path = require('path');

const tiendaFilePath = path.join(__dirname, '../data/tiendaData.json');
const tiendaProductos= JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));


// -------------------- EL CONTROLADOR DE TIENDA --------------------
const controller = {

    tienda: (req, res) => {
        //const tienda = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));
        res.render('tienda');
    },

    // ---------- CARGAR PRODUCTOS EN LA TIENDA ----------
    
    crearProducto: (req, res) => {
        res.render('tiendaCreateForm');
    }, 

    guardarProducto: (req, res) => {
        
        let nombreImagen=req.file.filename;

        let productoNuevo = {
			id: (tiendaProductos[tiendaProductos.length-1].id)+1, 
			nombre: req.body.nombre,
			precio: req.body.precio,
			descuento: req.body.descuento,
			categoria: req.body.categoria,
			descripcion: req.body.descripcion,
			imagen: nombreImagen
		   };
		
        tiendaProductos.push(productoNuevo);

        console.log(tiendaProductos)

		fs.writeFileSync(tiendaFilePath, JSON.stringify(tiendaProductos, null, " "));

		res.redirect("/");
    }, 

    // ---------- BUSCADOR DE PRODUCTOS EN LA TIENDA ----------
    detail: (req, res) => {
        let idURL = req.params.id;
        let producto;

        // construir el buscador de productos aquí

        res.render('tiendaDetalle', {productoDetalle: producto});
    },

    

        
}

module.exports = controller;
