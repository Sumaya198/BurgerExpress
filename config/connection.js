require('dotenv').config();
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const password = process.argv[2];
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password,
    database: "burger_db",
  });
}


  connection.connect();

  module.exports = connection;