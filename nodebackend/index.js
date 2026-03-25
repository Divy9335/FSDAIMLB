const http = require("http");
const path = require("path");
const sum = require("./fetchData.js");
const fs=require('fs').promises
const {writeData,readData,deleteFile,dataCopy,fileReadAsync}=require('./usefsmodule.js');
const PORT = 4007;
const STUDENT_FILE = path.join(__dirname, 'student.json');
const server = http.createServer( async(req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

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
    const sumData = writeData();
    res.end(JSON.stringify({ msg: sumData }));
  }

  if (req.url == "/readData" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = readData();
    res.end(JSON.stringify({ msg: sumData }));
  }

  if (req.url == "/deleteFile" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = deleteFile();
    res.end(JSON.stringify({ msg: sumData }));
  }

  if (req.url == "/dataCopy" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = dataCopy();
    res.end(JSON.stringify({ msg: sumData }));
  }

  if (req.url == "/fileReadAsync" && req.method == "GET") {
    res.setHeader("content-type", "application/json");
    const sumData = await fileReadAsync();
    res.end(JSON.stringify({ msg: sumData }));
  }

  if (req.url == "/data" && req.method == "DELETE") {
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify({ msg: "This is JSON delete data" }));
  }

  //register.....
  if (req.url == "/register" && req.method == "POST") {
    let arr=[];
    let body="";
    req.on('data',chunk=>{
      body +=chunk
    })
    req.on('end',async()=>{
      const {name, email,password} = JSON.parse(body);
      //console.log(name,password)
      const fData = await fs.readFile(STUDENT_FILE,{encoding:'utf-8'})
      arr = JSON.parse(fData);

      const status = arr.find(ele=>ele.email==email)

      if (status){
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ msg:"Student is already registered" }));
       }else{
        arr.push({name, email,password})
        await fs.writeFile(STUDENT_FILE,JSON.stringify(arr,null,2));
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ msg:"Student registered Successfully" }));
       }
    })
  }
  //login
  if (req.url == "/login" && req.method == "POST"){
    let arr=[];
    let body="";
    req.on('data',chunk=>{
      body +=chunk
    })
    req.on('end',async()=>{
      const {email,password} = JSON.parse(body);
      const fData = await fs.readFile(STUDENT_FILE,{encoding:'utf-8'})
      arr = JSON.parse(fData);

      const status = arr.find(ele=>ele.email==email&& ele.password==password);
      if(status) {
       res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ msg:"Student login Successfully" }));
       }
       else{
        res.setHeader("content-type", "application/json");
        res.end(JSON.stringify({ msg:"Student Invalid" }));
       }
      

    })
  }


  
});

server.listen(PORT, () => {
  console.log(`Service is availabe at ${PORT}`);
});