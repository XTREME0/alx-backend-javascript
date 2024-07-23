const express = require('express');

const { readFile } = require('fs');

const app = express();
const port = 1245;

function cStudents(file) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((res, rej) => {
    readFile(file, (err, data) => {
      if (err) {
        rej(err);
      } else {
        let o = '';
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const l = length - 1;
        o += `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            o += `Number of students in ${key}: ${value}. `;
            o += `List: ${students[key].join(', ')}\n`;
          }
        }
        res(o);
      }
    });
  });
}

app.get('/', (req, resp) => {
  resp.send('Hello Holberton School!');
});
app.get('/students', (req, resp) => {
  cStudents(process.argv[2].toString()).then((o) => {
    resp.send(['This is the list of our students', o].join('\n'));
  }).catch(() => {
    resp.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;
