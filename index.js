const http = require("node:http");
const server = http.createServer((req, res) => {
    res.writeHead(200, "OK", { "content-type": "text/html" });
    res.end("<h1>Hello World!! last</h1>");
});

server.listen(8000, () => {
    console.log("Up and running on port 8000");
});