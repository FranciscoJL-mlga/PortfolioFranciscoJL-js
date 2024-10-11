"use strict"

const boton = document.getElementById("boton");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", mostrar);

function checkLoginStatus() {
    const loginStatus = getCookie("loggedIn");
    console.log("Login status:", loginStatus);
    if (!loginStatus) {
        eraseCookie("loggedIn") ;
        console.log("No se ha encontrado la cookie. Redirigiendo al login.") ;
        setTimeout(() => {
            window.location.href = "../login.html" ;
        }, 100);
    }
}
setInterval(checkLoginStatus, 5) ;