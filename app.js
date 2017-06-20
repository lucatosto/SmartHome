const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3100;

http.listen(port, function(){
    console.log('listening on *:'+port);
});

app.get(['/','/index'], function (req, res) {
    res.sendFile(__dirname + '/index.html');

});

app.get(['/test'], function(req, res){
  var data = {temp: '23'}
  res.sendFile(__dirname + '/auto.html');
  console.log("dati: "+data.temp);
});

io.on('connection', function(socket){
  console.log('auto connessa');
    socket.emit('auto', { hello: 'questa è la risposta del server al client',
                          temp: '23'});

    socket.on('android', function (data) {
        console.log(data.temp);
  });
});
