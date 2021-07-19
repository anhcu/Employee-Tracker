// const db = require('./db')
// const { prompt } = require('inquirer');
// const mysql = require('mysql');
// require('console.table');



// // const db = require ('./db')
// // const { prompt } = require ('inquirer')
// // require('console.table')

// start();
// //start()
// function start() {
//     console.log("testing")
//     List();
// }
// //load prompt - list 
// async function List() {
//     const { choice } = await prompt([
//         {
//             type: "list",
//             name: "choice",
//             message: "Pick One",
//             choices: [
//                 {
//                     name: "view the Emp",
//                     value: "viewE"
//                 },
//                 {
//                     name: "view the Role",
//                     value: "viewR"
//                 },
//                 {
//                     name: "add a Department",
//                     value: "add_Dep"
//                 },
//                 {
//                     name: "add a Role",
//                     value: "add_role"
//                 }

//             ]

//         }
//     ]);

//     //switch case
//     switch (choice) {
//         case "viewE":
//             return viewEmp();
//         case "viewRole":
//             return viewR();
//         case "add_Dep":
//             return addDep();
//         case "add_Role":
//             return addRole();
//     }
// }

// // view Emp
// async function viewEmp() {


//     const emps = await db.allEmployee();

//     console.table(emps)
//     List();
// }

// async function viewR() {
//     console.log("view R")
// }

// //adding department
// async function addDep() {

//     //place prompt in const 
//     const departmentAdd = await prompt([{
//         message: "Whats your department name?",
//         name: "name"
//     }]);
//     //wait for response from db - response fro above const will be place in params for method below
//     await db.departmentName(departmentAdd);
//     console.log(`Added ${departmentAdd.name} to the db`);

// // call prompt method again 
//     List()
// }


// async function addRole() {
//     const roleAdd = await prompt([
//         {
//         message: "Whats your role?",
//           name: "title"
        
//         // {
//         //   message: "Enter your salary",
//         //   name: "salary",
//         //   validate: validateNumber,
//         // },
//         // {
//         //   message: "Whats your department",
//         //   name: "department_id",
//         //   validate: validateNumber,
//     }]);
//     await db.allRoles(roleAdd);
//     console.log(`Added ${roleAdd.name} to the db`);
//     }



// function quit() {
//     process.exit()
// }