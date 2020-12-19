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

    insertOne: function(burgerTable, burger1, burger2, cback){
        let dataQuery = "INSERT INTO ?? (??) VALUES (?);" 
         connection.query(dataQuery, [burgerTable, burger1, burger2], function(err, res){
             if (err) throw err
             cback(res)
         });
    },

    updateOne: function(burgerDevoured, id, cback){
        let dataQuery = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
            connection.query(dataQuery, [burgerDevoured, id], function(err, res){
                if (err) throw err;
                cback(res);
            });
    },
    
    deleteOne: function(id, cback){
        let dataQuery = "DELETE FROM burgers WHERE " + id + ";";
        connection.query(dataQuery, [id], function(err, res){
            if (err) throw err;
            cback(res);
        });
    },
 };


module.exports = orm;

