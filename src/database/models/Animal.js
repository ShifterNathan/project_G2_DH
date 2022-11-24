

module.exports = (sequelize, Datatypes) => {

    let alias = 'Animal'; 

        let cols = {
        id: {type: Datatypes.INTEGER(11), primaryKey: true, autoIncrement: true, allowNull: false},
        genero: {type: Datatypes.STRING(20), allowNull: false},
        activo: {type: Datatypes.TINYINT(1), allowNull: false},
        peso: {type: Datatypes.DECIMAL(100), allowNull: false},
        Raza_id: {type: Datatypes.INTEGER(11), allowNull: false},
        edad: {type: Datatypes.STRING(30), allowNull: false},
        Servicio_id: {type: Datatypes.INTEGER(11), allowNull: false},
      }

      let config = {camelCase: false, timestamps: false};

      const Animal = sequelize.define(alias,cols,config)
    
        Animal.associate = function (models){
    
            Animal.belongsTo(models.Raza, {   
                as: "raza", 
                foreignKey: "Raza_id"
               })
               
    /*           Animal.belongsTo(models.Servicio, {   
                as: "servicio", 
                foreignKey: "Servicio_id"
               })

                */
                  
       }

      
       return Animal;
    }

   