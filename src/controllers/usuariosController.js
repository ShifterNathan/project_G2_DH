const fs = require('fs');
const path = require('path');

//const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');
// const tienda = JSON.parse(fs.readFileSync(tiendaFilePath, 'utf-8'));

const controller = {
    
    login: (req, res) => {
        res.render('login')
    },

    registro: (req, res) => {
        res.render('registro')
    }   
}

module.exports = controller;
