const http = require('node:http');
const url = require('node:url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Parse the URL to get query parameters
  const parsedUrl = url.parse(req.url, true);
  const queryName = parsedUrl.query.name || 'no input'; // Default to 'Guest' if name is not provided

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  // Send a greeting back to the client using the name from the query parameters
  res.end(`Hello ${queryName}!`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
