const fs = require('fs');
const path = require('path');



const usuariosFilePath = path.join(__dirname, '../data/usuariosData.json');
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));



// -------------------- CONTROLADOR USUARIOS --------------------

const controller = {
    
    login: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        res.render('login', {usuarios: usuarios})
    },

    registro: (req, res) => {
        const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, 'utf-8'));
        res.render('registro',{usuarios: usuarios})
    }   
}

// ----------  ----------
// Create -  Guarda las imagenes del perro
store: (req, res) => {
	
    idNuevo=0;

    for (let s of usuarios){
        if (idNuevo<s.id){
            idNuevo=s.id;
        }
    }

    idNuevo++;

    let nombreImagen = req.file.filename;

    // Create -  Guarda los datos del usuario?

    let usuarioNuevo =  {
        id:   (usuarios[usuarios.length-1].id)+1, 
        name: req.body.registerName ,
        apellido: req.body.registerLastName ,
        password: req.body.password,
        email: req.body.mail,
    };

    usuarios.push(usuarioNuevo);

    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios,null,' '));

    res.redirect('/');
    
},







module.exports = controller;
