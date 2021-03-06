var http = require('http');
var fs = require('fs');


// Write Out Numbers
function writeNumbers(res) {
	
	var counter = 0;
	
	for(var i = 0; i<100; i++) {
		counter++;
		res.write(counter.toString() + '\n');
	}
	
}

// Create HTTP Server
http.createServer(function(req, res) {

	var query = require('url').parse(req.url).query;
	var app = require('querystring').parse(query).file + ".txt";
	
	// Content header
	res.writeHead(200, {'Cotent-Type': 'text/plain'});
	
	// Write out numbers
	writeNumbers(res);
	
	setTimeout(function() {
		
		console.log('opening ' + app);
		
		fs.readFile(app, 'utf8', function(err, data) {
			if(err) {
				res.write('Could not find or open file for reading');		
			} else {
				res.write(data);
			}
			res.end();			
		});
		
	}, 2000);
	
	
}).listen(8124);


console.log('Server running on 8124/');
