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


    app.get("/payment", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/payment.html"));
    });

    app.get("/home", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/home.html"));
    });

    app.get("/booking", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/booking.html"));
    });

    app.get("/safety", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/safety.html"));
    });

    app.get("/faq", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/safety.html"));
    });


    // add route loads the add.html page,
    // where users can enter new characters to the db
    app.get("/add", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/contact-us.html"));
    });

    // all route loads the all.html page,
    // where all characters in the db are displayed
    app.get("/all", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/all.html"));
    });

    app.get("/about", function (req, res) {
        res.sendFile(path.join(__dirname, "../app/public/about.html"));
    });

    app.get("/signup", function (req, res) {
        // If the user already has an account send them to the home page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../app/public/signup.html"));
    });
    //
    app.get("/signin", function (req, res) {
        // If the user already has an account send them to the home page
        if (req.user) {
            res.redirect("/home");
        }
        res.sendFile(path.join(__dirname, "../app/public/signin.html"));
    });
    //
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 

};
