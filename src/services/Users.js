const fs = require('fs');
const path = require('path');

const db = require('../database/models');

const User = {

    findAll: async function(req,res) {
        await db.Usuario
        .findAll()
        .then((users) => {return allUsers = users})
        .catch(err => {res.send(err)})
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    // findByPk: async (req,res) {
    //     await db.Usuario
    //     .findAll()
    //     .then((users) => {return allUsers = users})
    //     .catch(err => {res.send(err)})
    // },

    // profile: (req, res) => {
    //     db.Usuario.findByPk(id)
    //     .then((resultado) => {
    //     console.log(resultado)
    //     });
    // },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound;
    },

//     db.Usuario.findOne({where:{nombre: "John"}})
// .then((resultado) => {
//     console.log(resultado)
// });

    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            ...userData
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    }

    // create: async(req, res) => {

    //     await db.Usuario.create (
    //     {
	// 		nombre: req.body.nombreUsuario,
	// 		apellido: req.body.apellidoUsuario,
	// 		email: req.body.emailUsuario,
	// 		clave: req.body.claveUsuario,
	// 		direccion: req.body.direccionUsuario,
	// 		imagen: req.file.filename,
    //      rol: req.body.rol --> ¿CÓMO DEBERÍA HACERSE?

    //     }).then((resultados) => {
	// 		res.redirect('/usuario/perfil');

	// 	    }).catch(err => {res.send(err)})
    // },
};


module.exports = User;


// const user = {
    
//     findByEmail: function(email){
//         let userFound = registeredUsers.find(oneUser => oneUser.email == email)
//         return userFound;
//     },
// }

// SERVICES - USERS VIEJO
// const fs = require('fs');
// const path = require('path');

// const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');

// const User = {
//     fileName: usuariosFilePath,

//     getData: function() {
//         return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
//     },

//     findAll: function() {
//         return this.getData();
//     },

//     generateId: function() {
//         let allUsers = this.findAll();
//         let lastUser = allUsers.pop();
//         if(lastUser) {
//             return lastUser.id + 1;
//         }
//         return 1;
//     },

//     findByPk: function(id) {
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser.id === id);
//         return userFound;
//     },

//     findByField: function(field, text) {
//         let allUsers = this.findAll();
//         let userFound = allUsers.find(oneUser => oneUser[field] == text);
//         return userFound;
//     },

//     create: function(userData) {
//         let allUsers = this.findAll();
//         let newUser = {
//             id: this.generateId(),
//             ...userData
//         };
//         allUsers.push(newUser);
//         fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
//         return newUser;
//     }
// };

// module.exports = User;

