
var express = require('express');

var app = express();

var server = app.listen(8000, function(){
    console.log('ChatAppServer: listening Server request on 8000' );
});


//using static file
app.use(express.static('website'));
