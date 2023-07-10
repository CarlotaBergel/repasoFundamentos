export class Point{
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    getX(): number{
        return this.x;
    }
    setX(x: number):void{
        this.x = x;
    }
    getY(): number{
        return this.y;
    }
    setY(y: number):void{
        this.y = y;
    }

    toString() {
        return "("+ this.x +", "+ this.y + ")"
    }
    
    distanceTolOrigin() {
        let distancia = Math.sqrt((0-this.x)*(0-this.x)+(0-this.y)*(0-this.y)); 
        return distancia;
    }

    calculateDistance(anotherPoint:Point) {
        let distancia = Math.sqrt((anotherPoint.getX()-this.x)*(anotherPoint.getX()-this.x)+(anotherPoint.getY()-this.y)*(anotherPoint.getY()-this.y)); 
        return distancia;
    }

    calcularQuadrant(){
        
        if(this.x == 0 && this.y == 0){
            return 0;
        }else if(this.x > 0 && this.y > 0){
            return 1;
        }else if(this.x > 0 && this.y < 0){
            return 2;
        }else if(this.x < 0 && this.y < 0){
            return 3;
        }else{
            return 4;
        }
    }

    calculateNearest(points: Point[]):Point{
        let menorDistancia = this.calculateDistance(points[0]);
        let point = points[0];
        
        for(let i = 1; i < points.length; i++){
            let distancia = this.calculateDistance(points[i]);

            if(distancia < menorDistancia){
                menorDistancia = distancia;
                point = points[i];
            }
        }
        return point;
    }
}
