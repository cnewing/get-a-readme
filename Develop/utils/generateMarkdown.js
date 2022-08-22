// TODO: Create a function that returns a license badge based on which license is passed in

const { link } = require("fs");

// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ### ${data.description}

  ## Tools:
  *${data.languages}

  ## How to Install ${data.title}:
  ${data.installation}

  ## Instructions on Installation:
  ${data.instructions}

  ## How to Use the App
  ${data.usage}

  ## Licences:
  ###${data.license}

  ## Need More Info?

  ### Visit the repository with the link below
  ### ${data.links}

  ## Created By ${data.name}
  ### About ${data.name}:
  ${data.about}.

  ## Questions?
  You can find this project on GitHub here: https://github.com/${data.github}/ . Any further questions can be sent to the creator directly through email or phone.
*${data.email}
*${data.phone}
`;
}

module.exports = generateMarkdown;
