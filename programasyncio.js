var fs = require('fs')
 fs.readFile(process.argv[2],function (err,data) {
 	if (!err)
 	{
 		var s = data.toString();
		var lines = s.split('\n');
		console.log(lines.length -1);
 	}

 	}
 	);
 


