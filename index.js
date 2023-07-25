// const http = require("http");
// const host = 'localhost';
// const port = 8000;

// const requestListener = function (req, res) {
//     console.log(req.url);
//     res.end("hello from Node")
// };

// const server = http.createServer(requestListener);

// server.listen(port, host, () => {
//     console.log(`Server is running on http://${host}:${port}`);
// });

const http = require('http');

const server = http.createServer((req, res) => {
  // Extract the name from the URL
  const name = req.url.substr(1);

  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Check if a name is provided in the URL
  if (name) {
    res.end(`Hello from ${name}!`);
  } else {
    res.end('Hello!');
  }
});

const port = 8000;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
