const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;

var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Front/"));


app.get("/linguica", function(req,res){
    console.log("Enviei!");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(JSON.stringify({

        nome:"vinhado"

    }));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
