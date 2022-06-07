//IMPORTS
// import inquirer into file
const inquirer = require("inquirer");
// import file system module into application
const fs = require("fs");
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
    choices: ["MIT", "GPLv2", "Apache", "GPLv3"],
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
    message: "GitHub profile username:",
    type: "input",
    name: "github",
  },
];

// fn to create the read me mark down
const createMarkDownTemplate = (answers) => {
  // use answers to template string into read me mark down
  const readMeTemplate = `# Project Title ![${answers.license}]("https://img.shields.io/badge/${answers.license}-License-green")
  
  ## Table of Contents
        - [Description](#description)
        - [Installation](#installation)
        - [Usage](#usage)
        - [License](#license)
        - [Contributing](#contributing)
        - [Tests](#tests)
        - [Questions](#questions)

  ## Description

  ${answers.description}

  ## Installation

  \`\`\`

  ${answers.installation}

  \`\`\`


  ## Usage

  \`\`\`

  ${answers.usage}

   \`\`\`

  ## License

  ${answers.license} License

  ## Contributing

  ${answers.contributions}

  ## Tests

  \`\`\`

  ${answers.test}

  \`\`\`

  ## Questions

  Please contact me on my email: ${answers.email}

  Visit my GitHub profile [here](https://github.com/${answers.github})`;
  return readMeTemplate;
};

// fn to prompt inquirer to generate questions and answers using sync js
const getAnswers = async () => {
  // prompt questions and display answers
  const answers = await inquirer.prompt(questions);
  // declare a variable to store answers
  const readMeAnswers = await createMarkDownTemplate(answers);
  // write to read to file section to create read me after user inputs
  writeToReadMeFile(readMeAnswers);
};

// call fn to prompt questions
getAnswers();

// fn to write to readme markdown file
const writeToReadMeFile = (data) => {
  try {
    // write data to file
    fs.writeFileSync("./generated-readme.md", data);
    // display an error message if unable to write file
  } catch (error) {
    console.log(error.message);
  }
};
