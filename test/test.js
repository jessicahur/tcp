var assert = require('chai').assert;
var fs = require('fs');
var runServer = require('../server');
var clientSide = require('../client');


describe('SIMPLE TCP', function(){

  it('should sucessfully create a unique file and save the correct content', function(done) {
    var message = 'This is a random test message';

    runServer(function(err, uniqueId) {
      if(err) return done(err);
      fs.readFile(uniqueId, function(err, data) {
        console.log(data);
        var fileBody = data.toString();
        assert.equal(fileBody, message);
        done();
      });
    });//end of runServer

    clientSide(message);
  });

});
