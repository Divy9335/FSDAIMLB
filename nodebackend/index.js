const http = require("http");
const sum = require("./fetchData.js");
const PORT = 4007;
const writeData = require("./usefsmodule.js");
const server = http.createServer( async(req, res) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // res.setHeader('content-type','text/html')
  // res.end("<h2 style=color:red> Hello Welcome to Node Server </h2>");

  if (req.url == "/msg" && req.method == "GET") {
    res.setHeader("content-type", "text/html");
    res.end("<h2 style=color:red> Hello Welcome to Node Server </h2>");
  }

  if (req.url == "/data" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = await sum()
    res.end(JSON.stringify({ msg: sumData }));
  }


  if (req.url == "/writeData" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = writeData()
    res.end(JSON.stringify({ msg: sumData }));
  }

  if (req.url == "/data" && req.method == "POST") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ msg: "This is JSON POST data" }));
  }

  if (req.url == "/data" && req.method == "DELETE") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ msg: "This is JSON delete data" }));
  }
});

server.listen(PORT, () => {
  console.log(`Service is availabe at ${PORT}`);
});