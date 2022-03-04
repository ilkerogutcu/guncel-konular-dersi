// const stream = require("stream");
const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, "text.txt"), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     // console.log(data);
//   }
// });

// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"), "utf-8");

// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

const writeStream = fs.createWriteStream(
  path.resolve(__dirname, "text.txt"),
  "utf-8"
);

for (let i = 0; i < 100; i++) {
  writeStream.write(`${i} \n`);
}
writeStream.end();
writeStream.close();
writeStream.destroy();
