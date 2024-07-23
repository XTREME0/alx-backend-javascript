const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, resp) => {
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  resp.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
