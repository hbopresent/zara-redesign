var express = require("express");
var app = express();
var http = require("http").Server(app);
// path
app.use("/app", express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
  res.sendfile("index.html");
});
// server port
http.listen("60000", function() {
  console.log("Welcome ZARA!!");
});
