var express = require('express');
var cors= require('cors');
var mongoClient = require('mongodb').MongoClient;
const url="mongodb://localhost:27017/"
var app=express()


app.use(cors());


app.get('/insert',(req,res)=>{
    var name=req.query.name;
    var email=req.query.email;
    var roll=req.query.roll;
    console.log(name+' '+email+' '+roll)
    insertdata(name,email,roll);
    res.json({name:'hello'})
    });

    function insertdata(name1,email,roll){
        console.log(name1+' '+email+' '+roll);
mongoClient.connect(url,(err,db)=>{
if(err) throw err;
var mydb = db.db("mongopract");
var data={
    email:email,
    name:name1,
    roll:roll
}
mydb.collection('student').insert(data,(err,result)=>{
if(err) throw err;
console.log(result);
})

});


    }


    app.get('/showdata',(req,res)=>{
var roll=req.query.roll;

mongoClient.connect(url,(err,db)=>{
    if(err) throw err
   
    var mydb = db.db("mongopract");
  
    mydb.collection('student').find({roll:roll},{projection:{_id:0,name:1,email:2}}).toArray((err,result)=>{
   if(err){throw err}else{
    console.log(result);
res.json(result);
  
   }
    });
    

});
})

app.get('/update',(req,res)=>{
var roll=req.query.roll;
var name=req.query.name;
var email=req.query.email;
console.log(roll);

mongoClient.connect(url,(err,db)=>{
    if(err) throw err;

    var mydb=db.db('mongopract');
var myqeury={
    roll:roll
}
var changedata={ $set:{
    name:name,
    email:email
}
}
mydb.collection('student').updateOne(myqeury,changedata,(err,response)=>{
    if(err) throw err;
res.send(response);
db.close();
})


})



})


app.get('/delete',(req,res)=>{
    var roll=req.query.roll;
mongoClient.connect(url,(err,db)=>{
var mydb=db.db('mongopract');
var myquery={
    roll:roll
}

mydb.collection('student').deleteOne(myquery,(err,response)=>{
if(err) throw err;

res.send(response);

})

})

})


var PORT = process.env.PORT || 3001; 


app.listen(PORT,()=>{
console.log('localhost://'+PORT);
});

