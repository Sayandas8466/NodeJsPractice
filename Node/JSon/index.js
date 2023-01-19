const fs = require('fs');
const bioData = {
    name : "Sayan",
    age : 22,
    course:"B.Tech",
    stream:"Electronics",
};

//covert object to JSON data

const JsonData = JSON.stringify(bioData);
for creating  a json file
fs.writeFile('fetch.json',JsonData, (err) =>{
    console.log("Created");

});

// for read the file

fs.readFile('fetch.json' ,'utf-8',(err,data) =>{
  //For converting json to object
    const org_data = JSON.parse(data);
    console.log(org_data);
});
