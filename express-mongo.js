var express=require('express');
var mongoClient = require('mongodb').MongoClient;
var app= express();
var url="mongodb://localhost:27017";
var g=[];
app.get('/',(req,res)=>{

mongoClient.connect(url,(err,db)=>{
var mydb=db.db('mongopract');

mydb.collection('practice').find({name:"solkar"},{projection:{_id:0,name:1,id:2}}).toArray((err,result)=>{
    if(err){
        throw err;
    }else if(result.length){
        storedata(result[0].name);   
res.send('info'+JSON.stringify(result[0].name));
    }else{
      res.send('no data found');
    }
})
})

});


function storedata(x){
    g.push(x);
console.log(g);
}

var PORT=process.env.PORT||3001;

app.listen(PORT,()=>{
    console.log('port numebr'+PORT)
});