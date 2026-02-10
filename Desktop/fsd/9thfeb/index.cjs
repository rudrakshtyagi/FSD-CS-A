const http = require("http");
const path = require("path");

// CommonJS me direct milta
console.log("Folder path:", __dirname);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home page");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server: http://localhost:3000");
});
