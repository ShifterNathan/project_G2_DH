window.addEventListener("load",function(){
    
    let formularioRegistro = document.querySelector("form");

    formularioRegistro.addEventListener("submit", function(evento){

        evento.preventDefault();

        let nombre = document.getElementById("nombreUsuario").value;
        if (nombre==""){
            return alert('Ingresa tu nombre');
        } else if (nombre.length<2){
            return alert('Debe contener al menos 2 caracteres')
        }

        let apellido = document.getElementById("apellidoUsuario").value;
        if (apellido==""){
            return alert("Ingresa tu apellido");
        } else if (nombre.length<2){
            return alert('Debe contener al menos 2 caracteres')
        }

        let email = document.getElementById("emailUsuario").value;
        if (email==""){
            return alert("Ingresa tu email");
        } 

        let contraseña = document.getElementById("claveUsuario").value;
        if (contraseña==""){
            return alert("Ingresa tu clave");
        } else if (contraseña.length<8){
            return alert('Debe contener al menos 8 caracteres')
        }

        let avatar = document.getElementById("avatar").value;
        if (avatar==""){
            return alert("Las extensiones de archivo permitidas son: .jpg, .jpeg, .png y .gif");
        }

    formularioRegistro.submit(Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Qué alegria! Ya sos parte de DogHouse',
        showConfirmButton: false,
        timer: 1500
      }));
        
    })    
})
 
