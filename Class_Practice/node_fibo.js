var http = require("http");
var fibo = require("./fibonacci");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Fibonacci : " + fibo.fibonacci());
    res.end();
  })
  .listen(8080);
