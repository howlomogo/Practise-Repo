// Run with node module1
// Require module2 file = module 2 exports variables.
// m2 is an object

var m2 = require('./module2');
// console.log(m2);

// You can make a module a function
// m2();

// Require, looks in the node modules folder by DEFAULT
// The jquery (or whatevers node modules) PACKAGE file will say which file to load
var j = require('jquery');
var _ = require('underscore');

// You can log these modules if you want module
// console.log(j);
// console.log(_);

// http is built into node
var http = require('http');

// If you got onto port 3000, localhost:3000 it will return got a request in log
// And will print hi to the web page
var server = http.createServer(function(request, response) {
  console.log('got a request');
  response.write('hi');
  response.end();
});

server.listen(3000);