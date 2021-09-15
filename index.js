// import express
var express = require('express');
// i create an app server
var app = express();
var port = process.env.PORT || 3000;

// when user call / API from the browser, I will return Hello world!
app.get('/', function(req,res) {
	res.send("Hello world!");
});
// when user call /hello from the browser, I will return Hello everyone!
app.get('/hello', function(req,res) {
	res.send("Hello everyone!");
})
// when user call /goodbye from the browser, it will pass the parameter
app.get('/goodbye/:name', function(req,res) {
	// from the request, get the parameter labeled with name
	res.send('Goodbye '+req.params.name);
})

// when use call /bonjour from an app as a Postman
// I will show bonjour and the params sent in the body
app.post('/bonjour', function(req,res) {
	// data that will be sent through the body
	res.send('Bonjour ');
})
// I will listen to port 3000
app.listen(port);