const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3000;

const target = 'http://jsonplaceholder.typicode.com'; // Ensure using 'http' not 'https'
const proxyMiddleware = createProxyMiddleware({
  target,
  changeOrigin: true,
  pathRewrite: { '^/api': '' }, // Remove the /api prefix before forwarding the request
});

app.use('/api', proxyMiddleware);

app.get('/', (req, res) => {
  res.send('Hello, this is my Render Server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
