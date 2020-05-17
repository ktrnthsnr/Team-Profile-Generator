//summary of file: HTML-template
    //1. engineer array function, generateProfiles, with template literals
    //2. module.exprt containing the framework HTML with template literals
          //and nesting the generateProfiles array  
// ------------------------------------------------------------------ //



// ------ HTML template for projects --- create generate project function 
        const generateProfiles = projectsArr => {
            return `            
                ${projectsArr
                  .filter(({ confirmAddEngineer }) => confirmAddEngineer)
                  .map(({ engineerName, engineerID, engineerEmail, gitHubUserName }) => {
                    return `
          <div class="column">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                  <h5>${engineerName}</h5><h6>Engineer</h6>
                    <ul class="list-group list-group-flush"> 
                      <li class="list-group-item">ID: ${engineerID} </li>
                      <li class="list-group-item">&#128386; Email: <a href="mailto:${engineerEmail}">${engineerEmail}</a> </li>
                      <li class="list-group-item">GitHub: <a href="https://github.com/${gitHubUserName}">${gitHubUserName}</a> </li>                                                      
                    </ul>
                </div>
            </div>
          </div> 
                  `;
                  })
                  .join('')}                
              `;
            };
                


// -- HTML template ----- framework for index.html -----  //

module.exports = templateData => {
    // destructure page data by section
    const { projects, ...header } = templateData;

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
            ${generateProfiles(projects)}
    </main>    
    </body>
    </html>
    `;
};