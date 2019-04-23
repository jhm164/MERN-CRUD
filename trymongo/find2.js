var mongoClient = require('mongodb').MongoClient;

const url="mongodb://localhost:27017";

mongoClient.connect(url,function(err,db){
var mydb=db.db('mongopract');
mydb.collection('practice').deleteMany({name:'solkar'},(err,result)=>{
if(err)    throw err;

    console.log(result);

});
});