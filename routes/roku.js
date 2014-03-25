var sspd = require('node-ssdp');
var Roku = require('roku');
 var device = new Roku('http://192.168.2.96:8060/');
var client = new sspd({
	log: true
})

roku = {};
roku.channel = function( req, res ) {
	  var channel = req.params.channel;;
	 
	console.log(channel); 
	  device.press(Roku.HOME);
	  device.delay(1000);

	  device.launch(channel, function() {
	    process.exit(0);
	  });

	var response = {
			status : 'ok',
			message : 'Switched to fm',
		}
		
	res.send(response);
};


roku.buttons = function( req, res ) {
	var button = req.params.button;;
	console.log(button);
	if(button === 'down') {
	  device.press(Roku.DOWN);
	}
	if(button === 'up') {
	  device.press(Roku.UP);
	}
	if(button === 'play') {
	  device.press(Roku.PLAY);
	}
	if(button === 'right') {
	  device.press(Roku.RIGHT);
	}
	if(button === 'left') {
	  device.press(Roku.LEFT);
	}
	if(button === 'enter') {
	  device.press(Roku.ENTER);
	}
	if(button === "select") {
		device.press(Roku.SELECT);
	}
	var response = {
			status : 'ok',
			message : 'Switched to fm',
		}
		
	res.send(response);
};

	

module.exports = roku;