import { Point } from "./point";

let myPoint = new Point(23,34);
let myPoint2 = new Point(87,27);

console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());
console.log(myPoint.calculateDistance(myPoint2))