// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var tables = [];
var waitList = [];

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// HTML ROUTES
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// API ROUTES
app.get("/api/tables", function(req, res) {
  res.json(tables);
});

app.get("/api/wait-list", function(req, res) {
  res.json(waitList);
});

app.post("/api/tables", function(req, res) {
  if(tables.length < 5) {
    //Add to table
    tables.push(req.body);
    return true;
  } else {
    // Add to wait list
    waitList.push(req.body);
    return false;
  }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});






