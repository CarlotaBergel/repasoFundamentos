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
    return Point;
}());
exports.Point = Point;
