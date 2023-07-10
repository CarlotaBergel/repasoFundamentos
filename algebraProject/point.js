"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getx = function () {
        return this.x;
    };
    Point.prototype.setx = function (x) {
        this.x = x;
    };
    Point.prototype.gety = function () {
        return this.y;
    };
    Point.prototype.sety = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    return Point;
}());
exports.Point = Point;
