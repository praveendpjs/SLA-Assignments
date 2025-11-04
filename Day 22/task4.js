class Shape {
    constructor(name) {
        this.name = name
    }
}
class Circle extends Shape {
    constructor(radius) {
        super("Circle"); // Call the parent constructor
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}


const circle = new Circle(5);
console.log(`${circle.name} area: ${circle.area()}`); 