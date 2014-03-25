var input = {};
var sys = require('sys')
var exec = require('child_process').exec;
var child;


input.fm = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 input-selector:fm", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to fm',
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

module.exports = input;