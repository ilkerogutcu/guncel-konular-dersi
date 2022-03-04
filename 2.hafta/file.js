const fs = require("fs");
const { resolve } = require("path");

const path = require("path");

const text = "BIL 4 2 5";

// fs.mkdirSync(path.resolve(__dirname, "a"));

// const writeFileAsync = async (path, data) => {
//   return new Promise((resolve, reject) =>
//     fs.writeFile(path, data, (err) => {
//       if (err) {
//         return reject(err.message);
//       }
//       return resolve();
//     })
//   );
// };
// writeFileAsync(path.resolve(__dirname, "asdsa.txt"), "data").then(()=>{
//     readFileAsync(path.resolve(__dirname,"asdsa.txt")).
// })
// const writeFileAsync(path.resolve(__dirname,"text.txt"),'data')
// .then(() => readFileAsync(path.resolve(__dirname,"text.txt"))
// .then(data.split('').lenght)
// .then(count => writeFileAsync(path.resolve(__dirname,"count.txt"), $count))


// const appendFileAsync = (path,data) => {
//     return new Promise((resolve,reject) => {
//         fs.appendFile(path,data,(err) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             else resolve();
//         });
//     });
// }


// const readFileAsync = (path) => {
//     return new Promise((resolve,reject) => {
//         fs.readFile(path,{encoding: 'utf-8'}, (err,data) => {
//             if(err) {
//                 return reject(err.message);
//             }
//             else resolve(data);
//         });
//     });
//   }

// promise konusuna bak


const fsPromise=require('fs/promises');


const fileRead=async () =>{
    try {
        await fsPromise.writeFile(path.resolve(__dirname,"text.txt","data"));

        
    } catch (error) {
        
    }
}
