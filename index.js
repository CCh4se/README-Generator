const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a title to proceed');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a description of the project',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter the description');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please give the steps on how to install the project',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide the steps of the project to proceed');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide examples on how to use this project',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Enter some examples to proceed to the next question');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license',
        choices: ['MIT','Mozilla Public License 2.0','Apache License 2.0'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of them to proceed');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list how one can contribute to this project',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('enter some examples to proceed');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How can one test the project?',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please list how one can test');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter Github Username',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('please enter your username to continue');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('please input email to proceed');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('Data enetered the to ReadMe');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(userInput => {
      const markdown = generateMarkdown(userInput);
      writeToFile("README.md", markdown);
      console.log("README.md file created successfully!");
    })
    .catch(err => {
      console.log(err);
    });
}

// Function call to initialize app
init();
