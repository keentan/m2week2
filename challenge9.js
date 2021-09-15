var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"

mongo.connect(url, function(err, client) {
    var db = client.db('learnyoumongo');
      // db gives access to the database
    var collection = db.collection('prices');

collection.aggregate([
      { $match: { size: process.argv[2] }}
    , { $group: {
        _id: 'avg_price' // This can be an arbitrary string in this case
      , avg_price: {
          // $sum is the operator used here
          $avg: '$price'
        }
      }}
    ]).toArray(function(err, results) {
      // handle error
      console.log((results[0].avg_price).toFixed(2))
      client.close()
      // => [
      // =>   { _id: 'total', total: 11 }
      // => ]
    })
   })