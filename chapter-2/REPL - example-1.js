/* 
CHAPTER 2
COMMAND LINE EXPERIMENTS WIHT REPL 
*/

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

var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("hello person\n");
}).listen(8124);


/*
{ domain: 
   { domain: null,
     _events: { error: [Function] },
     _maxListeners: undefined,
     members: [] },
  _events: 
   { request: [Function],
     connection: [Function: connectionListener],
     clientError: [Function] },
  _maxListeners: undefined,
  _connections: 0,
  _handle: 
   { fd: 20,
     reading: false,
     owner: [Circular],
     onread: null,
     onconnection: [Function: onconnection],
     writeQueueSize: 0 },
  _usingSlaves: false,
  _slaves: [],
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  _connectionKey: '4:null:8124' 
}

*/

var myFruit = function(fruitArray, pickOne) {
    return fruitArray[pickOne - 1];
}

fruit = ['apples','oranges','limes','cherries'];

myFruit(fruit,2);

/*
'oranges'    
*/


console.log(global)


var ssRe = /^\d{3}-\d{2}-\d{4}$/;
ssRe.test('555-555-5555');

var decRe = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
decRe.test(56.5);

/*
.clear
.exit
.help
.load
.save
*/

env NODE_NO_READLINE=1 rlwrap -ppurple node
env NODE_NO_READLINE=1 rlwrap -ppurple -S "::>" Node
env NODE_NO_READLINE=1 rlwrap -ppurple -S "::>" node
alias node="env NODE_NO_READLINE=1 rlwrap -ppurple node"

var repl = require("repl");
repl.start([prompt],[stream], [eval], [useGlobal], [ignoreUndefined])


var repl = require("repl");
repl.start("node via stdin > ",null, null, null, true);




var repl = require("repl");
//var net = require("net");

repl.start("node via stdin > ",null, null, null, true);

/*
net.createServer(
    function (socket) {
        repl.start("node via TCP socket > ", socket);
    }
).listen(8124);
*/



var repl = require("repl");
var context = repl.start(">> ",null, null, null, true).context;

context.http = require("http");
context.util = require("util");
context.os = require("os");




/*
   RUN AS BASH ADD

#!/usr/local/bin/node
# chmod u+x replcontext.js
# ./replcontext.js


*/



