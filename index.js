//summary of file: index.js
    //1. requires for:
        // a) Inquirer
        // b) generatePage (import of HTML-template)
        // c) generateSite (import of writeFile\copyFile)
    //2. Inquirer promptUser() function
    //3. initializes promptUser() function
// ------------------------------------------------------------------ //

// requires
       const inquirer = require('inquirer');
    // console.log(inquirer);
       const generatePage = require('./src/HTML-template');
    // const generateSite = require('./utils/generate-HTMLCSS.js');
       const { writeFile, copyFile } = require('./utils/generate-HTMLCSS.js');
            
// -- wrap the inquirer.prompt() inside a promptUser function
        // --- profile questions
        const promptUser = () => {
            return inquirer.prompt([

                //question 1, with validation: manager's name
                {
                    type: 'input',
                    name: 'managerName', //name
                    message: 'Team manager name?',
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
                
                 //question 2, what is the manager's employeeID
                {
                    type: 'input',
                    name: 'employeeID', //github
                    message: 'Team manager employee ID?',
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('EmployeeID cannot be blank. Please the manager employee ID:');
                          return false;
                        }
                      }
                },
                //question 3, what is the manager's email address
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'Team manager email address?',
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('Please enter an email address:');
                          return false;
                        }
                      }
                },
                //question 4, what is the manager's office telephone number
                {
                    type: 'input',
                    name: 'managerNumber',
                    message: 'Team manager telephone number?',
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('Please enter an telephone address:');
                          return false;
                        }
                      }
                },                                                        
                ]);
            };

        // promptUser().then(answers => console.log(answers));
                //--function expression with an array
                const promptProfile = portfolioData => {
                    //-- adding the array 
                    if (!portfolioData.projects) {
                        portfolioData.projects = [];
                    }
                        console.log(`
                        _______________________

                        Create another profile:
                        _______________________
                        `);
                            return inquirer.prompt([
                                    {
                                        type: 'input',
                                        name: 'engineerName',
                                        message: 'Engineer name?',
                                        //--validation
                                        validate: nameInput => {
                                            if (nameInput) {
                                            return true;
                                            } else {
                                            console.log('You left the selection blank. Please enter the engineer name:');
                                            return false;
                                            }
                                        }
                                    },
                                    {
                                        type: 'input',
                                        name: 'engineerID',
                                        message: 'Enter the Employee ID:',
                                        //--validation
                                        validate: nameInput => {
                                            if (nameInput) {
                                            return true;
                                            } else {
                                            console.log('EmployeeID cannot be blank. Please the employee ID:');
                                            return false;
                                            }
                                        }
                                    },
                                    {
                                        type: 'input',
                                        name: 'engineerEmail',
                                        message: 'Enter their email address:',
                                        //--validation
                                        validate: nameInput => {
                                            if (nameInput) {
                                            return true;
                                            } else {
                                            console.log('Email cannot be blank. Please enter the email address:');
                                            return false;
                                            }
                                        }
                                    },                                    
                                    {
                                        type: 'input',
                                        name: 'gitHubUserName',
                                        message: 'Enter the GitHub username:',
                                        //--validation
                                        validate: nameInput => {
                                            if (nameInput) {
                                            return true;
                                            } else {
                                            console.log('GitHub username cannot be blank. Please enter GitHub username:');
                                            return false;
                                            }
                                        }
                                    },           
                                    {
                                        type: 'confirm',
                                        name: 'confirmAddEngineer',
                                        message: 'Would you like to enter in profile information for another engineer?',
                                        default: false
                                    }                                     
                            ])
                                    .then(projectData => {
                                        portfolioData.projects.push(projectData);
                                        if (projectData.confirmAddEngineer) {
                                        return promptProfile(portfolioData);
                                        } else {
                                        return portfolioData;
                                        }
                                    });                
                };

// -- updated - promptUser code --  update the Inquirer prompt Promise chain -- 

                promptUser()
                .then(promptProfile)
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

            