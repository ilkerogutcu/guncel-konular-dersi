const os = require("os");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());



// console.log(os.homedir());
// console.log(os.type());
// console.log(os.release());
// console.log(os.uptime());
// console.log(os.userInfo());
// console.log(os.EOL);
// console.log(os.endianness());
// console.log(os.tmpdir());

for(let i=0;i<os.cpus().length;i++){
    console.log(os.cpus()[i]);
}