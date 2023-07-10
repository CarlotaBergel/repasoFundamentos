"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    Point.prototype.distanceTolOrigin = function () {
        var distancia = Math.sqrt((0 - this.x) * (0 - this.x) + (0 - this.y) * (0 - this.y));
        return distancia;
    };
    Point.prototype.calculateDistance = function (anotherPoint) {
        var distancia = Math.sqrt((anotherPoint.getX() - this.x) * (anotherPoint.getX() - this.x) + (anotherPoint.getY() - this.y) * (anotherPoint.getY() - this.y));
        return distancia;
    };
    Point.prototype.calcularQuadrant = function () {
        if (this.x == 0 && this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x > 0 && this.y < 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else {
            return 4;
        }
    };
    Point.prototype.calculateNearest = function (points) {
        var menorDistancia = this.calculateDistance(points[0]);
        var point = points[0];
        for (var i = 1; i < points.length; i++) {
            var distancia = this.calculateDistance(points[i]);
            if (distancia < menorDistancia) {
                menorDistancia = distancia;
                point = points[i];
            }
        }
        return point;
    };
    return Point;
}());
exports.Point = Point;
