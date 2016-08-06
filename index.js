//Require node modules
var path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//create a home route
app.get('/', function(req, res){
  res.sendFile(path.resolve('index.html'));
});

//using socket.io
//listen on the connection event
io.on('connection', function(socket){
   socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
//  socket.on('disconnect', function(){
//    console.log('Uh, another user has been disconnected');
//  });
});
//start the server
http.listen(3000, function(){
  console.log('listening on port:3000');
});