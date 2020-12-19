const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(results){
        const burgerBurger = {
            burgers: results
        }
        res.render("index", burgerBurger)
    })
})

router.post("/insertOne", function(req, res){
    burger.insertOne(req.body.burger_name, function(err){
        res.redirect("/")
    })
})

router.post("/updateOne/:id", function(req, res){
    const state = "id = " + req.params.id;
    burger.updateOne({ devoured: req.body.devoured}, state, function(err){
        res.redirect("/")
    })
})

router.post("/deleteOne/:id", function(req, res){
    const state = "id = " + req.params.id;
    burger.deleteOne(state, function(){
        res.redirect("/")
    })
})

module.exports = router;