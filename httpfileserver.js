var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req,res){

  var fsstream = fs.createReadStream(process.argv[3])
  fsstream.pipe(res);
});
server.listen(process.argv[2]);
