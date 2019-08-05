const http = require('http');
// const http = require('path');
http.createServer((req,res)=>{
    res.end(111)
}).listen(8888,()=>{
    console.log("8888");
})