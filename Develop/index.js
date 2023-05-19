// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
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
        choices: ['MIT','Mozilla Public','None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please select one of them to proceed');
                return false;
            }
        }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
