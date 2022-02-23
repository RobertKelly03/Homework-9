const inquirer = require("inquirer");
const fs = require('fs');
const util = require("util");

const generateMarkdown = require('./util/generateMarkdown');



const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
},  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
},  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
},  {
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}]