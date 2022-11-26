const fs = require('fs');
const path = require('path');

const usuariosFilePath = path.join(__dirname, '../data/usuarios.json');


const User = {
    fileName: usuariosFilePath,

    getData: function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    findAll: function() {
        return this.getData();
    },

    generateId: function() {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findByPk: function(id) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },

    findByField: function(field, text) {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] == text);
        return userFound;
    },

    create: function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    }
};


module.exports = User;


// const user = {
    
//     findByEmail: function(email){
//         let userFound = registeredUsers.find(oneUser => oneUser.email == email)
//         return userFound;
//     },
// }

