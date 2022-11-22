const { DataTypes } = require("sequelize");

function mydbData(sequelize,DataTypes){
    let a = 'servicio';
    let c = {
        id:{type: Datatypes.INTEGER, primarykey:true, autoIncrement: true},
        nombre:{type: Datatypes.STRING(500)},
        precio:{type: Datatypes.DECIMAL(10,0)}
}
    let cg = {camelCase: false, timestamps: false};

    const servicios = sequelize.define(a,c,cg)

    return servicios;
}

module.exports = mydbData;
