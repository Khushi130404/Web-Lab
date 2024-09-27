var http = require("http");
var area = require("./area");

const radius = 5;
const length = 10;
const width = 6;
const side = 4;

const circleArea = area.circle(radius).toFixed(2);
const rectangleArea = area.rectangle(length, width);
const squareArea = area.square(side);

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Area Calculations</h1>");
    res.write(`<p>Area of Circle with radius ${radius}: ${circleArea}</p>`);
    res.write(
      `<p>Area of Rectangle with length ${length} and width ${width}: ${rectangleArea}</p>`
    );
    res.write(`<p>Area of Square with side ${side}: ${squareArea}</p>`);
    res.end();
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");
