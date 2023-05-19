
function renderLicenseBadge(license) {
  if (license) {
    return '[![License](https://img.shields.io/badge/License-{license}-brightgreen)]'
  } else {
    return '';
  }
};
function renderLicenseLink(license) {
  if (license) {
    return 'https://choosealicense.com/licenses/mpl-2.0/','https://choosealicense.com/licenses/mit/','https://choosealicense.com/licenses/apache-2.0/';
  } else {
    return '';
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return 
  }
};
function generateMarkdown(data) {
  return `# ${data.title}

  ## License: [![License](https://img.shields.io/badge/License-{license}-brightgreen)](https://shields.io)


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Information](#contact-info)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Contact Information
  Github: ${data.github}(https://github.com/${data.github})
  Email: [${data.email}](mailto:${data.email})
  `;
};
module.exports = generateMarkdown;
