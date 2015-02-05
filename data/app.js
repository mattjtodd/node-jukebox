var restify = require("restify");
var mongojs = require("mongojs");

var ip_addr = '127.0.0.1';
var port    =  '8080';

var server = restify.createServer({
    name : "jukebox"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
server.use(restify.jsonp());

var connection_string = '192.168.59.103:27017/myapp';
var db = mongojs(connection_string, ['jukebox']);
var albums = db.collection("albums");

var PATH = '/albums'
server.get({path : PATH , version : '0.0.1'}, findAllAlbums);
server.post({path : PATH , version: '0.0.1'}, postNewAlbum);

function findAllAlbums(req, res , next){
    res.setHeader('Access-Control-Allow-Origin','*');
    albums.find().limit(20).sort({postedOn : -1} , function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(200 , success);
            return next();
        }else{
            return next(err);
        }
    });
}

function postNewAlbum(req , res , next){
    var album = {};
    album.title = req.params.title;
    album.artist = req.params.artist;
    album.genre = req.params.genre;

    res.setHeader('Access-Control-Allow-Origin','*');

    albums.save(album , function(err , success){
        console.log('Response success '+success);
        console.log('Response error '+err);
        if(success){
            res.send(201 , album);
            return next();
        }else{
            return next(err);
        }
    });
}

server.listen(port ,ip_addr, function(){
    console.log('%s listening at %s ', server.name , server.url);
    console.log('Power Amazeballs');
});
