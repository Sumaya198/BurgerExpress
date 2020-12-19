//require ORM in order to make functions that will interact with the database
const orm = require("../config/orm.js");                                                                 

//burger variable and callback function 
const burger = {
    //select all the burgers from the database
    selectAll: function(callback) {                                         
        orm.selectAll("burgers", function(res) {                            
            callback(res);
        });
    },  

    //insert function
    //newBurger is an array
    insertOne: function (newBurger, callback) {
    //table name and burger name
        orm.insertOne("burgers", "burger_name", newBurger, function (res) {
            callback(res);
        });
    },
    //update function to update the burgers that are waiting to be devoured
    updateOne: function(Value, id, callback) {
        orm.updateOne(Value, id, function(res) {
            callback(res);
        });
    },
    //delete function for burgers that have been devoured
    deleteOne: function(id, callback) {
        orm.deleteOne(id, function(res) {
            callback(res);
        });
    }
};

//this file will be exported to burgers_controller.js file 
module.exports = burger;