// http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').exec;
var child;
var power = require('./routes/power')
var inputs = require('./routes/inputs');
var roku = require('./routes/roku');
var discover = require('./routes/discover');


var express = require('express');
var app = express();

//config 

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.set('title', "Conner's Home Theatre");


//index 
//

app.get('/', function( req, res ) {
	res.render('home', {
		title: 'Home Theatre'
	})
});
app.get('/api/discover', discover);

//Inputs 
app.get('/api/inputs/fm', inputs.fm);
app.get('/api/inputs/roku', inputs.roku);
app.get('/api/inputs/tv', inputs.tv);
app.get('/api/inputs/phono', inputs.phono);

//Roku
app.get('/api/roku/channel/:channel', roku.channel);
app.get('/api/roku/buttons/:button', roku.buttons);




//Power
app.get('/api/power/status', power.status);
app.get('/api/power/on', power.on);
app.get('/api/power/off', power.off);

var server = app.listen(3000, '192.168.2.1', function() {
    console.log('Listening on port %d', server.address().port);
});