var discover = function( req, res ) {


	var commands =  {
			input : {
				fm: {
					name : 'Listen to FM',
					instructions : 'Enjoy the radio',
					endpoint : '/api/inputs/fm'
				},
				roku: {
					name : 'Use Roku',
					instructions: 'Grab that remote and enjoy',
					endpoint : '/api/inputs/roku'
				},
				phono: {
					name : 'Listen to Records',
					instructions: 'Start Playing that Vinyl',
					endpoint : '/api/inputs/phono'
				},
				tv: {
					name : "Watch Normal TV",
					instructions: "Use the TV remote",
					endpoint : '/api/inputs/tv'
				}
				
			},
			power : {
				on : {
					name : 'On',
					endpoint: '/api/power/on'
				},
				off : {
					name : 'Off',
					endpoint: '/api/power/off'
				}
			}
		}

	var response = {
			status : 'ok',
			'commands' : commands
		}
	res.send(response);
}






module.exports = discover;