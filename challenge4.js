var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
    
mongo.connect(url, function(err, client) {
    var db = client.db('learnyoumongo');
      // db gives access to the database
    var collection = db.collection('parrots');
    collection.find({
      age: {$gt:Number(process.argv[2])}
    }, {
      projection: {
      name: 1,
      age: 1,
      _id: 0
  }
}).toArray(function(err, documents) {
    console.log(documents);
    client.close()
    })
})