
// LOAD DATA

var friendsList = require("../data/friends");

// ROUTING

module.exports = function (app) {

    app.get("/all", function(req, res){
        res.json(friendsList);
    })

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
    app.post("/api/new", function (req, res) {
        var newFriend = req.body;
        console.log(newFriend);

        friendsList.push(newFriend);
        res.json(newFriend);
    });
}