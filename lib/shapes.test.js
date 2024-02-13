const { Triangle, Circle, Square, Logo } = require("./shapes.js");
describe("Triangle", () => {
  it('should return a string including fill="blue"', () => {
    const triangle = new Triangle("blue");
    expect(triangle.render()).toEqual(
      '<polygon points="150, 18 244, 187 56, 187" fill="blue" />'
    );
  });
});

describe("Circle", () => {
  it('should return a string including fill="red"', () => {
    const circle = new Circle("red");
    expect(circle.render()).toEqual(
      '<circle cx="150" cy="100" r="100" fill="red" />'
    );
  });
});

describe("Square", () => {
  it('should return a string including fill="purple"', () => {
    const square = new Square("purple");
    expect(square.render()).toEqual(
      '<rect x="75" y="30" rx="5" ry="5" width="150" height="150" fill="purple" />'
    );
  });
});

describe("Logo", () => {
  it("should return an xml string including passed in shape triangle, letters EEE, and letter color brown", () => {
    const logo = new Logo(
      `<polygon points="150, 18 244, 187 56, 187" fill="orange" />`,
      "EEE",
      "brown"
    );
    expect(logo.render()).toEqual(
      `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/200/svg">

      <polygon points="150, 18 244, 187 56, 187" fill="orange" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="brown">EEE</text>

</svg>`
    );
  });
});
// const logo = new Logo();
// logo.render("Square", "PCP", "Green");
// expect(logo.render()).toEqual(
//   `<svg version="1.1"
//       width="300" height="200"
//       xmlns="http://www.w3.org/200/svg">

//     <rect x="75" y="30" rx="5" ry="5" width="150" height="150" fill="green"/>

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PCP</text>

// </svg>`
// );
