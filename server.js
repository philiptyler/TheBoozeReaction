var express = require('express');
var app = express();

app.use(express.static(__dirname+'/build'));

var singlePageHandler = function(req, res){
    res.sendFile(__dirname+'/build/index.html');
};

app.get('/establishments',  singlePageHandler);
app.get('/establishments*', singlePageHandler);
    
app.listen(8585, function(){
    console.log('development server running on localhost:8585');
});
