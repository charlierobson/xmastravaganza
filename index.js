const contribFolder = './user_contrib/';
const fs = require('fs');

while (true) {
    fs.readdir(contribFolder, (err, files) => {
        files.forEach(file => {
            delete require.cache[contribFolder + file];
            let effect = require(contribFolder + file);
            var effectObject = effect();
            console.log(effectObject.name);
            effectObject.init();
            while (effectObject.tick("Hi!")) {
                // sleep some time
            }        
        });
    })
}
