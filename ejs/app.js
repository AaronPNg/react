var express = require('express');

var app = express();

//sample data
var data = {
    groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
    }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
    }]
};

app.get('/', function(request, response){
	response.render("index.ejs")
});

app.get('/list', function(request, response){
    console.log(data)
	response.render("list.ejs",{data: data})
});


app.listen(3000, function(){
	console.log('Example app listening on port 3000!');
});