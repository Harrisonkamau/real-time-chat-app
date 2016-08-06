//Require node modules
var app = require('express')();
var http = require('http').Server(app);

//create a home route
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//start the server
http.listen(3000, function(){
  console.log('listening on port:3000');
});