 var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
    
mongo.connect(url, function(err, client) {
    var db = client.db('learnyoumongo');
      // db gives access to the database
    var collection = db.collection('docs');
    var newObject = {
      
      firstName: process.argv[2],
      lastName: process.argv[3]
    }
      collection.insert(newObject, function(err,data) {
        console.log(JSON.stringify(newObject))
        client.close()
      })

      // other operations
    })
     