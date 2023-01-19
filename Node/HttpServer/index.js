const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const data=fs.readFileSync(`${__dirname}/userApi/userapi.json`,'utf-8');
    const objData =JSON.parse(data);
    console.log(objData[0].users[0]);



        
    if (req.url == "/") {
        res.end("Hello from the other side");
    } else if (req.url == "/about") {
        res.end("Hello from About Us side");
    } else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(objData[0].users[0]);
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("<h1>404 error, The page is not found</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port  8000");
});
