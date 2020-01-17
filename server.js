var express = require("express");
var bodyParser = require("body-parser");
const db = require("./models");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./auth/middleware/passport");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("app/public"));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/html-routes.js")(app);
require("./routes/auth_routes.js")(app);

app.get("/health", (req, res) => {
    res.json({ success: true })
})
// Starts the server to begin listening
// =============================================================
db.sequelize.sync().then(() => {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
})

