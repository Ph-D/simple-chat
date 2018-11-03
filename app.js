var express = require("express");
var app = express();

var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));

var path = __dirname + '/views/';

var messages = [];

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.post("/api/messages/save", function(req,res){
	console.log('Message posted: ' + JSON.stringify(req.body));
	var customer = {};
	customer.message = req.body.message;
	
	messages.push(customer);
	
	return res.send(customer);
});

app.get("/api/messages/all", function(req,res){
	return res.send(messages);
});

app.use("/",router);

app.listen(8080, function () {
  console.log('Listening on port 8080!')
})