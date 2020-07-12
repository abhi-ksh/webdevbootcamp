var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


//declare outside the route
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilu"];

app.get("/", function(req, res){
    res.render("home");
});

app.get("/friends", (req, res) => {
    res.render("friends", { friends: friends });
});

app.post("/addnewfriend", (req, res) => {
    var newFriend = req.body.friend;
    friends.push(newFriend);
    // res.render("newfriend")
    res.redirect("/friends");
});

app.listen(3000, e => console.log("listening on port 3000"));