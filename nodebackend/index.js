const http = require("http");
const sum = require("./fetchData.js");
const PORT = 4007;
const {writeData,readData, deleteFile,dataCopy,fileReadAsync} = require("./usefsmodule.js");
const server = http.createServer( async(req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
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
  if (req.url == "/dataCopy" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = dataCopy()
    res.end(JSON.stringify({ msg: sumData }));
  }

   if (req.url == "/readData" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = readData()
    res.end(JSON.stringify({ msg: sumData }));
  }
  if (req.url == "/fileReadAsync" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = await fileReadAsync()
    res.end(JSON.stringify({ msg: sumData }));
  }
  if (req.url == "/deleteFile" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = deleteFile()
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
  if (req.url == "/register" && req.method == "POST") {
    let arr=[]
    let body=""
    req.on('data',chunk=>{
      body = body + chunk
    })
    req.on('end',()=>{
      const {name,email,password} = JSON.parse(body);
      console.log(name)
    })
    res.setHeader("content-type", "application/json");
    
    res.end(JSON.stringify({ msg: "Hii .. hitting register API" }));
  }
});


server.listen(PORT, () => {
  console.log(`Service is availabe at ${PORT}`);
});