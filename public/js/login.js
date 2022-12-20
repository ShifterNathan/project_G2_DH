window.addEventListener("load",function(){
    
    let formularioLogin = document.querySelector("form");

    formularioLogin.addEventListener("submit", function(evento){

        evento.preventDefault();

        let email = document.getElementById("emailUsuario").value;
        if (email==""){
            alert("Ingresa tu email");
        } // faltaría agregar la parte que valida si es email

        //let emailRegex = "/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i";
        // https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
        
        let contraseña = document.getElementById("claveLogin").value;
        if (contraseña==""){
            alert("Ingresa tu clave");
        } 

    formularioLogin.submit();
        
    })    
})
 