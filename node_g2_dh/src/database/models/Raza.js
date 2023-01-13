

module.exports = function LocalData(sequelize, Datatypes){
 
    let alias = 'Raza'; 
    
    let cols = {
      id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
      nombre: {type: Datatypes.STRING(45), allowNull: false},
    }
    
    let config = {camelCase: false, timestamps: false};
    
    const Raza = sequelize.define(alias,cols,config)
    
    Raza.associate = function (models){

        Raza.hasMany(models.Animal, {
           as: "Animal",
           foreignKey: "Raza_id"
            });
   }
   return Raza;
}

