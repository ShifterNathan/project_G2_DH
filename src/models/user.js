const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, "../data/usuarios.json");
const registeredUsers = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const user = {
    
    findByEmail: function(email){
        let userFound = registeredUsers.find(oneUser => oneUser.email == email)
        return userFound;
    },
    

}

module.exports = user;