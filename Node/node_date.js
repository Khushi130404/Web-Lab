var http = require("http");
var dt = require("./date");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Current Date : " + dt.getCurrentDate());
  })
  .listen(8080);
