
// LOAD DATA

var friendsList = require("../data/friends");

// ROUTING

module.exports = function (app) {

    app.get("/api/friends", function(req, res){
        res.json(friendsList);
    });

    app.get("/api/:friendsList", function (req, res) {
        var friend = req.params.friendsList;
        if (friend) {
            console.log(friend);

            for (var i = 0; i < friendsList.length; i++) {
                if (friend === friendsList[i].routeName) {
                    return res.json(friendsList[i]);
                }
            }
            return res.json(false);
        }
        
        res.json(friendsList);
    });



    // utilize Post to add newfriend
    app.post("/api/friends", function (req, res) {
        var userInput = req.body;
        var userScores = userInput.scores;
        // var userScores = req.body.scores;
        var scoresArray = [];
        var match = 0;

        for(var i =0; i < friendsList.length; i++) {
            var diff = 0;
            for(var j = 0; j < userScores; j++) {
                diff += (Math.abs(friendsList[i].scores[j] - userScores[j]));
            }
            scoresArray.push(diff)
        }

        for(var i =0; i < scoresArray.length; i++) {
            if(scoresArray[i] <= scoresArray[match]) {
                match = i
            }
        }

        var matchFound = friendsList[match]
        

        friendsList.push(matchFound);
        res.json(matchFound );
    });
};

