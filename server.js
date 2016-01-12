var net = require('net');
var fs = require('fs');

function runServer(callback){
  var server = net.createServer(function (duplexStream) {
    console.log('client connected');

    duplexStream.on('end', function() {
      console.log('client disconnected');
    });

    duplexStream.on('data', function(data) {
      var uniqueId = Date.now().toString()+'.txt';
      var dataBody = data.toString();
      fs.writeFile('../'+uniqueId, dataBody, callback);
    });
  });

  server.listen(9000, function() {
    console.log('server bound, listening on port 9000');
  });
}

runServer();
