// require the connection 
// this file will directly utilize the connection for the algorithms 
const connection = require('./connection');

// create an objct that holds cmultiple methods that will later be used 
class DB {
    // kep a basic connection method 
    // what is a constructor (creates an instance - this instance gets called when declaring an object )
    constructor (connection){
        
        this.connection = connection
    }

    // create Employeesconst
     createEmployee = (data) => {
  this.connection.query('INSERT INTO employee SET?', data, (err, res) => {
    if (err) throw err;
    console.log("Employee was successfully added!")

  });
}
 allEmployee() {
     return this.connection.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee', function (err, res) {
      if (err) throw err;
     // console.table('employee', res);
      
    })
  }

  // const allEmployee = () => {
  //   connection.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee', function (err, res) {
  //     if (err) throw err;
  //     console.table('employee', res);
  //     init()
  //   })
  // }


}
module.exports = new DB(connection);