class Shape{
    name;
    sides;
    sideLength;

    constructor(name,sides,sideLength)
    {
        this.name=name;
        this.sides=sides;
        this.sideLength=sideLength;
    }
    calcParameter(){
        let parameter = this.sides*this.sideLength;
        return parameter;
    }
       
}
const square = new Shape('Square',4,5);
const triangle = new Shape('Triangle',3,3);
console.log(square);
console.log(square.calcParameter());
console.log(triangle);
console.log(triangle.calcParameter());