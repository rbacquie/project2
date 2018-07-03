// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
// var users = require('../models/users.js')
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = function (req, res, next){
  
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/signup");
}

module.exports = function (app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../htmlstuff/login.html"));
  });

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/signup", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/signup.html"));
  });

  app.get("/search", function (req, res) {
    res.render("index");
  });
  // If no matching route is found default to home

  app.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/index.html"));

  });
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../htmlstuff/index.html"));

  });
  
};

