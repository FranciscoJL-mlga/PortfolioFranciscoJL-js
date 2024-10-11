function calcular(){

    //* 1- Captación de datos
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let sumar = document.getElementById("sumar").checked;
    let restar = document.getElementById("restar").checked; 
    let multiplicar = document.getElementById("multiplicar").checked; 
    let dividir = document.getElementById("dividir").checked; 
    let factorial = document.getElementById("factorial").checked; 
    let entero = document.getElementById("entero").checked;
    let decimal = document.getElementById("decimal").checked;
    let suma, resta, multiplicacion, division; // contendrá las operaciones

    let resultado = " ";

    //* 2- Cáculo con switch
    if (!isNaN(n1)||!isNaN(n2)) {
        
        
        if(sumar){
        suma = n1 + n2;
        resultado += "<br>La suma es: " + suma;
        }

        if(restar){
            resta = n1 - n2;
            resultado += "<br>La resta es: " + resta;
        }

        if(multiplicar){
            multiplicacion = n1 * n2;
            resultado += "<br>La multiplicacion es:  " + multiplicacion;
        }

        if(dividir){
            division = n1 / n2;
            resultado += "<br>La division da: " + division;
        }
       
        if(entero){
            let parteEntera = n1.toString().split(".")[0];

            if(undefined==parteEntera){
                parteEntera=0;
            }

                resultado += "<br>La parte entera es: " + parteEntera;
        }
        if(decimal){
            let parteDecimal = n1.toString().split(".")[1];

            if(undefined==parteDecimal){
                parteDecimal=0;
            }
            resultado += "<br>La parte decimal es: " + parteDecimal;
        }
         if(factorial){
            factorial=1;
            while(n1 > 0){
                factorial=n1*factorial;
                n1--;
            }
            resultado += "<br>El factorial da: " + factorial;
        }
            

    

    }else{

        resultado="<span style= 'color:red' >ERROR.Parametros no permitidos, se esperaba un numero </span>";
    }
    //* 3- Mostrar resultado

    document.getElementById("resultado").innerHTML = resultado;
 

    return false ;
}