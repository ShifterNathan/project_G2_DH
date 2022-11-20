const db = require('../database/models');

const controller ={
    index: (req,res)=>{

db.servicio.findAll()
.then((resultados)=>{
    
    let servicios=[];
    //console.log(resultados)

    for (servicio of servicios){
        servicios.push(servicio.nombre);
    }
    res.render('producto', {Allservicios: servicios})
});
    },
};