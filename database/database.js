require('dotenv').config();
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DATABASE,
});

connection.connect();


module.exports.connection = connection;
