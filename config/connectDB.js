const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "72.61.238.64",
  user: "root",
  password: "7Lottery@Demo123",
  database: "7lotterydemo",
});

export default connection;