class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Logo {
  constructor(shape, letters, letterColor) {
    this.shape = shape;
    this.letters = letters;
    this.letterColor = letterColor;
  }
  render() {
    const logo = `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/200/svg">

      ${this.shape}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.letterColor}>${this.letters}</text>

</svg>`;
  }
}

class Triangle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    const triangle = `<polygon points="150, 18 244, 187 56, 187" fill=${this.shapeColor} />`;
    return triangle;
  }
}

class Circle extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    const circle = `<circle cx="150" cy="100" r="100" fill=${this.shapeColor} />`;
    return circle;
  }
}

class Square extends Shape {
  constructor(shapeColor) {
    super(shapeColor);
  }
  render() {
    const square = `<rect x="75" y="30" rx="5" ry="5" width="150" height="150" fill=${this.shapeColor} />`;
    return square;
  }
}

module.exports = { Triangle, Circle, Square, Logo };
