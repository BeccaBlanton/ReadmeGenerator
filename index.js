
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');

function generateReadme(){
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
* [Testing](#testing)
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

This application is covered under the ${response.license} License. Please see any additional files in GitHub for details. 

### Questions

If you have any questions please contact at [${response.email}](${response.email})

[Link to GitHub Profile](https://github.com/${response.github})

`

    fs.writeFile('README.md', readMe, (err) => err ? console.log(err) : console.log('yay'))

    })
}
generateReadme()