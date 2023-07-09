function zodiac(day,month){
    let signoZodiaco = "";

    if((month == 3 && day >= 21) || (month == 4 && day <= 19)){
        signoZodiaco = "aries";
    }
    
   if((month == 4 && day >= 20) || (month == 5 && day <= 20)){
        signoZodiaco = "Tauro";
    }
    
    if((month == 5 && day >= 21) || (month == 6 && day <= 20)){
        signoZodiaco = "Geminis";
    }

    if((month == 6 && day >= 21) || (month == 7 && day <= 22)){
        signoZodiaco = "Cancer";
    }

    if((month == 7 && day >= 23) || (month == 8 && day <= 22)){
        signoZodiaco = "Leo";
    }
    
    if((month == 8 && day >= 23) || (month == 9 && day <= 22)){
        signoZodiaco = "Virgo";
    }

    if((month == 9 && day >= 23) || (month == 10 && day <= 22)){
        signoZodiaco = "Libra";
    }

    if((month == 10 && day >= 23) || (month == 11 && day <= 21)){
        signoZodiaco = "Escorpio";
    }

    if((month == 11 && day >= 22) || (month == 12 && day <= 21)){
        signoZodiaco = "Sagitario";
    }

    if((month == 12 && day >= 22) || (month == 1 && day <= 19)){
        signoZodiaco = "Capricornio";
    }

    if((month == 1 && day >= 20) || (month == 2 && day <= 18)){
        signoZodiaco = "Acuario";
    }

    if((month == 2 && day >= 19) || (month == 3 && day <= 20)){
        signoZodiaco = "Piscis";
    }
    
    return signoZodiaco;
}

console.log(zodiac(24,11));

function continent(country){
    let continente;

    switch(country){
        case "Japon":
        case "China":
        case "Indonesia":
        case "India":
        case "Singapur":
        continente = "Asia";
        break;

        case "Estados Unidos":
        case "Canadá":
        case "México":
        case "Brasil":
        case "Argentina":
        continente = "América";
        break;

        case "Marruecos":
        case "Tanzania":
        case "Sudán":
        case "Kenia":
        case "Nigeria":
        continente = "África";
        break;

        case "España":
        case "Italia":
        case "Alemania":
        case "Francia":
        case "Grecia":
        continente = "Europa";
        break;

        case "Australia":
        case "Papua Nueva Guinea":
        case "Fiyi":
        case "Nueva Zelanda":
        case "Tonga":
        continente = "Oceanía";
        break;
    }
    return continente
}

console.log(continent("Nueva Zelanda"))


function isEven(n){

    let mensaje;
    if(n%2==0){       
       mensaje = "El número es par";
    
    }else{        
        mensaje = "El número es impar";
    }
    
    return mensaje

}

console.log(isEven(6));