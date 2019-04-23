var http = require('http');
const fs = require('fs');
const events=require('./events');
var PORT=process.env.PORT||3000;

http.createServer((req,res)=>{
fs.readFile('data.txt',(err,data)=>{
    if(err) throw err;
//console.log(data.toString());

res.write('<h1>hello world</h1>'+data.toString());
res.end();
})

 


}).listen(PORT,()=>{
console.log("server running"+PORT);
});
