// Cool as hell,
// remember  start mongod in terminal
// and run node server (this file name)
// This does make sense and it works

var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/test');

// Define a schema  - (plan)
var Cat = mongoose.model('Cat', { name: String});

// better way to do this? dunno
var kitty = new Cat({ name: 'Dogggy' });
kitty.save(function (err) {
  if (err) {
    console.log('meow');
  }
});

// when you have localhost:3000/Cat
// respond with everything in the Cat collection
app.get('/Cat', function(req, res) {
  mongoose.model('Cat').find(function(err, Cat) {
    res.send(Cat);
  });
});

app.get('/Cat2', function(req, res) {
  Cat.find({ '_id': '565e41e579a828c40c09ae30' }, function (err, docs) {
    console.log(docs);
      res.send(docs);
  });  
});

app.get('/', function (req, res) {
  res.send('Hellhuiohuohniouo World');
});

app.listen(3000);