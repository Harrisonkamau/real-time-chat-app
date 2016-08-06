//Require node modules
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//create a home route
app.get('/', function(req, res){
  res.sendFile('index.html');
});

//using socket.io
io.on('connection', function(socket){
  console.log('A user is connected');
});
//start the server
http.listen(3000, function(){
  console.log('listening on port:3000');
});