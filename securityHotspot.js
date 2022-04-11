// 3: Hard-coded credentials are security-sensitive
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  database: "project",
  password: "mypassword", // sensitive
  multipleStatements: true,
});

connection.connect();
