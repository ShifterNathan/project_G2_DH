const fs = require('fs');
const path = require('path');

//const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');
// const tienda = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));



// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {
    
    login: (req, res) => {
        res.render('login')
    },

    registro: (req, res) => {
        res.render('registro')
    }   
}

// ----------  ----------
// Create -  Method to store
store: (req, res) => {
	
    idNuevo=0;

    for (let s of products){
        if (idNuevo<s.id){
            idNuevo=s.id;
        }
    }

    idNuevo++;

    let nombreImagen = req.file.filename;

    let productoNuevo =  {
        id:   idNuevo,
        name: req.body.name ,
        price: req.body.price,
        discount: req.body.discount,
        category: req.body.category,
        description: req.body.description,
        image: nombreImagen
    };

    products.push(productoNuevo);

    fs.writeFileSync(productsFilePath, JSON.stringify(products,null,' '));

    res.redirect('/');
    
},


module.exports = controller;
