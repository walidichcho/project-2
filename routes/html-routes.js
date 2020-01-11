// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const isAuthenticated = require("../auth/middleware/isAuthenticated")

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });

    // add route loads the add.html page,
    // where users can enter new characters to the db
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/contact.html"));
    });

    // all route loads the all.html page,
    // where all characters in the db are displayed
    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/all.html"));
    });

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
    //
    app.get("/signin", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signin.html"));
    });
    //
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 
    //redirected to the signup page
    app.get("/members", isAuthenticated, function (req, res) {
        res.sendFile(path.join(__dirname, "../public/members.html"));
    });

};
