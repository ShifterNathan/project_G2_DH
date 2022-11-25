module.exports = (sequelize, Datatypes) => {
 
  let alias = 'Producto'; 
    
  let cols = {
    id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
    nombre: {type: Datatypes.STRING(45), allowNull: false},
    precio: {type: Datatypes.DECIMAL(10,0), allowNull: false},
    fecha_creacion: {type: Datatypes.DATE(6), allowNull: false},
    fecha_baja: {type: Datatypes.DATE(6), allowNull: true},
    imagen: {type: Datatypes.STRING(45), allowNull: false},
    rol_id: {type: Datatypes.INTEGER(2), allowNull: false},
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
      foreignKey: "rol_id"
    });   

    Producto.hasMany(models.Venta, {
      as: "Venta",
      foreignKey: "Producto_id"
    });

  }

  return Producto;
  
}
