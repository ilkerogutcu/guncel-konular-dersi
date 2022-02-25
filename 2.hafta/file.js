const fs = require("fs");

const path = require("path");


fs.mkdirSync(path.resolve(__dirname, "dir"));


const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) return reject(err.message);
        return resolve();
    }));
}

writeFileAsync(path.resolve(__dirname, "asdsa.txt"), 'data')
    .then(() => fs.appendFile(path.resolve(__dirname, "asdsa.txt", "aşsdlaşsldşsl")));


// promise konusuna bak