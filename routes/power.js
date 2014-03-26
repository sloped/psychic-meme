var power = {};
var sys = require('sys')
var exec = require('child_process').exec;
var child;

power.on = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 system-power:on", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Turning On',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}
power.off = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 system-power:standby", function (error, stdout, stderr) {
		var response = {
			status : 'ok',
			message : 'Turning Off',
			full : stdout
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}
power.status = function( req, res ) {

	child = exec("onkyo -t 192.168.2.147 system-power:query", function (error, stdout, stderr) {
		var power_status = 'off';
		if(stdout.indexOf("'system-power', 'on'") !== -1) {
			power_status = 'on';
		}

		var response = {
			status : 'ok',
			system_status : power_status,
		}
		if (error !== null) {
			response.status = 'error';
			response.error = stderr;
		}
		res.send(response);
	});

}

module.exports = power;