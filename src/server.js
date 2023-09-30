const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3000;

// Set up proxy middleware
// Replace 'http://target-server.com' with the actual target server's URL
const target = 'http://target-server.com';
const proxyMiddleware = createProxyMiddleware({
  target,
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
});

// Apply proxy middleware to desired path
// In this case, all requests to '/api' will be proxied to the target server
app.use('/api', proxyMiddleware);

// Your existing routes
app.get('/', (req, res) => {
  res.send('Hello, this is my Render Server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
