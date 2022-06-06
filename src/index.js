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
    // validate user to enter a title
    validate: (enteredTitle) => {
      if (enteredTitle) {
        return true;
      } else {
        return "Please enter a title for your project to continue";
      }
    },
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
    name: "license",
    choices: ["MIT", "GPLv2", "Apache", "GPLv3", "Other"],
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
  {
    message: "E-mail address:",
    type: "input",
    name: "email",
  },
  {
    message: "GitHub profile:",
    type: "input",
    name: "github",
  },
];

// fn to prompt inquirer to generate questions and answers using sync js
const getAnswers = async () => {
  // prompt questions and display answers
  const answers = await inquirer.prompt(questions);
  // return answers
  return answers;
};

// call fn to prompt questions
getAnswers();

const createMarkDown = () => {};
