const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, this is my Render Server!');
});

module.exports = app; // Export the app
