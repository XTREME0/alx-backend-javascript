const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (req, resp) => {
  resp.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
