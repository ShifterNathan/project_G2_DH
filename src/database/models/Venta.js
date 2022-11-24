module.exports = (sequelize, Datatypes) => {
 
    let alias = 'Venta'; 
    
   let cols = {
    id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
    cantidad: {type: Datatypes.TINYINT(255), allowNull: false},//TINYINT(255) en mysql???
    monto_unitario: {type: Datatypes.DECIMAL(10,0), allowNull: false},
    Usuario_id: {type: Datatypes.INTEGER(11), allowNull: false},
    Detalle_venta_id: {type: Datatypes.INTEGER(11), allowNull: false},
    Producto_id: {type: Datatypes.INTEGER(11), allowNull: false}
    }
     
    let config = {camelCase: false, timestamps: false};
    
    const Venta = sequelize.define(alias,cols,config)

    Venta.associate = function (models){

       //Venta.belongsTo(models.Usuario, {   
         //   as: "usuario", 
         //   foreignKey: "Usuario_id"
         //  })
           
       //Venta.belongsTo(models.Detalle_venta, {   
         //   as: "detalle_venta", 
         //   foreignKey: "Detalle_venta_id"/

      //  })          

        }
           
    return Venta;

}


// Venta.belongsTo(models.Producto, {   
        //   as: "producto", 
         //   foreignKey: "Producto_id"
    //});       
       