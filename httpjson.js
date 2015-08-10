var http = require("http");
var url = require("url");
var server = http.createServer(function(req,res){
var r = {};
  var requrl = url.parse(req.url,true);
  var dt;

  if (requrl.query["iso"])
  {
  dt = new Date(requrl.query["iso"]);
  }
  if (requrl.pathname == '/api/parsetime')
  {
    r["hour"]=dt.getHours();
    r["minute"]= dt.getMinutes();
    r["second"]= dt.getSeconds();

    res.writeHead(200, {'Content-Type':'applicaton/json'});
    res.end(JSON.stringify(r));
  } else if (requrl.pathname == '/api/unixtime')
  {
    r["unixtime"] = dt.getTime();//Date.UTC(dt.getFullYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds());
    res.writeHead(200, {'Content-Type':'applicaton/json'});
    res.end(JSON.stringify(r));
  }
});

server.listen(process.argv[2]);
