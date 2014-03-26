var input = {};
var sys = require('sys')
var exec = require('child_process').exec;
var child;


input.fm = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 input-selector:fm", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to FM',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}

input.roku = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 input-selector:cbl", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to Roku',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}

input.tv = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 input-selector:tv", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to TV',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}
input.phono = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 input-selector:phono", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to Record Player',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}

module.exports = input;