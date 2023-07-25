const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
    console.log(req.url);
    res.end("hello from Node")
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});