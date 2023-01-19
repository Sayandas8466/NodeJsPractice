// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// e7d7cd0e54a692647e55f1b75e80c23c;
require("dotenv").config();
const http = require('http');
const fs = require('fs');
var requests = require('requests');

const homeFile= fs.readFileSync('home.html','utf-8');

const replaceVal = (tempVal, orgVal) => {
    let temperature = tempVal.replace("{% tempval %}",Math.round(orgVal.main.temp-273));
    temperature = temperature.replace(
        "{% tempmin %}",Math.round(orgVal.main.temp_min - 273)
    );
    temperature = temperature.replace("{% tempmax %}",Math.round(orgVal.main.temp_max -273));
    temperature = temperature.replace("{% location %}", orgVal.name);
    temperature = temperature.replace("{% country %}", orgVal.sys.country);
    temperature = temperature.replace("{% tempstatus %}", orgVal.weather[0].main);

    return temperature;
};


const server = http.createServer((req ,res) =>{
    if(req.url == '/'){
        requests(
        "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=e7d7cd0e54a692647e55f1b75e80c23c"
        )
        .on("data",(chunk)=>{
            const objdata=JSON.parse(chunk);
            const arrData =[objdata];
            // console.log((arrdata[0].main.temp)-273  );
            const realTimeData = arrData.map((val) => replaceVal(homeFile, val))
            .join("");
            res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on("end",(err)=>{
            if(err) return console.log("Connection closed due to errors",err);
            console.log("end");
        })
    }
});
server.listen(8000,"127.0.0.1");