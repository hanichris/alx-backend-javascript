const http = require('http');

const host = 'localhost';
const port = 1245;

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200);
  res.end('Hello Holberton School!');
});

module.exports = app;
