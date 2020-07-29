var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//DEFINE ALL ROUTES
app.post('/*', function(request, response) {
  response.redirect('/');
});

http.listen(process.env.PORT || 8000, function(){
  console.log('listening on *:8000');
});