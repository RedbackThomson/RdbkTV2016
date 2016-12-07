(function() {
  var express = require('express');
  var http = require('http');
  var path = require('path');
  var static_dir = require('serve-static');
  var throng = require('throng');

  var WORKERS = process.env.WEB_CONCURRENCY || 1;
  //Create workers on all the threads
  throng({
    workers: WORKERS,
    lifetime: Infinity
  }, start);

  function start() {
    var app = express();
    var port = process.env.PORT || 3000;
    console.log("PORT", port);
    var server = app.listen(port);

    app.use(express.static(__dirname + '/public/'));

    http.createServer(app).listen(app.get(port), function(){
      console.log('Express server listening on port ' + port + ' on ' + WORKERS + ' worker(s)');
    });
  }
}).call(this);