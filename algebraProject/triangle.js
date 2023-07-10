"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(ver1, ver2, ver3) {
        this.vertex1 = ver1;
        this.vertex2 = ver2;
        this.vertex3 = ver3;
    }
    Triangle.prototype.calculateLengthSides = function () {
        var lados = [];
        var lado1 = this.vertex1.calculateDistance(this.vertex2);
        lados.push(lado1);
        var lado2 = this.vertex1.calculateDistance(this.vertex3);
        lados.push(lado2);
        var lado3 = this.vertex2.calculateDistance(this.vertex3);
        lados.push(lado3);
        return lados;
    };
    return Triangle;
}());
exports.Triangle = Triangle;
