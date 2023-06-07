//Importing Triangle, Square, and Circle from shapes js
const {Triangle, Square, Circle} = require("./shapes");
//Triangle Test--- const to make a new triangle, applying color green, and setting the expectations of matching the parameters of Triangle
describe("Triangle", () => {
  test("green triangle test", () => {
    const shape = new Triangle();
    shape.applyColor("green");
    expect(shape.render()).toEqual(`<polygon points="150,18 244,182 56,182" fill="${this.color}"/>`)
  })
});
//Square Test
describe("Square", () => {
  test("blue square test", () => {
    const shape = new Square();
    shape.applyColor("blue");
    expect(shape.render()).toEqual(`<rect height="200" width="200" fill="${this.color}"/>`)
  })
});
//Circle Test
describe("Circle", () => {
  test("red circle test", () => {
    const shape = new Circle();
    shape.applyColor("red");
    expect(shape.render()).toEqual(`<circle cx="200" cy="200" r="100" fill="${this.color}"/>`)
  })
});