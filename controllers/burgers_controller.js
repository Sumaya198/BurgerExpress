const express = require("express");
const burger = require("../models/burger");

const app = express.Router();

app.get("/", function(req, res){
    burger.selectAll(function(results){
        //res.json(results)
        const burgerBurger = {
            burgers: results
         };
        
        res.render("index", burgerBurger);
    });
});

app.post("/insertOne", function (req, res){
    //passes data into html
    //call it random
    burger.insertOne(req.body.burger_name, function(err){
        res.redirect("/")
        console.log(req.body)
    });

});

app.post("/updateOne/:id", function(req, res){
    //holds burgers being devoured
    const condition = "id = " + req.params.id;
    burger.updateOne({
        //using updateone from burger.js
        devoured: req.body.devoured
    }, condition, function(){
        //redirects it to main page
        res.redirect("/");
        console.log("updade: ", condition)
    });
});

app.post("/deleteOne/:id", function(req, res){
    const condition = "id = " + req.params.id;
    burger.deleteOne(condition, function () {
        res.redirect("/");
        console.log("delete: ", condition)
    });
});

module.exports = app;

