// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, this is my Render Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
