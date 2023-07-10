import { Point } from "./point";
import { Triangle } from "./triangle";

let point1 = new Point(23,34);
let point2 = new Point(45,56);
let point3 = new Point(12,98);

let myTriangle = new Triangle(point1, point2, point3)

console.log(myTriangle.calculateLengthSides())