const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square, Logo } = require("./lib/shapes");

const questions = [
  {
    type: "maxlength-input",
    message: "What 3 letters do you want in your logo?",
    name: "letters",
    maxLength: 3,
  },
  {
    type: "input",
    message: "What color do you want the letters to be?",
    name: "letterColor",
  },
  {
    type: "list",
    message: "What shape do you want the logo to be?",
    name: "shapes",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "What color do you want the shape to be?",
    name: "shapeColor",
  },
];

function renderLogo(input) {
  const selectedShape = input.shapes;
  const shapeColor = input.shapeColor;
  const letters = input.letters;
  const letterColor = input.letterColor;
  let shape;
  if (selectedShape == "Triangle") {
    shape = new Triangle(shapeColor);
  } else if (selectedShape == "Square") {
    shape = new Square(shapeColor);
  } else {
    shape = new Circle(shapeColor);
  }
  const logo = new Logo(shape, letters, letterColor);

  return logo.render();
}

function init() {
  inquirer.prompt(questions).then((response) => {
    const fileName = "./examples/newLogo.svg";
    const svgCode = renderLogo(response);
    console.log(svgCode);
    fs.writeFile(fileName, svgCode, (err) => {
      err ? console.log(err) : console.log("Success!");
    });
    console.log(fileName);
  });
}

init();
