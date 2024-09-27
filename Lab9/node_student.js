const http = require("http");
const fs = require("fs");
const url = require("url");

const PORT = 8080;

http
  .createServer((req, res) => {
    // Display the form for PRN input
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <h1>Student Information Lookup</h1>
        <form action="/student" method="get">
          <label for="prn">Enter PRN:</label>
          <input type="text" id="prn" name="prn" required />
          <input type="submit" value="Submit" />
        </form>
      `);
      res.end();
    }
    // Handle the student information request
    else if (req.method === "GET" && req.url.startsWith("/student")) {
      const query = url.parse(req.url, true).query;
      const prn = query.prn;

      fs.readFile("student.json", "utf8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading file.");
          return;
        }

        const students = JSON.parse(data);
        const student = students.find((s) => s.prn === prn);

        res.writeHead(200, { "Content-Type": "text/html" });

        if (student) {
          res.write(`
                    <h1>Student Information</h1>
                    <table border="1">
                        <tr>
                            <th>Name</th>
                            <th>PRN</th>
                            <th>Branch</th>
                            <th>Semester</th>
                            <th>Address</th>
                            <th>Subjects</th>
                        </tr>
                        <tr>
                            <td>${student.name}</td>
                            <td>${student.prn}</td>
                            <td>${student.branch}</td>
                            <td>${student.semester}</td>
                            <td>${student.address}</td>
                            <td>${student.subjects.join(", ")}</td>
                        </tr>
                    </table>
                `);
        } else {
          res.write(`
                    <h1>No Student Found</h1>
                    <p>No student found with PRN: ${prn}</p>
                `);
        }

        res.end();
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
