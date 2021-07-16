
//Update employee managers

//-View employees by manager

//Delete departments, roles, and employees

//View the total utilized budget of a department -- ie the combined salaries of all employees in that department

const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'employees'
});

//table department
const allDepartment = () => {
  connection.query('SELECT id, name FROM department', function (err, res) {
    if (err) throw err;
    console.table('department', res);
    init()
  })
}

const departmentName = (data) => {
  connection.query('INSERT INTO department SET?', data, (err, res) => {
    if (err) throw err;
    console.log("Department was successfully added!")
    init();
  });
}

const addDepartment = () => {
  inquirer.prompt([
    {
      message: "Whats your department name?",
      name: "name"
    }
  ]).then(answer => {
    // console.log('answer');
    departmentName(answer);
  });
}

//table employee 
const createEmployee = (data) => {
  connection.query('INSERT INTO employee SET?', data, (err, res) => {
    if (err) throw err;
    console.log("Employee was successfully added!")
    init();
  });
}

const allEmployee = () => {
  connection.query('SELECT id, first_name, last_name, role_id, manager_id FROM employee', function (err, res) {
    if (err) throw err;
    console.table('employee', res);
    init()
  })
}

const addEmployee = () => {
  inquirer.prompt([
    {
      message: "What is your employee first name?",
      name: "first_name"
    },
    {
      message: "What is your employee last name?",
      name: "last_name"
    },
    {
      message: "What are you role ID number?",
      name: "role_id"    
    },
    {
      message: "what's your manager ID number?",
      name: "manager_id"
    }
  ]).then(answer => {
    // console.log('ANSWER');
    createEmployee(answer);
  });
}

//table role
const allRoles = () => {
  connection.query('SELECT id, title, salary, department_id FROM role', function (err, res) {
    if (err) throw err;
    console.table('role', res);
    init()
  })
}

const createrole = (data) => {
  connection.query('INSERT INTO role SET?', data, (err, res) => {
    if (err) throw err;
    console.log("Employee role was successfully added!")
    init();
  });
}

const addRole = () => {
  inquirer.prompt([
    {
      message: "What is your title?",
      name: "title"
    },
    {
      message: "Enter your salary",
      name: "salary"
    },
    {
      message: "Whats your department",
      name: "department_id"
    }
  ]).then(answer => {
    // console.log('ANSWER');
    createrole(answer);
  });
}

//updating role
const updateRole = () => {
  inquirer.prompt([
    {
      name: 'employeeId',
      type: 'number',
      message: 'Enter employee Id number'
    },
    {
      name: 'newRole',
      type: 'number',
      message: 'Enter new role Id number'
    },
  ])

.then((answer) => {
    connection.query(
        `UPDATE employee SET role_id = ${answer.newRole} WHERE id = ${answer.employeeId}`, (err, data) => {
            if (err) throw err;
            console.log('Employee updated');
            init();
        });
});
}

//	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
// first_name VARCHAR(30),
// last_name VARCHAR(30), 
// role_id INT,  
// manager_id INT

const init = () => {
  inquirer.prompt([
    { 
      type: "rawlist",
      choices: [
        "Add Employee",
        "View All Employees",
        "Add Role",
        "View All Roles",
        "Add Department",
        "View All Departments",
        "Update Employee Role",
        // "View All Employees By Department",
        // "View All Employees By Manager",      
        // "Remove Employee",
        // "Update Employee Manager",
        // "Remove Department",
        // "Remove Role",
        // "View Total Utilized Budget By Department",
        "Exit"
      ],
      message: "What do you like to do?",
      name: "option"
    }
  ]).then((answer) => {

      // switch cases for each user answer
      switch(answer.option) {
          case "Add Department": {
          return addDepartment();
          }
          case "Add Role": {
          return addRole();
          }
          case "Add Employee": {
          return addEmployee();
          }
          case "View All Departments": {
          return allDepartment();
          }
          case "View All Roles": {
          return allRoles();
          }
          case "View All Employees": {
          return allEmployee();
          }
          case "Update Employee Role": {
          return updateRole();
          }
          // case "View All Employees By Department": {
          // return employeeByDeparment();
          // }
          // case "View All Employees By Manager": {
          // return employeeByManager();
          // }
          // case "Remove Employee": {
          // return removeEmployee();
          // }
          // case "Update Employee Manager": {
          // return updateManger();
          // }
          // case "Remove Department": {
          // return removeDepartment();
          // }
          // case "Remove Role": {
          // return removeRole();
          // }
          // case "View Total Utilized Budget By Department": {
          // return departmentBudget();
          // }
          default: {
          return process.exit();
          }
        }
      });
}



connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  init();
});
