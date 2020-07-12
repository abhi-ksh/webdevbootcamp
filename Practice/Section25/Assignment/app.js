// express function callback
var express = require("express");
var app = express();
// define http requests agains the app. (get)

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    console.log(animal);
    var sounds = {
        cow: "MOO!",
        pig: "OINK!",
        horse: "NEIGH!",
        dog: "WOOF!",
        duck: "QUACK"
    }
    var sound = sounds[animal];
    // switch (animal) {
    //     case "cow":
    //         sound = "MOO!";
    //         break;
    //     case "pig":
    //         sound = "OINK!";
    //         break;
    //     case "horse":
    //         sound = "NEIGH!";
    //         break;
    //     case "dog":
    //         sound = "WOOF!";
    //         break;
    //     case "duck":
    //         sound = "QUACK!";
    //         break;
    //     default:
    //         sound = "#$@$%^&";
    // }
    res.send("The " + animal + " says " + sound );
});

app.get("/repeat/:phrase/:count", function(req, res){
    var phrase = req.params.phrase;
    var count = req.params.count;
    var message = "";
    for(let i = 0 ; i < count; i++){
        message += phrase + " ";
    }
    res.send(message);
});


app.get("*", function(req, res){
    res.send("Page not found.. What are you doing with your life?");
});


app.listen(3000, function() {
    console.log("Express is now listening on port: 3000");
});