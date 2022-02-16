const inquirer = require('inquirer');
const fs = require('fs');
const genereateMarkdown = require('./utils/generateMarkdown.js');
const { type } = require('os');
console.log("Welcome to my README generator")
console.log("Answer the following questions to generate a high quality README for your project")

const questions = []
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_Input +> {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }

        }

    },

    {
        type: 'checkbox',
        name: 'licence',
        message: 'Choose a license that will best suit your project.',
        choices: ['MPL 2.0', 'GNU', 'Apache ', 'MIT', 'None of the above'],
        validate: your_licence => {
            if (your_licence) {
                return true;
            } else {
                console.log('Select a licence for the project.');
                return false;
            }
        }
    }

    {
        type: 'input',
        name: 'contribution'
    }









    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => {
            if (err) {
                return console.log(err);

            }
            console.log("success ")
        })
    }