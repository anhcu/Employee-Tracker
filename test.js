const db = require ('./db')
const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');



// const db = require ('./db')
// const { prompt } = require ('inquirer')
// require('console.table')

start();
//start()
function start(){
    console.log("testing")
List();
}
//load prompt - list 
async function List (){
const choice = await prompt ([
        {
            type: "list",
            name: "choice",
            message: "Pick One",
            choices: [
                {
                    name: "view the Emp",
                    value: "viewE"
                },
                {
                    name: "view the Role",
                    value: "viewR"
                }
                
            ]

        }
    ]).then((choice)=>{
//switch case
switch(choice){
    case "viewE":
        return viewEmp();
     case "viewRole":
            return viewR();
    
}
    })
 };

// view Emp
async function viewEmp(){
    console.log("working")

 const emps = await db.allEmployee();
 
 console.table(emps)
 List();
}

async function viewR (){
    console.log("view R")
}

function quit (){
    process.exit()
}