const http = require('http');

const server  = http.createServer((req,res) =>{
    if(req.url == "/"){
    res.end("Hello from the other side");
    }
    else if(req.url == "/about"){
        res.end("Hello from About Us side");
    }
    else if(req.url == "/contact"){
        res.write("Hello from Contact us side");
        res.end();
    }
    else{
        res.writeHead(404, {"content-type" : "text/html"}) ;
        res.end("<h1>404 error, The page is not found</h1>");
    }
});

server.listen(8000, "127.0.0.1" ,() =>{
    console.log("listening to the port  8000");
});