window.addEventListener("load",function(){
    
    let formularioLogin = document.querySelector("form");

    formularioLogin.addEventListener("submit", function(evento){

        evento.preventDefault();

        let email = document.getElementById("emailUsuario").value;
        let contraseña = document.getElementById("claveLogin").value;
       
        if ((email=="")&&(contraseña=="")){
            return alert("Ingresa tu email y clave para ingresar");
        }

        if (email==""){
            return alert("Ingresa tu email");
        } 
        
        if (contraseña==""){
            return alert("Ingresa tu clave");
        } 

         

    formularioLogin.submit(Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login exitoso',
        showConfirmButton: false,
        timer: 3000
      }));
    
    // formularioLogin.addEventListener("submit", function(evento){

    //     evento.preventDefault();

    //     let email = document.getElementById("emailUsuario").value;
    //     if (email==""){
    //         alert("Ingresa tu email");
    //     } 
        
    //     let contraseña = document.getElementById("claveLogin").value;
    //     if (contraseña==""){
    //         alert("Ingresa tu clave");
    //     } 

    // formularioLogin.submit(Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Login exitoso',
    //     showConfirmButton: false,
    //     timer: 3000
    //   }));
        
    })    
})
 