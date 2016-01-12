var net = require('net');

var client = net.connect({port:9000}, function() {
  console.log('connected to server at port 9000');
  client.write('hi!');

  client.on('end', function() {
    console.log('disconnected from server');
  });

  process.on('exit', function() {
    client.end();
  });
});
