const { error } = require('console');
// const newPasswordGen = require(`./Password Generator/generate-password.js`)

const fileSys = require('fs');
const path = require('path');

const name = "Polly"
const data = `var userName = '${name}'`;

const dirExists = fileSys.existsSync(path.join(__dirname, '/webFile'));

if (dirExists) {
    fileSys.writeFile(path.join(__dirname, '/webFile', '/index.js'), data, function (error) {
        if (error) {
            console.log(error);
        }

        console.log("Specified File Has Been Created/Updated");
    })
}
else {
    fileSys.mkdir(path.join(__dirname, '/webFile'), function (error) {
        if (error) {
            console.log(error);
        }

        fileSys.writeFile(path.join(__dirname, '/webFile', '/index.js'), data, function (error) {
            if (error) {
                console.log(error);
            }
        })
    })
}

const folderExist = fileSys.existsSync(path.join(__dirname, '/removeThis'));

if (!folderExist) {
    fileSys.mkdir(path.join(__dirname, '/removeThis'), function (error) {
        if (error) {
            console.log(error)
        }
    })
    console.log("Folder Created")
}
else{
    fileSys.rmdir(path.join(__dirname, '/removeThis'), function(error){
        if(error){
            console.log(error); 
        }
        console.log("Folder Removed");
    })
}