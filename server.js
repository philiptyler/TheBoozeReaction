#!/usr/bin/env node

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/build'));

var singlePageHandler = function(req, res){
    res.sendFile(__dirname+'/build/index.html');
};

app.get('/establishments',  singlePageHandler);
app.get('/establishments*', singlePageHandler);
    
var port = process.argv[2] || 8585;
app.listen(port, function(){
    console.log('development server running on localhost:'+port);
});
