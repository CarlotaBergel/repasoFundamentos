"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var condicionales_1 = require("./condicionales");
var buclesFor_1 = require("./buclesFor");
var arr1 = ["casa", "coche", "ciudad", "cesta"];
var arr2 = ["barco", " baca", "bicicleta", "balon", "bisiesto", "brasil"];
var arr3 = ["venezuela", "veneno", "voltaje"];
var numeroCaracteresArr1 = (0, buclesFor_1.add)(arr1);
console.log((0, condicionales_1.isEven)(numeroCaracteresArr1));
