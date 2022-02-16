// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
  //return license.prompt()

// TODO: Create a function to generate markdown for README
//function generateReadMe(data) {
  //return `# ${data.title}

//`;
//}

//module.exports = generateMarkdown;


// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle} 👋</h1>
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
 ${answers.contributing}