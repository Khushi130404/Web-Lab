const http = require("http");
const fs = require("fs");
const path = require("path");

function isArmstrong(number) {
  const digits = number.toString().split("");
  const numDigits = digits.length;
  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(Number(digit), numDigits),
    0
  );
  return sum === number;
}

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const filePath = path.join(__dirname, "armstrong.txt");
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Error reading the file</h1>");
        return;
      }

      const numbers = data.split("\n").map((num) => Number(num.trim()));
      let results = "<h1>Armstrong Number Check</h1><ul>";

      numbers.forEach((number) => {
        if (isArmstrong(number)) {
          results += `<li>${number} is an Armstrong number.</li>`;
        } else {
          results += `<li>${number} is not an Armstrong number.</li>`;
        }
      });
      results += "</ul>";
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(results);
    });
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
