var mongoClient=require('mongodb').MongoClient;

var url="mongodb://localhost:27017/saurabh";

mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("saurabh");
  dbo.collection("saurabh").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.jj);
  });
   db.close();
  });