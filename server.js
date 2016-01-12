var net = require('net');
var fs = require('fs');

function runServer(callback){
  var clients = [];
  var server = net.createServer(function (duplexStream) {
    console.log('client connected');

    duplexStream.on('end', function() {
      console.log('client disconnected');
    });

    duplexStream.on('data', function(data) {
      var uniqueId = '../'+Date.now().toString()+'.txt';
      console.log(typeof uniqueId);

      var dataBody = data.toString();

      fs.writeFile(uniqueId, dataBody, function(err){
        callback(err, uniqueId); //need the anonymous function because if I do callback.call(null, uniqueID), callback does not return anything, thus undefine is passed as a callback of the write function
      });
    });
  });

  server.listen(9000, function() {
    console.log('server bound, listening on port 9000');
  });
}

module.exports = runServer;

