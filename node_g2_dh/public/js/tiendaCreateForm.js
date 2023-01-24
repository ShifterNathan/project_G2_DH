window.addEventListener("load",function(){
    
    let formularioProducto = document.querySelector("#formularioProducto");

    formularioProducto.addEventListener("submit", function(evento){

        evento.preventDefault();

        let nombre = document.getElementById("name").value;
        let precio = document.getElementById("price").value;
        let categoria = document.getElementById("categoriaID").value;
        let imagen = document.getElementById("imagenProducto").value;
        let descripcion = document.getElementById("descripcion").value;
        
        if (nombre==""){
            return alert('Ingresa el nombre del producto');
        } else if (nombre.length<5){
            return alert('Debe contener al menos 5 caracteres')
        }

        if (precio==""){
            return alert("Ingresa el precio correspondiente");
        }

        if (categoria==""){
            return alert("Ingresa la categoria correspondiente");
        }

        if (imagen==""){
            return alert("Las extensiones de archivo permitidas son: .jpg, .jpeg, .png y .gif");
        }

        if (descripcion==""){
            return alert("Ingresar una descripción del nuevo producto");
        } else if (descripcion.length<20){
            return alert('Debe contener al menos 20 caracteres')
        }

        formularioProducto.submit();
        
    })    
})