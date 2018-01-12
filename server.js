
// DEPENDENCIES

var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// listener

app.listen(PORT, function(){
    console.log("Connected: " + PORT);
});