// Create User Model

var orm = require("../config/orm.js");

var users = {
    all: function(cb) {
        orm.all("users", function(res) {
            cb(res);
        });
    },

    // this is the create function for users table in the data base
    create: function(cols_vals, cb) {
        orm.create("users", cols_vals, function(err, res) {
            cb(err, rows);
        });
    },

    // update funtion that updates the information stored on the database
    update: function(objColVals, condition, cb) {
        orm.update("users", objColVals, condition, function(err, res) {
            cb(err, res);
        })
    },

    selectWhere: function(cols, vals, cb) {
        orm.selectWhere("users", cols, vals, function(err, res) {
            cb(err, rows);
        });
    },

    delete: function(condition, cb) {
        orm.delete("users", condition, function(res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller (catsController.js).
module.exports = user;