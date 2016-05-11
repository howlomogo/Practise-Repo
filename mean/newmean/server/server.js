// This is the basic example of angular with express and node, 
// Id say work with this for a while, then look at modularising it.


var express = require("express");
var app = express();
var cors = require("cors"); // Needed to use cross origin, its just needed leave it at that, so you can gt info from the db
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());
// Use proper cross origin


var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/newmean');

var Product = mongoose.model('Product', {name: String});

app.get("/", function (req, res) {
  Product.find(function (err, products) {
    res.send(products);
  })
})

app.get("/find", function (req, res) {
  Product.find({ name: 'matt' }, function (err, docs) {
    res.send(docs);
    console.log(docs + " IS DOCS");
  });
})

app.post("/add", function (req, res) {
  var name = req.body.name; // Uses body pareser
  var product = new Product({name: name});
  product.save(function (err) {
    res.send();
  })
})

app.delete("/deleteall", function (req, res) {
  Product.remove(function (err, products) {
    res.send();
  })
})

app.delete("/delete", function (req, res) {
  Product.remove({ name: 'matt'}, function (err, products) {
    res.send();
  })
})

app.listen(3000);