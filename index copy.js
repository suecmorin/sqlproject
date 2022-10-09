const fs = require('fs');
const express = require('express');
const path = require('path');
//const api = require('./routes/index.js');
const mysql = require('mysql2');
const { default: inquirer } = require('inquirer');
//const { } = require('process');
const { v4: uuidv4 } = require("uuid");
const api = require('./db/server.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//main menu
function menu() {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Welcome to the HR database. Please select one of the follwoing options',
      choices: ["DISPLAY All Depts.", "DISPLAY All Roles", "DISPLAY All Employees",  
      "ADD Dept.", "ADD Role", "ADD Employee", "UPDATE Employee", "Exit", ]
 }])

  .then((answer) => {
  if (answer === "DISPLAY All Depts.") {
    dispDept();
  } else if (answer === "DISPLAY All Roles") {
    dispRole();
  } else if (answer === "DISPLAY All Employees") {
    dispEmp();
  } else if (answer === "ADD Dept.") {
    addDept();
  } else if (answer === "ADD Role") {
    addRole();
  } else if (answer === "ADD Employee") {
    addEmp();
  }else if (answer === "UPDATE Employee") {
    updateEmp();
  } else if (answer === "Exit") {
    return;
  }
});
};

//display all departments
  function dispDept() {
    db.query('SELECT dept_id, dept_name, manager FROM departments WHERE current = TRUE', function (err, results) {
    console.log(results);
    if (err){
      results.status(400).json({error: err.message});
      return;
    }
    menu();
  });
};

//display all roles
  function dispRole() {
    db.query('SELECT role_id, job_title, dept_name FROM roles WHERE current = TRUE', 
    function (err, results) {
      console.log(results);
      if (err){
        results.status(400).json({error: err.message});
        return;
      }
    menu();
    });
  };

  //display all employees
  function dispEmp() {
    db.query('SELECT  first_name, last_name, job_title FROM employees WHERE current = TRUE', 
    function (err, results) {
      console.log(resuls);
      if (err){
        results.status(400).json({error: err.message});
        return;
      }
    menu();
    });
  };

  //add a new department
  function addDept() {
    db_query('SELECT dept_id, dept_name, manager FROM departments WHERE current = TRUE', 
    function (err, results) {
      console.log(results);
      if (err){
        results.status(400).json({error: err.message});
        return;
      } 
    });
    inquirer
    .prompt([
      {
        type: "input",
        name: "addDeptNo",
        message: "PLease enter the new department number"
      },
      {
        type: "input",
        name: "addDeptName",
        message: "Please enter department name",
      },
      {
      type: "input",
      name: "addDeptMgr",
      message: "Please enter department manager"
    }])
    .then((answer) => {

    const uniqueId = uuidv4();
    const sqlcmd = 'INSERT INTO departments (id, dept_id, dept_name, manager, current) VALUES (uniqueId, addDeptNo, addDeptName, addDeptMgr, TRUE)'
  db.query(sqlcmd, function (err, results) {
  console.log(results);
  if (err){
    results.status(400).json({error: err.message});
    return;
  }
      menu();
  });
  });
  };

  //add new role
function addRole() {
  db.query('SELECT role_id, job_title, dept_name FROM roles WHERE current = TRUE', 
    function (err, results) {
      console.log(results);
      if (err){
        results.status(400).json({error: err.message});
        return;
      }
    });
      inquirer
    .prompt([
      {
        type: "input",
        name: "addRoleId",
        message: "PLease enter the new role id",
      },
      {
        type: "input",
        name: "addJobTitle",
        message: "Please enter new job title",
      },
      {
        type: "input",
        name: "addDeptName",
        message: "Please enter department name",
      },
      {
        type: "input",
        name: "addSalary",
        message: "Please enter hourly wage", 
    }])
  .then ((answer) => {
  const uniqueId = uuidv4();
  const sqlcmd = 'INSERT INTO roles (id, role_id, job_title, dept_name,  salary, current) VALUES (uniqueId, addRoleId, addJobTitle, addDeptName, addSalary, TRUE)'
db.query(sqlcmd, function (err, results) {
  console.log(results);
  if (err){
    results.status(400).json({error: err.message});
    return;
  }
  menu();
});
  });
};

//add new employee
function addEmp() {
  db.query('SELECT first_name, last_name,  job_title, dept_name FROM employees WHERE current = TRUE', 
  function (err, results) {
    console.log(results);
    if (err){
      results.status(400).json({error: err.message});
      return;
    }
  });
    inquirer
  .prompt([
    {
      type: "input",
      name: "addEmpid", 
      message: "PLease enter the new employee id",
    },
    {
      type: "input",
      name: "addFirstName",
      message: "Please enter employee's first name",
    },
    {
    type: "input",
    name: "addLastName",
    message: "Please enter employee's last name",
    },
    {
      type: "input",
      name: "addJobTitle",
      message: "Please enter new job title",
    },
    {
      type: "input",
      name: "addDeptName",
      message: "Please enter department name",
  }])
  .then ((answer) => {
const uniqueId = uuidv4();
const sqlcmd = 'INSERT INTO employees (id, emp_id, first_name, last_name, job_title, dept_name, current) VALUES (uniqueId, addempId, addJobTitle, addFirstName, addLastNmae, addDeptName, TRUE)'
db.query(sqlcmd, function (err, results) {
console.log(results);
if (err){
  results.status(400).json({error: err.message});
  return;
}
menu();
});
  });
};

//update employee role
function updateEmp() {
db.query('SELECT emp_id, first_name, last_name,  job_title, dept_name WHERE current = TRUE FROM employees', 
function (err, results) {
  console.log(results);
  if (err){
    results.status(400).json({error: err.message});
    return;
  }
}
);
  inquirer
.prompt([
  {
    type: "input",
    name: "empIdtoUpdate",
    message: "Please enter the employee number of the employee you wish to update"
  },
  {
  type: "input",
  name: "newJob",
  message: "Please enter the employee's new job title"
  }])
  .then((answer) => {
const sqlcmd = 'UPDATE employees SET job_title = "newJob" WHERE emp_id = "empIdtoUpdate"';
db.query(sqlcmd, function (err, results) {
console.log(results);
if (err){
results.status(400).json({error: err.message});
return;
}
menu();
});
});
};
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
  });

 