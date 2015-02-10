// require mongodb module
var mongodb = require('mongdb');

// get the mongodb client
var client = mongodb.MongoClient;

// Get the url of the mongodb instance from environment vars
var url = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL|| "mongodb://localhost:27017/penguin";

// set the albums container name;
var albumsName = "albums";

// export the url of the mongdb connection
exports.url = function() {
    return url;
};

// export the findAlbum
exports.findAlbum = function(id, callback) {
}
