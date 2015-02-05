var express = require('express');
var app = express();

// make the static public folder available
app.use(express.static(__dirname + '/public'));

// listen on port 3001
app.listen(process.env.PORT || 3001);

// export the module
module.exports = app;
