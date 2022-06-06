//IMPORTS
// import inquirer into file
const inquirer = require("inquirer");
const { async } = require("rxjs");

// DECLARATIONS
// question object array
const questions = [
  {
    message: "Please enter a title for your project",
    type: "input",
    name: "title",
  },
  {
    message: "Please enter a description for your project",
    type: "input",
    name: "description",
  },
  {
    message: "Please enter the installation instructions for your project",
    type: "input",
    name: "installation",
  },
  {
    message: "Please enter the usage information for your project",
    type: "input",
    name: "usage",
  },
  {
    message: "Please select a license from the options below",
    type: "list",
    choices: [
      "MIT license",
      "GPLv2 license",
      "Apache license",
      "GPLv3 license",
      "Other license",
    ],
    name: "license",
  },
  {
    message: "Please enter the contribution guidelines your project",
    type: "input",
    name: "contributions",
  },
  {
    message: "Please enter your project test instructions:",
    type: "input",
    name: "test",
  },
];

// fn to get answers using js sync
const getAnswers = async () => {
  // display answers
  const answers = await inquirer.prompt(questions);

  console.log(answers);
};

// call fn to get answers
getAnswers();
