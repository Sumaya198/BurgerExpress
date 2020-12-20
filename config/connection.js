require('dotenv').config();
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  
  connection = mysql.createConnection({
    host: process.env.HOST,
    port: 3306,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  });
}
//console.log(process.env)


  connection.connect();

  module.exports = connection;