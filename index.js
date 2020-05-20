
//Setup guide: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database
const MongoClient = require('mongodb').MongoClient;                      // To connect to our mongoDB
const assert = require('assert');
const url = 'mongodb://localhost:27017';                                 // Url to mongoDB gotten from compass
const dbName = 'twitterDB';                                              // DB nam 
const client = new MongoClient(url, { useUnifiedTopology: true });   // "useUnifiedTopology" removes Deprecation Warnings..  // 

// C# awnser to "static void main(string args)""
client.connect((err) => {
    assert.equal(null, err);
    console.log('MongoDB: Connection to server has been sucessfully made');
    const db = client.db(dbName);
    
    // Result of our map/reduce (The top ten #hashtags)
    mapReduceFunction(db, (() => {   
        client.close();
    }));
});


//Map and reduce functions: 
var mapFunction = function () {
    if (this.entities != undefined) {
        for (i = 0; i < this.entities.hashtags.length; i++) {
            var hashtag = this.entities.hashtags[i].text;
            emit(hashtag, 1); //emit(key,value) any number of times to create an output document associating key with value.
        }
    }
}
var reduceFunction = function (hashtag, values) {
    count = 0;
    for (let i = 0; i < values.length; i++) {
        count += values[i];//runs through all the emitted ducoments and sums them up e.g. "#Løber = 15"
    }
    return count;
}


//Using the map and reduce functions.
const mapReduceFunction = async function (db, callback) {        // async becasuse we call our database and it can take some time before we get a response bacjk
    var collection = await db.collection('twitter');         // Fetch our collection from mongodb which contains all the tweet data.
    await collection.mapReduce(mapFunction,reduceFunction,
        {
            out: { replace: "Top_ten_hashtags" }
        }
    )
    topTen(db,callback);
}



var topTen = function (db, callback) {
    const collection = db.collection("Top_ten_hashtags");
    collection.find({}).toArray(function(err,docs) {
        docs.sort( (a,b) => b.value - a.value);
        console.log(docs.slice(0,10));           // slice - Leaves us with the ten most used hashtags
        callback(docs);
    });
}


