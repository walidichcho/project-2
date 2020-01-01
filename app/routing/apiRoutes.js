var friends = require("../data/drivers");

module.exports = function (app) {
    // Return all friends found in friends.js as JSON
    app.get("/api/drivers", function (req, res) {
        res.json(drivers);
    });

    app.post("/api/drivers", function (req, res) {
        console.log(req.body.scores);

        // Receive user details (name, photo, scores)
        var user = req.body;

        // parseInt for scores


        // default friend match is the first friend but result will be whoever has the minimum difference in scores
        var bestDriverIndex = 0;

        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for (var i = 0; i < drivers.length; i++) {

            for (var j = 0; j < drivers[i].scores.length; j++) {
                if (user.scores === drivers[i].scores) {
                    bestDriverIndex = i;

                }

            }

            // if there is a new minimum, change the best friend index and set the new minimum for next iteration comparisons

        }

        // after finding match, add user to friend array
        drivers.push(user);

        // send back to browser the best friend match
        res.json(drivers[bestDriverIndex]);
    });
}
