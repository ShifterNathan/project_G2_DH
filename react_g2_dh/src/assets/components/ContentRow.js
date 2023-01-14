import React from 'react';
import { useState, useRef } from 'react';

 function ContentRow() {

  const estado = useState ([{titulo: "Cantidad total de productos en tienda", valor: 0},{titulo: "Cantidad categorías DogHouse", valor: 0}]);
  //const valoresEstado = estado[0];
  //const setEstado = estado[1];

  let actualizar = () => {  
  fetch('http://localhost:3001/api/productos')
  .then((response) => response.json())
  .then((data) => console.log(data))
  //setEstado([{valor: data[0].population},{valor: 5}]));
  }

  console.log(actualizar())

//   useEffect( () => { 
//     alert( "ingrese" ); 
//   }, [] )   

//   const isFirstRun = useRef(true);
  
//   useEffect( () => { 
//     if (isFirstRun.current) {
//       isFirstRun.current = false;
//       return;
//     }
//     alert( "cambie el arreglo!" ); 
//     console.log(titulo.current.innerHTML="Terminamos el curso!");
//   }, [valoresEstado] )   


//   useEffect( () => { return () => 
//     { console.log( "fui destruido" );   } 
//   }, [] ) 

  
const titulo = useRef();  // en esta variable se almacena un objeto con la propiedad current
  
    return (
    <div>
       {/* <!-- Título --> */}
       <div className="d-sm-flex align-items-center justify-content-between mb-4">
           <h1 className="h3 mb-0 text-gray-800">DogHouse Dashboard</h1>
       </div>
    
       {/* <!-- Content Row --> */}
       <div className="row">

           {/* <!-- 1er tarjetita: cantidad total de productos en tienda DogHouse --> */}
           <div className="col-md-4 mb-4">
               <div className="card border-left-primary shadow h-100 py-2">
                   <div className="card-body">
                       <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                               <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Cantidad total de productos</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">2</div>
                           </div>
                           <div className="col-auto">
                               <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           {/* <!-- $$$ of all products in DB --> */}
           <div className="col-md-4 mb-4">
               <div className="card border-left-success shadow h-100 py-2">
                   <div className="card-body">
                       <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                               <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">$546.456</div>
                           </div>
                           <div className="col-auto">
                               <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           {/* <!-- Amount of users in DB --> */}
           <div className="col-md-4 mb-4">
               <div className="card border-left-warning shadow h-100 py-2">
                   <div className="card-body">
                       <div className="row no-gutters align-items-center">
                           <div className="col mr-2">
                               <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
                               </div>
                               <div className="h5 mb-0 font-weight-bold text-gray-800">38</div>
                           </div>
                           <div className="col-auto">
                               <i className="fas fa-user-check fa-2x text-gray-300"></i>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       </div>
      );
  
}

export default ContentRow;