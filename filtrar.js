var fs  = require('fs')
var dir = process.argv[2]
var extension = "." + process.argv[3]


console.log(dir)
console.log(extencion)

fs.reaadir(dir,function callback)

fs.readdir(dir,function callback (err,list)){
	console.log(list)

})
