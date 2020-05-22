//-------------  summary of file: generate-HTMLCSS -------------------------- //

    //1. require for file system or fs
    //2. writeFile w/promice    (index.html from HTML-template > dist/HTML.index)
    //3. copyFile               (style.css from /src > /dist folders)
    //4. module.export writeFile, copyFiles

// ------------------------- require --------------------------------------- //

//core\built in file system module that allows you to create files on the your server
const fs = require('fs');

// -- create a promise that writes an HTML file to the /dist dir -- //

        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
                    // if error, reject the Promise and send the error 
                    if (err) {
                            reject(err);                            
                            return;
                    }            
                    // if ok, resolve the Promise and send the successful data to the `.then()` method
                    resolve({
                            ok: true,
                            message: 'An HTML file has been generated and copied to the /dist folder.'
                    });
                });
            });
        };

// -- create a second promise with resolve\reject to copy the CSS file to the /dist dir -- //

        const copyFile = () => {
            return new Promise((resolve, reject) => {
                fs.copyFile('./src/style.css', './dist/style.css', err => {
                    if (err) {
                            reject(err);
                            return;
                    }
                    resolve({
                            ok:true,
                            message: 'A CSS file has been copied to the /dist folder.'
                    });
                });
            });
        };

// ---------------------------- export  -----------------------------------------//

            module.exports = { writeFile, copyFile };
