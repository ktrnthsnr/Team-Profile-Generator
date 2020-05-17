//summary of file: index.js
    //1. requires for:
        // a) Inquirer
        // b) generatePage (import of page-template)
        // c) generateSite (import of writeFile\copyFile)
    //2. Inquirer promptUser() function
    //3. initializes promptUser() function
// ------------------------------------------------------------------ //

// requires
const inquirer = require('inquirer');
// console.log(inquirer);
   const generatePage = require('./src/page-template');
// const generateSite = require('./utils/generate-site.js');
   const { writeFile, copyFile } = require('./utils/generate-site.js');
        
// -- wrap the inquirer.prompt() inside a promptUser function
    // --- profile questions
    const promptUser = () => {
        return inquirer.prompt([

            //first question, with validation: manager's name
            {
                type: 'input',
                name: 'managerName', //name
                message: 'What is the team manager name?',
                //added validation
                validate: nameInput => {
                  if (nameInput) {
                    return true;
                  } else {
                    console.log('Name cannot be empty. Please enter a manager name:');
                    return false;
                  }
                }
              },                            
            
             //second question, what is the manager's employeeID
            {
                type: 'input',
                name: 'employeeID', //github
                message: 'What is the manager employee ID?',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('EmployeeID cannot be empty. Please the manager employee ID:');
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the team manager email address?',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter an email address:');
                      return false;
                    }
                  }
            },

            // -- confirm
            {
                type: 'confirm',
                name: 'confirmAbout',
                message: 'Would you like to enter some information about yourself for an "About" section?',
                default: true
              },
              {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:',
                when: ({ confirmAbout }) => confirmAbout
              }
               
            ]);
        };

    // promptUser().then(answers => console.log(answers));
            //--function expression with an array
            const promptProject = portfolioData => {
                //-- adding the array 
                if (!portfolioData.projects) {
                    portfolioData.projects = [];
                }
                    console.log(`
                    _______________________

                    Add a New Employee
                   ________________________
                    `);
                        return inquirer.prompt([
                                {
                                    type: 'input',
                                    name: 'name',
                                    message: 'What is the name of your project?',
                                    //--validation
                                    validate: nameInput => {
                                        if (nameInput) {
                                        return true;
                                        } else {
                                        console.log('Please enter your project name.');
                                        return false;
                                        }
                                    }
                                },
                                {
                                    type: 'input',
                                    name: 'description',
                                    message: 'Provide a description of the project (Required)',
                                    //--validation
                                    validate: nameInput => {
                                        if (nameInput) {
                                        return true;
                                        } else {
                                        console.log('Please enter a project description!');
                                        return false;
                                        }
                                    }
                                },
                                {
                                    type: 'checkbox',
                                    name: 'languages',
                                    message: 'What did you use for this project? (Check all that apply)',
                                    choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
                                },
                                {
                                    type: 'input',
                                    name: 'link',
                                    message: 'Enter the GitHub link to your project. (Required)',
                                    //--validation
                                    validate: nameInput => {
                                        if (nameInput) {
                                        return true;
                                        } else {
                                        console.log('Please enter the GitHub link to your project!');
                                        return false;
                                        }
                                    }
                                },
                                {
                                    type: 'confirm',
                                    name: 'feature',
                                    message: 'Would you like to feature this project?',
                                    default: false
                                },
                                {
                                    type: 'confirm',
                                    name: 'confirmAddProject',
                                    message: 'Would you like to enter another project?',
                                    default: false
                                }
                        ])
                                .then(projectData => {
                                    portfolioData.projects.push(projectData);
                                    if (projectData.confirmAddProject) {
                                    return promptProject(portfolioData);
                                    } else {
                                    return portfolioData;
                                    }
                                });                
            };

// -- updated - promptUser code --  update the Inquirer prompt Promise chain -- 

            promptUser()
            .then(promptProject)
            .then(portfolioData => {
                return generatePage(portfolioData);
            })
            .then(pageHTML => {
            return writeFile(pageHTML);
            })
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log(copyFileResponse);
            })
            .catch(err => {
                console.log(err);
            });

        