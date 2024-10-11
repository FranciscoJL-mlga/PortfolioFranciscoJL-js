"use strict"

function getCookie(name){

    let cookieString =document.cookie.split(";");
    for (let i=0;i<cookieString.length; i++){
        let cookie =cookieString[i].trim().split("=");
        if(decodeURIComponent(cookie[0])==name){
            return decodeURIComponent(cookie[1]);
        }


    }


}