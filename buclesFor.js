"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
function evenNumbers(num) {
    for (var i = 1; i < num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}
evenNumbers(10);
function myRever(myArr) {
    for (var i = myArr.length - 1; i >= 0; i--) {
        console.log(myArr[i]);
    }
    return myArr;
}
var myArr1 = ["ordenador", "raton", "teclado"];
myRever(myArr1);
function isRainbow(myWords) {
    for (var i = 0; i < myWords.length; i++) {
        if (myWords[i] == "rojo" || myWords[i] == "naranja" || myWords[i] == "amarilo" || myWords[i] == "verde" || myWords[i] == "azul" || myWords[i] == "violeta") {
            console.log(myWords[i] + ", este color es del arcoiris");
        }
        else {
            console.log(myWords[i] + ", este color no es del arcoiris");
        }
    }
}
function isRainbow2(myWords) {
    for (var i = 0; i < myWords.length; i++) {
        switch (myWords[i]) {
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
var arrColor = ["azul", "verde", "rojo", "negro", "rosa", "naranja", "amarillo", "dorado"];
isRainbow2(arrColor);
function add(myWords) {
    var sumaCaracteres = 0;
    for (var i = 0; i < myWords.length; i++) {
        sumaCaracteres += myWords[i].length;
    }
    return sumaCaracteres;
}
exports.add = add;
console.log(add(arrColor));
