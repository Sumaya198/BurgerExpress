///orm file is the logic of the whole application

const connection = require('../config/connection.js')
//create a variable called orm that will consist of the selections and insert queries

const orm = {
    selectAll: function(table, cback){
        let dataQuery = "SELECT * FROM " + table;
        connection.query(dataQuery, function(err, res){
            if (err) {
                throw err;
            }else{
                cback(res);
            }
            
        });
    },
    //for putting it into the database
    // Create Insert Function
    //each parameter will take the place of the question mark
    //question marks will be replaced by the parameters within the query i.e. table
    insertOne: function(burgerTable, burger1, burger2, cback){
        let dataQuery = "INSERT INTO ?? (??) VALUES (?);" 
         connection.query(dataQuery, [burgerTable, burger1, burger2], function(err, res){
             if (err) throw err
             cback(res)
         });
    },
    //Create update function
    updateOne: function(burgerDevoured, id, cback){
        let dataQuery = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
            connection.query(dataQuery, [id], function(err, res){
                if (err) throw err;
                cback(res);
            });
    },
    //Create delete function
    deleteOne: function(id, cback){
        let dataQuery = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(dataQuery, [id], function(err, res){
            if (err) throw err;
            cback(res);
        });
    },
 };


module.exports = orm;