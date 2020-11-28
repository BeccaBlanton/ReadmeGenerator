/*GIVEN a command-line application that accepts user input
√WHEN I am prompted for information about my application repository
√THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
√WHEN I enter my project title
√√THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
√THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
√WHEN I enter my GitHub username
√THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
√WHEN I enter my email address
√THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
√WHEN I click on the links in the Table of Contents
√THEN I am taken to the corresponding section of the README*/
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');


inquirer
  .prompt([
    {
      type: 'input',
      message: "What's the name of your project?",
      name: 'title',
    },
    {
      type: 'input',
      message: "Provide Description of Project",
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Instructions for Installation',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Enter Instructions for Usage',
        name: 'Usage',
      },
      {
        type: 'input',
        message: 'Enter guidelines for contributing',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter Instructions for Testing',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Choose Which License',
        name: 'license',
        choices: ['MIT','Creative Commons',"Apache License 2.0",'BSD' ]
      },
      {
        type: 'input',
        message: 'Enter Github Username',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter email address',
        name: 'email',
      },
  ])

  .then((response)=> {
    console.log(response)
    let licenseBadge = ""
    if(response.license === "MIT"){
        licenseBadge = `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(response.license === "Creative Commons"){
        licenseBadge = `[![License](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else if(response.license === "Apache License 2.0"){
     licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    
    }else {
    licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    }
    const readMe = `
# ${response.title}
${licenseBadge}
    
## Table of Contents
==================
* [Description](#Description) 
* [Installation](#Installation)
* [Usage](#Usage) 
* [Contributing](#contributing) 
* [Test](#testing)
* [license](#license) 
* [Questions](#Questions)

==================
    
## Description
    
${response.description}
    
## Installation
    
${response.install}
    
## Usage

${response.usage}
    
## Contributing

${response.contribution}

## Testing

${response.test}

### license

${response.license}

### Questions
    
[Link to GitHub Profile](https://github/${response.github})
If you have any questions please contact at [${response.email}](${response.email})`

    fs.writeFile('README.md', readMe, (err) => err ? console.log(err) : console.log('yay'))

    })