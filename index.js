//-------------  summary of file:  index.js -------------------------------- // 

    //1. requires for:
        // a) Inquirer
        // b) generateHTML (import of HTML-template)
        // c) genWriteCopyFiles (import of writeFile\copyFile)
    //2. Inquirer prompt functions
        // a) promptUser()
        // b) promptProfile()
    //3. initializes promptUser() function, with promptProfile() nested within

// ------------------------- requires --------------------------------------- //

        const inquirer = require('inquirer');
        // console.log(inquirer);
        const generateHTML = require('./src/HTML-template');
        // const genWriteCopyFiles = require('./utils/generate-HTMLCSS.js');
        const { writeFile, copyFile } = require('./utils/generate-HTMLCSS.js');
                
//-------------------- Inquirer prompt - promptUser() ------------------------- //

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

// --------------------- Inquirer prompt - engineer profile ------------------------------//

        const promptProfile = profileData => {
                    //-- adding the array 
                    if (!profileData.profiles) {
                        profileData.profiles = [];
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
                                    .then(engData => {
                                        profileData.profiles.push(engData);
                                        if (engData.confirmAddEngineer) {
                                        return promptProfile(profileData);
                                        } else {
                                        return profileData;
                                        }
                                    });                
                };               


// --------------------- Inquirer prompt - intern profile ------------------------------//

const promptInternProfile = profileData => {
    //-- adding the array 
    if (!profileInternData.profiles) {
        profileInternData.profiles = [];
    }
        console.log(`
        _______________________

        Create an intern profile:
        _______________________
        `);
            return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: 'Intern name?',
                        //--validation
                        validate: nameInput => {
                            if (nameInput) {
                            return true;
                            } else {
                            console.log('You left the selection blank. Please enter the intern name:');
                            return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'internID',
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
                        name: 'internEmail',
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
                        name: 'gitHubInternUserName',
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
                        name: 'confirmAddIntern',
                        message: 'Would you like to enter in profile information for another intern?',
                        default: false
                    }                                     
            ])
                    .then(internData => {
                        profileInternData.profiles.push(internData);
                        if (internData.confirmAddintern) {
                        return promptInternProfile(profileInternData);
                        } else {
                        return profileInternData;
                        }
                    });                
};               



// -- initialize promptUser() code -- with promptProfile() array nested, in prompt Promise chain  -- //

                promptUser()
                .then(promptProfile)
                .then(profileData => {
                    return generateHTML(profileData);
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
                //catch for errors
                .catch(err => {
                    console.log(err);
                });

            