var express = require("express");
const db = require("./models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory to be served
app.use(express.static("app/public"));

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/html-routes.js")(app);

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

