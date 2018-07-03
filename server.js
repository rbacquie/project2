// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3300;

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// setting up the use of handle bars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

app.listen(PORT, function () {
  console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});