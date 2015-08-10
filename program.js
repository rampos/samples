var mymodule = require("./mymodule.js");
mymodule(process.argv[2],process.argv[3], function(err,data) {
  if (err)
  {
    console.log("Error has Occured");
  }
  data.forEach(function (d){
  console.log(d);
});
});
