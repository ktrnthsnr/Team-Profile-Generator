//-------------  summary of file:  HTML-template ---------------------- //

    //1. engineer array function, generateProfiles, with template literals
    //2. module.exprt containing the framework HTML with template literals
          //and nesting the generateProfiles array  

// -- import ----------------------------------------------------------- //
// const Manager = require('../lib/Manager.js');

// ------ HTML template for 'engineer' profiles --- create generate profile function 

        const generateProfiles = profilesArr => {
            console.log('engineerArray', profilesArr)
            return `            
                ${profilesArr
                  // .filter(({ confirmAddEngineer }) => confirmAddEngineer)
                  .map((engineer) => {
                    // if (employee instanceof Engineer)
                    return `
          <div class="column">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  <h5>${engineer.getName()}</h5><h6>Engineer</h6>
                    <ul class="list-group list-group-flush"> 
                      <li class="list-group-item">ID: ${engineer.getID()} </li>
                      <li class="list-group-item">&#128386; Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a> </li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a> </li>                                                      
                    </ul>
                </div>
            </div>
          </div> 
                  `;
                  })
                  .join('')}                
              `;
            };
   
/* 
       
// ------ HTML template for 'intern' profiles --- create generate profile function 

const generateInternProfiles = iprofilesArr => {
  return `            
      ${iprofilesArr
        .filter(({ confirmAddIntern }) => confirmAddIntern)
        .map(({ internName, internID, internEmail, schoolInternUserName }) => {
          return `
<div class="column">
  <div class="card" style="width: 18rem;">
      <div class="card-header">
        <h5>${internName}</h5><h6>Intern</h6>
          <ul class="list-group list-group-flush"> 
            <li class="list-group-item">ID: ${internID} </li>
            <li class="list-group-item">&#128386; Email: <a href="mailto:${internEmail}">${internEmail}</a> </li>
            <li class="list-group-item">School: ${schoolInternUserName}</li>                                                   
          </ul>
      </div>
  </div>
</div> 
        `;
        })
        .join('')}                
    `;
  };      

*/


// -- HTML template ----- framework for index.html -----  //

module.exports = templateData => {  
    // destructure page data by section
    const { profiles, iprofiles, manager, ...header } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-Profile-Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    </head>
    <body>     
    <header>
        <nav class="navbar navbar-dark">
          <h1><a class="navbar-brand" href="#">My Team - Profiles</a> </h1>
        </nav>
    </header>
    <main>  
      <div class="row">      
            <div class="column">
                  <div class="card" style="width: 18rem;">
                      <div class="card-header"><h5>${header.managerName}</h5> <h6>Manager</h6>
                        <ul class="list-group list-group-flush">                  
                            <li class="list-group-item">ID: ${header.employeeID}</li>
                            <li class="list-group-item">&#128386; Email: <a href="mailto:${header.managerEmail}">${header.managerEmail}</a> </li>
                            <li class="list-group-item">&#128382; Office Number: ${header.managerNumber}</li>
                        </ul>
                      </div>
                  </div>
            </div>            
            ${generateProfiles(profiles)}            

      </div>     
    </main>    
    </body>
    </html>
    `;
};

// removed from HTML template till working
    // ${generateInternProfiles(iprofiles)}