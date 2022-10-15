const fs = require('fs');
const path = require('path');

const tiendaFilePath = path.join(__dirname, '../data/tiendaData.json');
// const tienda = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));

const controller = {
    tienda: (req, res) => {
        //const tienda = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));
        res.render('tienda');
    },

    crear: (req, res) => {
        res.render('tiendaCreateForm');
    }, 

    // ---------- BUSCADOR DE PRODUCTOS EN LA TIENDA ----------
    detalle: (req, res) => {
        let idURL = req.params.id;
        let producto;

        // construir el buscador de productos aquí

        res.render('tiendaDetalle', {productoDetalle: producto});
    },

    

        
}

module.exports = controller;
