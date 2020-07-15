const express = require("express");
var app = express();
app.set("view engine", "ejs");

var axios = require("axios");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/yelp_camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const cgSchema = mongoose.Schema({
  name: String,
  location: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", cgSchema)

// const g1 = new Campground({
//     name: "Anastasia State Park",
//     location: "St. Augustine",
//     image: "https://www.floridastateparks.org/sites/default/files/styles/callout/public/media/image/Anastasia.jpg",
//     description: "Anastasia State Park is a Florida State Park located on a peninsula on the Atlantic coast of Anastasia Island across Matanzas Bay from downtown St. Augustine. "
// });

// g1.save((err, newSite) => {
//    if(err){
//      console.log("Error saving campground");
//    }else{
//      console.log("Successful insert");
//      console.log(g1);
//    }
// });

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/campgrounds", (req, res) => {
    var campgrounds = Campground.find({}, (err, campgrounds) =>{
        if(err){
            console.log("Error retrieving campgrounds from DB");
        } else {
            res.render("camps", {campgrounds: campgrounds});
        }
    })
});

app.post("/campgrounds", (req, res) => {
    var name = req.body.sitename;
    var location = req.body.location;
    var image = req.body.imageurl;
    var description = req.body.description;
    var newSite = { name: name, 
        location: location,
        image: image,
        description: description
    }

    Campground.create(newSite, (err, site) => {
        if(err){
            console.log("Error saving the campground");
        } else {
            console.log("New site added successfully.");
            console.log(site);
        }
    });

    res.redirect("/campgrounds");
    // res.send("You have hit the post route!");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("newsite");
});


// show route for details of a campsite
app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, (err, site) => {
        if(err){
            console.log("Error retrieving from the DB");
        } else {
            console.log(site);
            res.render("show", {site: site});
        }
    });
});


app.listen(3000, () => {
    console.log("YelpCamp Server is listening at port 3000");
});