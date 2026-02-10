const http = require("http");  

const server = http.createServer((req, res) => {
  res.write("Server chal raha hjglgrlgeai");
  res.end();
});

server.listen(3000,()=>{
    console.log("hoigya e ja browser khol");
});
