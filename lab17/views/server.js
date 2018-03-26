//server.js
//loads the stuff we need
var express = require('express');
var app = express();

//set the view engine to ejs
app.set('view engine', 'ejs');

//Now use res.render to load up an EJS-view file

//index
app.get('/', function(req,res){
  res.render('pages/index');
});

//about
app.get('/about', function(req,res){
  res.render('pages/about;');
});

app.listen(8080);
console.log('8080 is a magical port');
