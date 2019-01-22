var fs = require('fs');
var buf =process.argv[2];

fs.readFile(buf,function(error,data){
	var lines = data.toString().split('\n').length- 1
	console.log(lines)


})


