// const mysql = require('mysql');
// const employeeDB = 'employees';
// const connection = mysql.createConnection({
//     // host: 'localhost',
  
//     user: 'root',
//     database: employeeDB
//   });

const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'employees'
});


// connection.connect();

//   //allows the connection to be exporte 
  module.exports = connection;





 