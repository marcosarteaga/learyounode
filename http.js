var http = require('http');
/*
http.createServer(function(req,res){
	res.write("hello World!");
	res.end();
}).listen(8080);
*/



function secreta(text,puerto,callback){
	http.createServer(function(req,res){
	res.write(text);
	res.end();
	callback(req);
}).listen(puerto);
}
secreta("Hello bro",8080,llamada);
var contador=0;
function llamada(data){
	console.log(data);
	console.log(contador);
	contador++;
};