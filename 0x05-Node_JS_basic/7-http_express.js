const express = require('express');
const app = express();
const students = require('./3-read_file_async');
const port = 1245;
const hostname = '127.0.0.1';

app.get('/', (req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.send('Hello Holberton School!');
});

app.get('/students', async (req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.write('This is the list of our students\n');
  await students(process.argv[2]).then((data) => {
    resp.write(`Number of students: ${data.students.length}\n`);
    resp.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    resp.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
  }).catch((err) => resp.write(err.message))
    .finally(() => {
      resp.end();
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
