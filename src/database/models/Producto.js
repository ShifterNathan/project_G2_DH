module.exports = (sequelize, Datatypes) => {
 
  let alias = 'Producto'; 
    
  let cols = {
    id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
    nombre: {type: Datatypes.STRING(45), allowNull: false},
    precio: {type: Datatypes.DECIMAL(10,0), allowNull: false},
    fecha_creacion: {type: Datatypes.DATE(6), allowNull: false},
    fecha_baja: {type: Datatypes.DATE(6), allowNull: true},
    imagen: {type: Datatypes.STRING(45), allowNull: false},
    Admin_id: {type: Datatypes.ENUM('Común', 'Admin', 'Super Admin'), allowNull: false},
    Categoria_id: {type: Datatypes.INTEGER(11), allowNull: false}
  }
    
  let config = {camelCase: false, timestamps: false};
    
  const Producto = sequelize.define(alias,cols,config)

  Producto.associate = function (models){

    Producto.belongsTo(models.Categoria, {   
      as: "Categoria", 
      foreignKey: "Categoria_id"
    });   

    Producto.belongsTo(models.Usuario, {   
      as: "Usuario", 
      foreignKey: "Admin_id"
    });   
  }

  return Producto;
  
}
