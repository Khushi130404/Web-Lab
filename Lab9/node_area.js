var http = require("http");
var url = require("url");
var area = require("./area");

http
  .createServer(function (req, res) {
    if (req.method === "GET") {
      var parsedUrl = url.parse(req.url, true);

      if (parsedUrl.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
          <h1>Enter Dimensions to Calculate Areas</h1>
          <form action="/calculate" method="get">
            <label>Radius (for Circle):</label>
            <input type="number" step="any" name="radius" /><br><br>
            
            <label>Length (for Rectangle):</label>
            <input type="number" step="any" name="length" /><br><br>
            
            <label>Width (for Rectangle):</label>
            <input type="number" step="any" name="width" /><br><br>
            
            <label>Side (for Square):</label>
            <input type="number" step="any" name="side" /><br><br>
            
            <input type="submit" value="Calculate Areas">
          </form>
        `);
        res.end();
      } else if (parsedUrl.pathname === "/calculate") {
        var q = parsedUrl.query;

        var radius = q.radius ? parseFloat(q.radius) : 0;
        var length = q.length ? parseFloat(q.length) : 0;
        var width = q.width ? parseFloat(q.width) : 0;
        var side = q.side ? parseFloat(q.side) : 0;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Area Calculations</h1>");

        if (radius > 0) {
          var circleArea = area.circle(radius).toFixed(2);
          res.write(
            `<p>Area of Circle with radius ${radius}: ${circleArea}</p>`
          );
        }

        if (length > 0 && width > 0) {
          var rectangleArea = area.rectangle(length, width).toFixed(2);
          res.write(
            `<p>Area of Rectangle with length ${length} and width ${width}: ${rectangleArea}</p>`
          );
        }

        if (side > 0) {
          var squareArea = area.square(side).toFixed(2);
          res.write(`<p>Area of Square with side ${side}: ${squareArea}</p>`);
        }

        res.end();
      }
    }
  })
  .listen(8080);
