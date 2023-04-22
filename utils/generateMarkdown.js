// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return (`- [License](#license)`)
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return ( 
      `## License
       
        Copyright @ ${license}. All rights reserved.

        Licensed under the ${license} license.`
    )
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Credits](#credits)
  - [Test](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  Install the following dependencies by running the following commands:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Credits
  
  ${data.credits}

  ## Tests

  To perform a test, run the commands below:

  \`\`\`
  ${data.tests}
  \`\`\`

  ## Questions

  For any additional questions, please reach out to the email provided below.

  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
