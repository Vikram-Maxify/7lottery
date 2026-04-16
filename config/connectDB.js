const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Player@1122",
  database: "7lottery",
});

export default connection;
