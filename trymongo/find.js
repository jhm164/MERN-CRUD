var mongoclient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/";

mongoclient.connect(url,(err,db)=>{
if(err) throw err;

console.log('connected');

var db1=db.db('saurabh');
db1.collection('saurabh').find({"id" :4 }, { jj : 1, _id : 0 }).toArray(function (err, result) {
    if (err) {
        console.log(err);
    } else if (result.length) {
        console.log(result);
    } else {
       // socket.emit("No documents found");
       console.log('here');
    };
});

/*
db1.collection('saurabh').findOne({},(err,result)=>{
console.log(result);
});
*/
})
