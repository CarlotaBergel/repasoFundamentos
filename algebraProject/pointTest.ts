import { Point } from "./point";

let myPoint = new Point(23,34);
let myPoint2 = new Point(87,27);
let myPoint3 = new Point(13,15);
let myPoint4 = new Point(98,24);

let arrPoint = [myPoint2, myPoint3, myPoint4];

console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());
console.log(myPoint.calculateDistance(myPoint2));
console.log(myPoint2.calcularQuadrant());

let pointCercano = myPoint.calculateNearest(arrPoint);
console.log(pointCercano.toString());