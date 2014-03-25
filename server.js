// http://nodejs.org/api.html#_child_processes
var sys = require('sys')
var exec = require('child_process').exec;
var child;
var power = require('./routes/power')
var inputs = require('./routes/inputs');
var roku = require('./routes/roku');


var express = require('express');
var app = express();
app.set('title', "Conner's Home Theatre");
app.get('/api/inputs/fm', inputs.fm);
app.get('/api/inputs/roku', inputs.roku);
app.get('/api/roku/channel/:channel', roku.channel);
app.get('/api/roku/buttons/:button', roku.buttons);
app.get('/api/power/on', power.on);
app.get('/api/power/off', power.off);

var server = app.listen(3000, '192.168.2.1', function() {
    console.log('Listening on port %d', server.address().port);
});