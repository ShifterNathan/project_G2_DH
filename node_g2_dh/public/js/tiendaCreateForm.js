window.addEventListener("load",function(){
    
    let formularioProducto = document.querySelector("#formularioProducto");

    formularioProducto.addEventListener("submit", function(evento){

        evento.preventDefault();

        let nombre = document.getElementById("name").value;
        if (nombre==""){
            alert('Ingresa el nombre del producto');
        } else if (nombre.length<5){
            alert('Debe contener al menos 5 caracteres')
        }

        let precio = document.getElementById("price").value;
        if (precio==""){
            alert("Ingresa el precio correspondiente");
        }

        let categoria = document.getElementById("categoriaID").value;
        if (categoria==""){
            alert("Ingresa la categoria correspondiente");
        }

        let imagen = document.getElementById("imagenProducto").value;
        if (imagen==""){
            alert("Las extensiones de archivo permitidas son: .jpg, .jpeg, .png y .gif");
        }

        let descripcion = document.getElementById("descripcion").value;
        if (descripcion==""){
            alert("Ingresar una descripción del nuevo producto");
        } else if (descripcion.length<20){
            alert('Debe contener al menos 20 caracteres')
        }

        formularioProducto.submit();
        
    })    
})