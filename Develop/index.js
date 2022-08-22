// P A C K A G E S  N E E D E D
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./utils/generateMarkdown.js");

// P R O M P T S  A R R A Y
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter project title",
      // R E S P O N C E  V A L I D A T I O N
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter title to continue!";
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of the project",
      // R E S P O N C E  V A L I D A T I O N
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter a project description to continue!";
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message: "How will you install your app?",
      //validate:
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter installation instructions to continue!";
        }
      },
    },
    {
      type: "input",
      name: "instructions",
      message: "What are the instructions for installing the app?",
    },
    {
      type: "input",
      message: "What are the instructions for using your app?",
      name: "usage",
    },
    {
      type: "checkbox",
      name: "languages",
      message:
        "Which programming languages did you use to build this project? (Select all that apply)",
      choices: [
        "JavaScript",
        "HTML",
        "CSS",
        "ES6",
        "jQuery",
        "Bootstrap",
        "Node",
      ],
    },
    {
      type: "input",
      name: "links",
      message: "Enter the GitHub repository link for the project.",
      // R E S P O N C E  V A L I D A T I O N
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter a link to continue!";
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What type of licensing did you use?",
      choices: ["MIT", "ISC", "Apache", "GNU", "BSD", "N/A"],
      // R E S P O N C E  V A L I D A T I O N
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter a link to continue!";
        }
      },
    },

    {
      type: "input",
      name: "name",
      message: "Enter your name?",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter your name to continue!";
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Must enter username to continue!";
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "phone",
      message: "What is your phone number?",
    },
    {
      type: "input",
      name: "about",
      message: "Provide some info about you:",
    },
  ]);
};

promptUser().then((data) => {
  const pageREADME = generatePage(data);

  fs.writeFile("./README.md", pageREADME, (err) => {
    if (err) throw new Error(err);
    console.log(
      "README has been generated! Go to the README.md file to see results."
    );
  });
});
