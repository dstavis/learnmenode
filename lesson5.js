var fileSystem = require('fs')
var path = require('path')

var filterBack = function(item){
  return path.extname(item).slice(1) == process.argv[3]
}

var callback = function(error, list){
  var filteredList = list.filter(filterBack)
  for(var item in filteredList){
    console.log(filteredList[item])
  }
}


fileSystem.readdir(process.argv[2], callback)