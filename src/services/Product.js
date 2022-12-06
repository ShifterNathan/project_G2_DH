const db = require("../database/models/Producto")

const Product = {

    save: async(req, res) => {

        await db.Producto.create (
        {
			nombre: req.body.nombre,
			precio: req.body.precio,
			descuento: req.body.descuento,
			categoria: req.body.categoria,
			descripcion: req.body.descripcion,
			imagen: req.file.filename
        }).then((resultados) => {
			res.redirect('/tienda');
		}).catch(err => {res.send(err)})
    }
    
}

module.exports = Product;
