class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    get area() {
        return this.calculateArea();
    }

    calculateArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10);
console.log(square);
