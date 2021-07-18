const mysql = require('mysql');
const employeeDB = 'employees';
const connection = mysql.createConnection({
    // host: 'localhost',
  
    user: 'root',
    database: employeeDB
  });


// connection.connect();

//   //allows the connection to be exporte 
//   module.exports = connection;