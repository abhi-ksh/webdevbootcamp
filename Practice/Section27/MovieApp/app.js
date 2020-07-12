const express = require("express");
var app = express();
const axios = require("axios");
const { response } = require("express");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("search");
});

var searchRes;

app.get("/results", (req, res) => {
    // console.log(req.query.query);
    var searchTerm = req.query.query;
    const urL = "http://www.omdbapi.com/?apikey=thewdb&s=" + searchTerm; 
    axios.get(urL)
        .then(function (results) {
            searchRes = results.data.Search;
            // console.log(searchRes);
            res.render("results", {searchRes: searchRes});            
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log("User searched for " + searchTerm);
        });
});

app.get("")

app.listen(3000, function () {
    console.log("Listening on port 3000");
})