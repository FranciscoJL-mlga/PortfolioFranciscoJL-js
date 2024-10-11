

document.getElementById("binario").addEventListener("click", () => {
    let n1 = document.getElementById("numero1").value;  // Obtiene el valor como cadena
    let decimal = parseInt(n1);  // Convierte el valor a número entero

    if (!isNaN(decimal)) {  // Verifica si es un número válido
        let resultado = decimal.toString(2);  // Convierte el número decimal a binario
        document.getElementById("resultado").innerHTML = resultado;  // Muestra el resultado
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido";  // Manejo de error
    }
});




document.getElementById("octal").addEventListener("click", () => {
    let n1 = document.getElementById("numero1").value;  // Obtiene el valor como cadena
    let decimal = parseInt(n1);  // Convierte el valor a número entero

    if (!isNaN(decimal)) {  // Verifica si es un número válido
        let resultado = decimal.toString(8);  // Convierte el número decimal a binario
        document.getElementById("resultado").innerHTML = resultado;  // Muestra el resultado
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido";  // Manejo de error
    }
});



document.getElementById("hexadecimal").addEventListener("click", () => {
    let n1 = document.getElementById("numero1").value;  
    let decimal = parseInt(n1);  

    if (!isNaN(decimal)) {  
        let resultado = decimal.toString(16).toUpperCase();  // Convierte el número decimal a hexadecimal
        document.getElementById("resultado").innerHTML = resultado;  // Muestra el resultado
    } else {
        document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido";  // Manejo de error
    }
});
/*      document.getElementById("restar").checked; 
    let hexadecimal = document.getElementById("hexadecimal").checked; 
     */


   /*  if(binario){
            
    }

    if(octal){
            resta = n1 - n2;
            resultado += "<br>La resta es: " + resta;
    }

    if(hexadecimal){
            multiplicacion = n1 * n2;
            resultado += "<br>La multiplicacion es:  " + multiplicacion;
    } */

