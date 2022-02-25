const path = require("path");

console.log(path.join(__dirname, "first", "second"));

const fullPath = path.resolve("firs.jpg");

console.log(path.basename(fullPath));