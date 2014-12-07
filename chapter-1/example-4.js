var http = require('http');

var options = {
	 host: 'localhost',
	 port: 8124,
	 path: '/?file=secondary',
	 method: 'GET'
}

var processPublicTimeline = function(response) {
	// finished? ok, write data to a file
	console.log('finshed request');
}

for(var i = 0; i < 1000; i++) {
	http.request(options, processPublicTimeline).end();
}
