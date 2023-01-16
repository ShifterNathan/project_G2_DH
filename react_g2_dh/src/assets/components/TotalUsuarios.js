import React from 'react';
import { useState, useEffect, useRef } from 'react';

function TotalUsuarios() {

const estado = useState ([
    {titulo: "Cantidad total de usuarios DogHouse", valor: 0},
    ]);
const valoresEstado = estado[0];
const setEstado = estado[1];

let actualizarUsuarios = () => {  
    fetch('http://localhost:3005/api/usuarios')
    .then((response) => response.json())
    .then((data) => setEstado([
        {valor: data.count},
    ]));
}

// useEffect( () => { 
//     alert( "ingrese" ); 
// }, [] )   

// const isFirstRun = useRef(true);
  
// useEffect( () => { 
//     if (isFirstRun.current) {
//     isFirstRun.current = false;
//     return;
//     }
//     alert( "cambie el arreglo!" ); 
//     console.log(titulo.current.innerHTML="Terminamos el curso!");
// }, [valoresEstado] )   

// useEffect( () => { return () => 
//     {console.log( "fui destruido" );   } 
// }, [] ) 

// const titulo = useRef();  // en esta variable se almacena un objeto con la propiedad current
  
return (
    <div>
           <div className="col-md-4 mb-4">
               <div className="card border-left-primary shadow h-100 py-2">
                   <div className="card-body">
                       <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                               <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" onMouseOver={actualizarUsuarios}> Cantidad total de usuarios</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">{valoresEstado[0].valor}</div>
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

export default TotalUsuarios;