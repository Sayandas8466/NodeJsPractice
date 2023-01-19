const fs = require("fs");

// fs.writeFile('Async.txt','Today is coldest day',(err)=>{
//     console.log(err);
//     console.log("File is created");
// });
// append  data
// fs.appendFile('Async.txt','Append the text',(err)=>{
//     console.log('Append the data');
// });
//Read the file
fs.readFile('Async.txt',"utf-8",(err,data) =>{
    console.log(data);
    console.log(err);
});