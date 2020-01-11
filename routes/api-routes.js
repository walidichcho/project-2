
// contact buton fanction:
var Contact = require("../models/contact.js");

// Routes
// =============================================================
module.exports = function (app) {
    // Search for Specific Character (or all characters) then provides JSON
    app.get("/api/:contacts?", function (req, res) {
        if (req.params.contacts) {
            // Display the JSON for ONLY that character.
            // (Note how we're using the ORM here to run our searches)
            Contact.findOne({
                where: {
                    name: req.params.contacts
                }
            }).then(function (result) {
                return res.json(result);
            });
        } else {
            Contact.findAll().then(function (result) {
                return res.json(result);
            });
        }
    });

    // If a user sends data to add a new character...
    app.post("/api/new", function (req, res) {
        // Take the request...
        var contact = req.body;

        // Create a routeName

        Contact.create({

            name: contact.name,
            email: contact.email,
            subject: contact.subject,
            message: contact.message
        });

        res.status(204).end();
    });
};


// --------------------------------------------------------

// var drivers = require("../data/drivers");

// module.exports = function (app) {
//     // Return all friends found in friends.js as JSON

//     app.get("/api/drivers", function (req, res) {
//         res.json(drivers);
//     });

//     app.post("/api/drivers", function (req, res) {
//         console.log(req.body.pickUp);

//         // Receive user details (name, photo, pickup)
//         var user = req.body;

//         // parseInt for scores


//         // default driver match is the first driver but result will be whoever has the minimum difference in scores
//         var bestDriverIndex = 0;

//         // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
//         //  whatever the difference is, add to the total difference
//         for (var i = 0; i < drivers.length; i++) {

//             for (var j = 0; j < drivers[i].scores.length; j++) {
//                 if (user.city === drivers[i].pickUp) {
//                     bestDriverIndex = i;

//                 }

//             }

//             // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons

//         }

//         // after finding match, add user to friend array
//         drivers.push(user);

//         // send back to browser the best friend match
//         res.json(drivers[bestDriverIndex]);
//     });

// }