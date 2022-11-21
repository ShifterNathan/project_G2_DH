module.exports = function UsersData(sequelize, Datatypes){
 
    let alias = 'Usuario'; 
    
    let cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
      nombre: {type: Datatypes.STRING(45), allowNull: false},
      apellido: {type: Datatypes.STRING(45), allowNull: false},
      email: {type: Datatypes.STRING(60), allowNull: false},
      clave: {type: Datatypes.STRING(45), allowNull: false},
      direccion: {type: Datatypes.STRING(45), allowNull: false},
      imagen: {type: Datatypes.STRING(45)},
      rol: {type: Datatypes.ENUM('Común', 'Admin', 'Super Admin'), allowNull: false},
      Local_id: {type: Datatypes.INTEGER(11), allowNull: false}
    }
    
    let config = {camelCase: false, timestamps: false};
    
    const Users = sequelize.define(alias,cols,config)

    Users.associate = function (models){

       Users.belongsTo(models.Local, {   
            as: "local", 
            foreignKey: "Local_id"
           });   
   }
   return Users;
}
