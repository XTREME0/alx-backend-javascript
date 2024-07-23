const http = require('http');
const students = require('./3-read_file_async');
const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer((req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    resp.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    resp.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      resp.write(`Number of students: ${data.students.length}\n`);
      resp.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      resp.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
      resp.end();
    }).catch((err) => resp.end(err.message));
  }
});
  
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
