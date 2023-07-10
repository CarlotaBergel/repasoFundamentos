export class Point{
    private x: number;
    private y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    getx(): number{
        return this.x;
    }
    setx(x: number):void{
        this.x = x;
    }
    gety(): number{
        return this.y;
    }
    sety(y: number):void{
        this.y = y;
    }

    toString() {
        return "("+ this.x +", "+ this.y + ")"
    }
}