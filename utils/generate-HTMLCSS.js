//summary of file: generate-HTMLCSS
    //1. require for file system or fs
    //2. writeFile w/promice    (HTML-template > dist/HTML.index)
    //3. copyFile               (style.css from /src > /dist folders)
    //4. module.export writeFile, copyFiles
// ------------------------------------------------------------------ //

const fs = require('fs');

// -- create a promise and write a file -- //

        const writeFile = fileContent => {
            return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
                    // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
                    if (err) {
                            reject(err);
                            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                            return;
                    }
            
                    // if everything went well, resolve the Promise and send the successful data to the `.then()` method
                    resolve({
                            ok: true,
                            message: 'An HTML file has been generated and copied to the /dist folder.'
                    });
                });
            });
        };


// -- create another promise with resolve\reject

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


module.exports = { writeFile, copyFile };
