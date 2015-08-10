var fs = require('fs')
var path = require('path')
 fs.readdir(process.argv[2],function(err, files){
 	if (err)
 	{
 		console.log('error');
 	}
 	var l;
 	files.forEach(function(file){
    		var s = path.extname(file);
      if (s == "."+process.argv[3])
   		{
   			console.log(file);
   		}
  });

});
