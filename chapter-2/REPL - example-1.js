qs = require("querystring");

/*
RETURNED:
{ unescapeBuffer: [Function],
  unescape: [Function],
  escape: [Function],
  encode: [Function],
  stringify: [Function],
  decode: [Function],
  parse: [Function] }
*/

val = qs.parse('file=main&file=secondary&test=one').file;

/*
RETURNED:
[ 'main', 'secondary' ]
*/


var test = function(x,y) {
	var val = x*y;
	return val;
}

test(3,4);

/*
RETURNED:
12
*/

var test = function(x,y) {
	var test2 = function(x,y) {
		return x*y;
	}
	return test2(x,y);
}

/*
RETURNED:
12
*/

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("hello person");
}).listen(8124);


/*
{ domain: null,
  _events: 
   { request: [Function],
     connection: [Function: connectionListener],
     clientError: [Function] },
  _maxListeners: 10,
  _connections: 0,
  connections: [Getter/Setter],
  _handle: 
   { fd: 12,
     writeQueueSize: 0,
     onconnection: [Function: onconnection],
     owner: [Circular] },
  _usingSlaves: false,
  _slaves: [],
  allowHalfOpen: true,
  httpAllowHalfOpen: false,
  timeout: 120000, }

*/


console.log(global)


var ssRe = /^\d{3}-\d{2}-\d{4}$/;
ssRe.test('555-555-5555');




