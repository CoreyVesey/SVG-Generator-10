//Importing Triangle, Square, and Circle from shapes js
const {Triangle, Square, Circle} = require("./lib/shapes");
//Importing Inquirer and fs which I npm installed to make command line interfaces and create files
const inquirer = require("inquirer");
const fs = require("fs");
const validateColor = require("validate-color").default;
//Using inquirer to create the command line interface questions
function questions() {
inquirer
    .prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to three characters to include.",
        //function to validate that the user put in an input of 3 or less otherwise the user cant continue in the prompt
        validate: function(value) {
            if(value.length > 3) {
                return "Please enter 3 characters or less"
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword or a hexadecimal number for the TEXT color.",
        validate: function(value) {
            if(value === "") {
                return "Please enter a valid color keyword or a hexadecimal number"
            } else {
            return true;
            }
        }
    },
    {
        type: "list",
        name: "shape",
        message: "Select which shape you would like for your SVG.",
        choices: ["Triangle", "Square", "Circle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword or a hexadecimal number for the SHAPE color.",
        validate: function(value) {
            if(value === "") {
                return "Please enter a valid color keyword or a hexadecimal number"
            } else {
            return true;
            }
        }
    }
])
.then((answers) => {
  writeFile("logo.svg", answers);
})
};
questions();
function writeFile(fileName, answers) {
  svgDimensions = "";
  svgDimensions = "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='200'>";
  let svg;
  if (answers.shape ==="Circle") {
    svg = new Circle();
    svg.applyColor(answers.shapeColor);
    svgDimensions += svg.render();
  } else if (answers.shape === "Square") {
    svg = new Square();
    svg.applyColor(answers.shapeColor);
    svgDimensions += svg.render();
  } else {
    svg = new Triangle();
    svg.applyColor(answers.shapeColor);
    svgDimensions += svg.render();
  }
  svgDimensions += `<text x="150" y="125" text-anchor="middle" font-size="60" fill="${answers.textColor}">${answers.text}</text>`;
  svgDimensions += "</svg>";
  fs.writeFile(fileName, svgDimensions, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
}
