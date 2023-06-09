// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name for your app?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Tell us about your app:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What dependencies do we need to install?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Who should use this repo?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this repo have?',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'GNU AGPLv3', 'Apache License 2.0', 'None']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who helped contribute to this repo?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
        default: 'node index.js'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            fs.writeFile('dist/README.md', generateMarkdown(answers), err => {
                if (err) return console.error(err);

                console.log('README generated successfully...');
            });
            console.log(generateMarkdown(answers));
        });
}

// Function call to initialize app
init();
