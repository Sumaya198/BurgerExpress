const mysql = require('mysql');

const password = process.argv[2];
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password,
  database: "burger_db",
});

connection.connect(function (err) {
    if (err) console.log("There is an error", err);
    else console.log("connected!");
  
    connection.query("SELECT * FROM burgers", function (err, result) {
      if (err) console.log("error", err);
      else console.log("result");
    });
  });

  module.exports = connection;