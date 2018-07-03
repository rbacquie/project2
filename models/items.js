// Import the ORM to create functions that will interact with the database.
var orm2 = require("../config/orm2.js");

var cart = {
  all: function (cb) {
    orm2.all("items", usernameS, function (res) {
      cb(res);
      console.log("test");
    });
  },
  // The variables cols and vals are arrays.
  create: function (usernameS, cols, vals, cb) {
    orm2.create("items", usernameS, cols, vals, function (results) {
      cb(results);
    });
  },
  selectWhere: function (tableInput, usernameS, colToSearch, valOfCol, cb) {
    orm.selectWhere("items", usernameS, colToSearch, valOfCol, function (res) {
      cb(res);
    });
  },
  update: function (usernameS, objColVals, condition, cb) {
    orm2.update("items", usernameS, objColVals, condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (trucksController.js).
module.exports = cart;
