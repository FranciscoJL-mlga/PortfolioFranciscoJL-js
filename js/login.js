// Función para resetear los mensajes de ayuda



function resetear(elementId) {
    document.getElementById(elementId + "Help").style.visibility = "hidden";
}


// Verificar si el usuario ya ha iniciado sesión
  

if (getCookie("loggedIn")) {
        
    window.location.href="./html/main.html";
}

// Evento de escucha para la validación del formulario
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    
    // Obtener los valores de los campos de nombre y contraseña
    var name = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
  
    // Expresiones regulares para validar el nombre y la contraseña
    var nameRegex = /^[A-Za-z]{3,}$/;
    var passwordRegex = /^((?=.*[a-z])(?=.*[A-Z])(?=.*\d)).{4,15}$/;
  
    // Array para almacenar errores
    var errores = [];

    var usuarios=["paco"]
    var contrasenia=["1234"]

    // Validación del nombre
    if (!usuarios.includes(name) ) {
        document.getElementById("nameHelp").style.visibility = "visible";
        errores.push("error");
    } 
  
    // Validación de la contraseña
    if (!contrasenia.includes(password)) {
       
        errores.push("error");
    } 
    // Si no hay errores, ocultamos el login y mostramos los demás elementos
    if (errores.length == 0) {               
        alert("Login exitoso");

        window.location.href = "./html/main.html";
        setCookie("loggedIn",true,1);
    }else{
        document.getElementById("passHelp").style.visibility = "visible";

    }

});
