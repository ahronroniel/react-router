// const showAppName = require('./app')

// showAppName('mose')

// console.log('hello jbh');

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello jbh!');
}).listen(8070);