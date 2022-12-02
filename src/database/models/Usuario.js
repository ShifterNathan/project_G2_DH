module.exports = (sequelize, Datatypes) => {
 
    let alias = 'Usuario'; 
    
    let cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
      nombre: {type: Datatypes.STRING(45), allowNull: false},
      apellido: {type: Datatypes.STRING(45), allowNull: false},
      email: {type: Datatypes.STRING(60), allowNull: false},
      clave: {type: Datatypes.STRING(45), allowNull: false},
      direccion: {type: Datatypes.STRING(45), allowNull: false},
      imagen: {type: Datatypes.STRING(45)},
      rol: {type: Datatypes.ENUM('COMUN', 'ADMIN', 'SUPADMIN'), allowNull: false},
      Local_id: {type: Datatypes.INTEGER(11), allowNull: false}
    }
    
    let config = {camelCase: false, timestamps: false};
    
    const Usuario = sequelize.define(alias,cols,config)

    Usuario.associate = function (models){

        Usuario.belongsTo(models.Local, {   
            as: "local", 
            foreignKey: "Local_id"
      });  
           
      Usuario.hasMany(models.Venta, {
            as: "Venta",
            foreignKey: "Usuario_id"
      });   

      Usuario.hasMany(models.Producto, {
        as: "producto_y_rol",
        foreignKey: "rol_id"
      });
   }
   return Usuario;
}
