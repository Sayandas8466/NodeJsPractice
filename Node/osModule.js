const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.hostname());


const freememo = os.freemem()
console.log(`${freememo /1024/1024/1024}`);

const totalmemo = os.totalmem();
console.log(`${totalmemo / 1024 / 1024 / 1024}`);