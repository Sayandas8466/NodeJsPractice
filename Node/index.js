const fs = require('fs');

// creating new file
// fs.writeFileSync('read.txt','welcome to my file');

// if available the file and if the data is different then the data will be override
// fs.writeFileSync('read.txt','Bye Bye from file');

// if the data should be append in existing file
// fs.appendFileSync('read.txt',' Thank you for visi;ting the file');

// Read the file 
// const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);

// Rename the file
// fs.renameSync('read.txt','readwrite.txt');

// creating a folder 
// fs.mkdirSync('NodeCh');

//creating a  file inside the NodeCh Folder
// fs.writeFileSync("NodeCh/bio.txt", "creating a  file inside the NodeCh Folder");

//appemnd int he file
// fs.appendFileSync('NodeCh/bio.txt'," Appending new Line");

//Without Generating buffer data Encode ths data by using utf-8
// const data =fs.readFileSync('NodeCh/bio.txt','utf-8');
// console.log(data);

// delete the file
// fs.unlinkSync("NodeCh/bio.txt");

// delete the folder
fs.rmdirSync('NodeCh');