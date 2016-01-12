var net = require('net');

function clientSide (content) {
  var client = net.connect({port:9000}, function() {
    console.log('connected to server at port 9000');
    client.write(content);

    client.on('end', function() {
      console.log('disconnected from server');
    });

    process.on('exit', function() {
      client.end();
    });
  });
}

module.exports = clientSide;
