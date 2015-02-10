var express = require("express");
var app = express();

// make the static public folder available
app.use(express.static("/public"));

// listen on port 3001
app.listen(process.env.PORT || 3001);

app.listen(process.env.PORT);

// export the module
module.exports = app;
