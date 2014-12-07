var http = require('http');

http.createServer(function(req, res) {

	//Content Header
	res.writeHead(200, {'content-type': 'text/plain'});
	
	// Write Message 
	res.end("hello, World!\n");
	
}).listen(8124);