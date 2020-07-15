const express = require("express");
var app = express();
app.set("view engine", "ejs");

var axios = require("axios");
var bodyParser = require("body-parser");
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

var campgrounds = [
    {

        name: "Florida Caverns State Park",
        location: "Marianna",
        image: "https://www.floridastateparks.org/sites/default/files/styles/callout/public/media/image/26820302_Smx5YTYpU3OL34xmglvUp1t18q0ABlZBh_cmyk_l.jpg"

    },
    {
        name: "Topsail Hill Preserve State Park", 
        location: "Santa Rosa Beach",
        image: "https://www.floridastateparks.org/sites/default/files/styles/callout/public/media/image/Topsail_Hill_Preserve_State_Park_SBrT2VPAdrHT368RssIyQNu18q0ABlZBh_0.jpg"

    },
    {
        name: "Anastasia State Park",
        location: "St. Augustine",
        image: "https://www.floridastateparks.org/sites/default/files/styles/callout/public/media/image/Anastasia.jpg"
    }
];

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/campgrounds", (req, res) => {
    res.render("camps", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.sitename;
    var location = req.body.location;
    var image = req.body.imageurl;
    var newSite = { name: name, 
        location: location,
        image: image
    }
    campgrounds.push(newSite);
    res.redirect("/campgrounds");
    // res.send("You have hit the post route!");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("newsite");
});

app.listen(3000, () => {
    console.log("YelpCamp Server is listening at port 3000");
});