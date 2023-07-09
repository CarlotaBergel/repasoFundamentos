function evenNumbers(num){

    for( let i = 1; i < num; i++){
        
        if(i % 2 != 0){       
            console.log(i)
        }
    }
}

evenNumbers(10);


function myRever(myArr){
    
    for (let i = myArr.length - 1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    return myArr
}

let myArr1 = ["ordenador","raton", "teclado"];
myRever(myArr1);


function isRainbow(myWords):void{
    
    for(let i = 0; i < myWords.length; i++){
        
        if(myWords[i] == "rojo" || myWords[i] == "naranja"|| myWords[i] == "amarilo" || myWords[i] == "verde"|| myWords[i]== "azul"|| myWords[i]== "violeta"){
            console.log(myWords[i] + ", este color es del arcoiris");
        }else{
            console.log(myWords[i] + ", este color no es del arcoiris");
        }
    }
}

function isRainbow2(myWords):void{
    
    for(let i = 0; i < myWords.length; i++){
        
        switch(myWords[i]){
            case 'rojo':
            case 'naranja':
            case 'amarillo':
            case 'verde':
            case 'azul':
            case 'violeta':
                console.log(myWords[i] + ", este color es del arcoiris");
                break;
            default:
                console.log(myWords[i] + ", este color no es del arcoiris");
                break;
        }
    }
}

let arrColor = ["azul", "verde", "rojo", "negro", "rosa", "naranja", "amarillo", "dorado"]

isRainbow2(arrColor);

function add(myWords){

    let sumaCaracteres = 0;

    for(let i = 0; i < myWords.length; i++){
        sumaCaracteres += myWords[i].length;
    }

    return sumaCaracteres;
}

console.log(add(arrColor));
