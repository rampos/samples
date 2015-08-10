module.exports = listfilter;

function listfilter (p,ext,node) {
  var fs = require('fs')
  var path = require('path')
 fs.readdir(p,function(err, files){
 	if (err)
 	{
 	return node(err);
 	}
 	var l = [];
 	files.forEach(function(file){
    		var s = path.extname(file);
      if (s == "."+ext)
   		{
   			l.push(file);
   		}
  });
  node(null,l);
});
}
