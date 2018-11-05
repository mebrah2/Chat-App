
var express = require('express');
var socket = require('socket.io');

//setting up App
var app = express();

var server = app.listen(8000, function(){
    console.log('ChatAppServer: listening Server request on 8000' );
});


//using static file
app.use(express.static('website'));


//Setting up socket
var io = socket('server');
io.on('connection', function(){

console.log("ChatAppServer: backend server connection on");

})
