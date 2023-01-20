window.addEventListener("load",function(){
    
    let formularioRegistro = document.querySelector("form");

    formularioRegistro.addEventListener("submit", function(evento){

        evento.preventDefault();

        let nombre = document.getElementById("nombreUsuario").value;
        if (nombre==""){
            alert('Ingresa tu nombre');
        } else if (nombre.length<2){
            alert('Debe contener al menos 2 caracteres')
        }

        let apellido = document.getElementById("apellidoUsuario").value;
        if (apellido==""){
            alert("Ingresa tu apellido");
        } else if (nombre.length<2){
            alert('Debe contener al menos 2 caracteres')
        }

        let email = document.getElementById("emailUsuario").value;
        if (email==""){
            alert("Ingresa tu email");
        } // faltaría agregar la parte que valida si es email

        //let emailRegex = "/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i";
        // https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos

        let contraseña = document.getElementById("claveUsuario").value;
        if (contraseña==""){
            alert("Ingresa tu clave");
        } else if (contraseña.length<8){
            alert('Debe contener al menos 8 caracteres')
        }

        let avatar = document.getElementById("avatar").value;
        if (avatar==""){
            alert("Las extensiones de archivo permitidas son: .jpg, .jpeg, .png y .gif");
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
 
