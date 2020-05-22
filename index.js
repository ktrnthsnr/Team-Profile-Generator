//-------------  summary of file:  index.js -------------------------------- // 

    //1. requires for:
        // a) Inquirer
        // b) generateHTML (import of HTML-template)
        // c) genWriteCopyFiles (import of writeFile\copyFile)
    //2. Inquirer prompt functions
        // a) promptUser()
        // b) promptProfile()
    //3. initializes promptUser() function, with promptProfile() nested within

// ------ requires - import modules ---------------------------------------------------------//

        const inquirer = require('inquirer');
        const Engineer = require('./lib/Engineer');
        console.log(inquirer);
        const generateHTML = require('./src/HTML-template');
        // const genWriteCopyFiles = require('./utils/generate-HTMLCSS.js');
        const { writeFile, copyFile } = require('./utils/generate-HTMLCSS.js');
                
//-----'Manager' profile, define the code, with an Inquirer prompt function --------//

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
                } 
                        ,
                        {
                            type: 'list',
                            name: 'choiceInternEngineer',
                            message: 'For your next profile, select either engineer or intern:',
                            choices: ['engineer', 'intern'],
                            // default: 'engineer'
                        }                                                                     
            ])
            ;

                        // .then( answers => {
                        //     if (answers.choiceInternEngineer == 'engineer') {                                                                       
                        //         return promptProfile;
                        //     } else {
                        //         return promptInternProfile;
                        //     }                
                        // });

        };

// ------ 'Engineer' profile, define the code, with an Inquirer prompt function --------- //

        const promptProfile = profileData => {
                        console.log(profileData)
                    //-- adding the array 
                    if (!profileData.profiles) {
                        profileData.profiles = [];
                    }
                        console.log(`
                        ___________________________

                        Create an engineer profile:
                        ___________________________
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
                                        message: 'Would you like to enter in the profile information for another engineer?',
                                        default: false
                                    }                                     
                            ])
                                    .then(engData => {
                                        //end engineer loop if default false, ie. no
                                        console.log(engData, "Completed adding engineer profiles.")
                                        // TODO make actual engineer object
                                        const engineer = new Engineer(engData.engineerName, engData.engineerID, engData.engineerEmail, engData.gitHubUserName);
                                        profileData.profiles.push(engineer);
                                        if (engData.confirmAddEngineer) {
                                            console.log(engData, "You're done with engineering profiles.")
                                            // exit engineer loop if default false, ie. no                                                        
                                            return promptProfile(profileData);                                           
                                        } else {
                                            // start engineer loop again if true, ie. yes
                                            return profileData;
                                        }
                                    });
                };               


// --- 'Intern' profile, define the code, with an Inquirer prompt function--------- //

const promptInternProfile = profileInternData => {
    //-- adding the array 
    if (!profileInternData.iprofiles) {
        profileInternData.iprofiles = [];
    }
        console.log(`
        _________________________

        Create an intern profile:
        _________________________
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
                        name: 'schoolInternUserName',
                        message: 'Enter the school name:',
                        //--validation
                        validate: nameInput => {
                            if (nameInput) {
                            return true;
                            } else {
                            console.log('School name cannot be blank. Please enter the univerity name:');
                            return false;
                            }
                        }
                    },           
                    {
                        type: 'confirm',
                        name: 'confirmAddIntern',
                        message: 'Another intern profile?',
                        default: false
                    }                                     
            ])
                    .then(internData => {
                        //end intern loop if default false or no
                        console.log(internData, "Completed adding intern profiles.")
                        profileInternData.iprofiles.push(internData);
                        if (internData.confirmAddIntern) {
                            console.log(internData, "You're done with intern profiles.")
                        //end engineer loop if default false or no
                            return promptInternProfile(profileInternData);
                        } else {
                        // start intern loop again if true or yes
                        return profileInternData;
                        }
                    });           

                    // .then(engData => {
                    //     //end engineer loop if default false or no
                    //     console.log(engData, "Completed adding engineer profiles.")
                    //     profileData.profiles.push(engData);
                    //     if (engData.confirmAddEngineer) {
                    //         console.log(engData, "You're done with engineering profiles.")
                    //         //end engineer loop if default false or no                                                        
                    //         return promptProfile(profileData);                         
                    //     } else {
                    //         // start engineer loop again if true or yes
                    //         return profileData;
                    //     }
                    // });
};               



// -- run the code: initialize promptUser() code -- with promptProfile and promptInternProfile & their arrays nested in a promise chain  -- //

                // manager questions
                promptUser()

                // engineer questions
                .then(promptProfile)
                .then(profileData => {
                    //TODO 
                    
                    console.log('apple', profileData);
                    return generateHTML(profileData);
                })
                  // intern questions <section not working>
                    // .then(promptInternProfile)
                    // .then(profileInternData => {
                    //     return generateHTML(profileInternData);
                    // })   

                //write HTML and copy CSS files to /dist folder
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
                //catch and display for any errors
                .catch(err => {
                    console.log(err);
                });

            