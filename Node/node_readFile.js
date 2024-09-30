var http = require("http");
var file = require("fs");

http
  .createServer(function (req, res) {
    file.readFile("readFile.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  })
  .listen(8080);
