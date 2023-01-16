const db = require('../database/models');
const path = require('path');

const controller = {
    usuarios: (req, res) => {
        
        const usersList = [];
        
        db.Usuario.findAll()
        .then((users) => {
            for (u of users) {
                let user = {
                    nombre: u.nombre,
                    apellido: u.apellido,
                    email: u.email,
                    rol: u.rol,
                } 
                usersList.push(user);
            }

            db.Usuario.count()
            .then((total_users) => {
                res.json({
                    descripcion: "Detalle usuarios DogHouse",
                    users: usersList,
                    count: total_users
                }) 
            })
        })
        .catch(err => (console.log(err)))
    },

    usuario: (req, res) => {
        const idUser = req.params.id;
        
        db.Usuario.findOne({where: {id:idUser}})
        .then((user) => {
            let usuarioBuscado = {
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                email: user.email, 
            }
            let urlImagenUsuario = path.join(__dirname,"../../public/img/avatars/",user.imagen)
            
            res.json({
                user: usuarioBuscado,
                urlImagen: urlImagenUsuario
            }) 
        })
        .catch(err => (console.log(err)))
    },

    productos: (req, res) => {
        
        const productsList = [];
        
        db.Producto.findAll({include: [{association: 'Categoria'}]})
        .then((products) => {
            for (x of products) {
                productsList.push(x);
            }

            db.Producto.count()
            .then((total_productos)=> {
                
                db.Producto.count({where:{"Categoria_id":1}})
                .then((total_prod_comida_natural) => {

                    db.Producto.count({where:{"Categoria_id":2}})
                    .then((total_prod_snacks) => {
                        
                        db.Producto.count({where:{"Categoria_id":3}})
                        .then((total_prod_suplementos) => {
                            
                            res.json({
                                descripcion: "Detalle productos DogHouse",
                                products: productsList,
                                count: total_productos,
                                countByCategory: {
                                    category_comida_natural:total_prod_comida_natural,
                                    category_snacks: total_prod_snacks,
                                    category_suplementos:total_prod_suplementos
                                } 
                            })
                        })
                    })
                }) 
            })
        })
        .catch(err => (console.log(err)))
    },

    producto: (req,res) => {
        const idProduct = req.params.id;
        
        db.Producto.findOne({
            where: {id:idProduct},
            include: [{association: 'Usuario'},{association: 'Categoria'}]
        })
        .then((product) => {
            let productoBuscado = {
                id: product.id,
                nombre: product.nombre,
                precio: product.precio,
                descuento: product.precio,
                descripcion: product.descripcion,
                usuario: product.Usuario_id.email,
                categoria: product.Categoria_id.nombre
            }
            let urlImagenProducto = path.join(__dirname,"../../public/img/tiendaProducto/",product.imagen)
            
            res.json({
                product: productoBuscado,
                urlImagen: urlImagenProducto
            }) 
        })
        .catch(err => (console.log(err)))


    }
}

// ********** Exportación del controlador del main. No tocar **********
module.exports = controller;