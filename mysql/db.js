const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "WaSd_1470",
    database: "deepblog",
  })
  .promise();

module.exports = pool;
