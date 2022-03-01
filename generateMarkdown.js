// TODO: Create a function that returns a license badge based on which license is passed in
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
  return `# Title: ${data.projectTitle}\n Description:${data.description}\n Instalation:${data.installation}\n Project Usage:${data.usage}\n Licence:${data.licence}\n Contributors:${data.contributing}\n Tests: ${data.tests}\n Questions: ${data.questions}\n Username: ${data.username}\n Email: ${data.email}\n

`;
}

module.exports = generateMarkdown;
