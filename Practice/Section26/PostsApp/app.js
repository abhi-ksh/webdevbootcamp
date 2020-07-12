// declare and assign the app function call
var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

//add routes
app.get("/", function (req, res) {
    // res.send("Hello Express!");meme
    res.render("home");
})

app.get("/pets/:petName", function (req, res) {
    var petName = req.params.petName;
    res.render("pets", { petName: petName});
})


app.get("/posts", function (req, res) {
    var posts = [
        {
            title: "Have you seen my dog?",
            author: "Anonym"
        },
        {
            title: "Have I met your mother?",
            author: "WhoHas?"
        },
        {
            title: "This is crazy",
            author: "privateAccount"
        }
    ];
    res.render("posts", { posts: posts});
})

//listen
app.listen(3000, function () {
    console.log("Express is listening on port 3000");
})