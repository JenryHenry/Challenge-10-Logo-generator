const { Triangle, Circle, Square, Logo } = require("./shapes.js");

const triangle = new Triangle();
triangle.render("blue");
expect(triangle.render()).toEqual(
  '<polygon points="150, 18 244, 187 56, 187" fill="blue" />'
);

const circle = new Circle();
circle.render("red");
expect(circle.render()).toEqual(
  '<circle cx="150" cy="100" r="100" fill="red" />'
);

const square = new Square();
square.render("green");
expect(square.render()).toEqual(
  '<rect x="75" y="30" rx="5" ry="5" width="150" height="150" fill="green"/>'
);

const logo = new Logo();
logo.render("Square", "PCP", "Green");
expect(logo.render()).toEqual(
  `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/200/svg">

    <rect x="75" y="30" rx="5" ry="5" width="150" height="150" fill="green"/>

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">PCP</text>

</svg>`
);
