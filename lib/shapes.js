//Creating the class for the shape
class Shape {
//creating and initializing an object instance of Shape
    constructor() {
        this.color = "";
    }
    applyColor(svgColor) {
        this.color = (svgColor);
    }
};
//Creating the Triangle class as a child of the Shape class
class Triangle extends Shape {
//render will show the returned code describing what the triangle will be like 
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`
        
    }
};
class Square extends Shape {
    render() {
        return `<rect x="50" y="10" height="200" width="200" fill="${this.color}"/>`
    }
};
class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
};

module.exports = {Triangle, Square, Circle};