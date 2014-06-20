var fileSystem = require('fs')

var callback = function(error, data){
  var string = data.toString()
  var lines = string.split("\n").length - 1
  console.log(lines)
}

fileSystem.readFile(process.argv[2], "utf8", callback)

