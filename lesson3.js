var fileSystem = require('fs') //fs is short for "filesystem" It's a core node module
var buffer = fileSystem.readFileSync(process.argv[2])
var string = buffer.toString()
var numberOfLines = string.split('\n').length - 1
console.log(numberOfLines)