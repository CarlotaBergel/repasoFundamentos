"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var triangle_1 = require("./triangle");
var point1 = new point_1.Point(23, 34);
var point2 = new point_1.Point(45, 56);
var point3 = new point_1.Point(12, 98);
var myTriangle = new triangle_1.Triangle(point1, point2, point3);
console.log(myTriangle.calculateLengthSides());
