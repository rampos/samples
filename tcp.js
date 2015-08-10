var tcp = require("net");
var strftime = require("strftime");

var server = tcp.createServer(function (socket){
    var data = strftime("%F %R");
   console.log(data);
socket.end(data);
});
server.listen(process.argv[2]);
