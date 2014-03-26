var fm = {};
var sys = require('sys')
var exec = require('child_process').exec;
var child;


fm.the_current = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 tuning:089.90", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to FM',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stdearr;
		}
		res.send(response);
	});

}

fm.news = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 tuning:091.10", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Switched to FM',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stdearr;
		}
		res.send(response);
	});

}



module.exports = fm;