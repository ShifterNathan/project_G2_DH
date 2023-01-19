import React from 'react';
import { useState, useEffect, useRef } from 'react';

function TotalCategorias() {

const estado = useState ([
    {titulo: "Cantidad productos por categoría",
    subtitulo1: "Categoria: packs comida natural", 
    valor_cat_comida_natural: 0,
    subtitulo2: "Categoria: snacks",
    valor_cat_snacks: 0,
    subtitulo3: "Categoria: suplementos",
    valor_cat_suplementos: 0,
    },
    ]);
const valoresEstado = estado[0];
const setEstado = estado[1];

let actualizar = () => {  
    fetch('http://localhost:3005/api/productos')
    .then((response) => response.json())
    .then((data) => setEstado([
        {titulo: "Cantidad productos por categoría",
        subtitulo1: "Categoria: packs comida natural", 
        valor_cat_comida_natural: data.countByCategory.category_comida_natural,
        subtitulo2: "Categoria: snacks",
        valor_cat_snacks: data.countByCategory.category_snacks,
        subtitulo3: "Categoria: suplementos",
        valor_cat_suplementos: data.countByCategory.category_suplementos,
        }
    ]));
}

return (
    <div>
           <div className="col-md-4 mb-4 h-40">
               <div className="card border-left-primary shadow h-100 py-2">
                   <div className="card-body">
                       <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                               <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" onMouseOver={actualizar}> {valoresEstado[0].titulo} </div>
                               <br></br>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].subtitulo1}</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].valor_cat_comida_natural}</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].subtitulo2}</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].valor_cat_snacks}</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].subtitulo3}</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].valor_cat_suplementos}</div>
                           </div>
                           <div className="col-auto">
                               <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
      );
}

export default TotalCategorias;