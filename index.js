

const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // Add MySQL password
      password: 'SUE4sql',
      database: 'hr_db'
    },
    console.log(`Connected to the hr_db database.`)
  );
  db.connect((err,)=> {
    if (err) throw err;
    menu();
  })

//main menu
function menu() {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Welcome to the HR database. Please select one of the following options',
      choices: ["DISPLAY All Depts.", "DISPLAY All Roles", "DISPLAY All Employees",  
      "ADD Dept.", "ADD Role", "ADD Employee", "UPDATE Employee", "Exit", ]
 }])

  .then((answer) => {
  if (answer.menu === "DISPLAY All Depts.") {
    dispDept();
  } else if (answer.menu === "DISPLAY All Roles") {
    dispRole();
  } else if (answer.menu === "DISPLAY All Employees") {
    dispEmp();
  } else if (answer.menu === "ADD Dept.") {
    addDept();
  } else if (answer.menu === "ADD Role") {
    addRole();
  } else if (answer.menu === "ADD Employee") {
    addEmp();
  }else if (answer.menu === "UPDATE Employee") {
    updateEmp();
  } else if (answer.menu === "Exit") {
    db.end();
    console.log("Thank you for using the HR database");
  }
});
};

//display all departments
  function dispDept() {
    db.query('SELECT dept_id, dept_name, manager FROM departments WHERE active_dept = TRUE', 
    function (err, results) {
    console.table(results);
    console.log(" ");
    if (err){
     console.log(err);
    }
    menu();
  });
};

//display all roles
  function dispRole() {
    db.query('SELECT role_id, job_title, dept_name FROM roles WHERE active_role = TRUE ORDER BY role_id ASC', 
    function (err, results) {
      console.table(results);
      console.log(" ");
      if (err){
        console.log(err);
      }
    menu();
    });
  };

  //display all employees
  function dispEmp() {

    db.query('SELECT  * FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC', 
    function (err, results) {
      console.table(results);
      console.log(" ");
      if (err){
        console.log(err);
      }
    menu();
    });
  };

  //add a new department
  function addDept() {
    const sqlcmd1 = `SELECT dept_id, dept_name, manager FROM departments WHERE active_dept = TRUE`
    db.query(sqlcmd1, function (err, results) {
      console.table(results);
      console.log(" ");
      if (err){
        console.log(err);
      } 
    });
    inquirer
    .prompt([
      {
        type: "input",
        name: "addDeptNo",
        message: "PLease enter the new department number",
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

   const sqlcmd = `INSERT INTO departments (dept_id, dept_name, manager, active_dept) VALUES ("${answer.addDeptNo}", "${answer.addDeptName}", "${answer.addDeptMgr}", TRUE)`
  db.query(sqlcmd, function (err, results) {
  console.log("Department successfully added");
  
  if (err){
    console.log(err);
  }
      menu();
  });
  });
  };

  //add new role
function addRole() {
  db.query('SELECT role_id, job_title, dept_name, starting_salary FROM roles WHERE active_role = TRUE', 
    function (err, results) {
      console.table(results);
      console.log(" ");
      if (err){
        console.log(err);
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
  
  const sqlcmd = `INSERT INTO roles (role_id, job_title, dept_name,  starting_salary, active_role) VALUES ("${answer.addRoleId}", "${answer.addJobTitle}", "${answer.addDeptName}", "${answer.addSalary}", TRUE)`
db.query(sqlcmd, function (err, results) {
  console.table(results);
  if (err){
    console.log(err)
  }
  menu();
});
  });
};

//add new employee
function addEmp() {
  db.query('SELECT first_name, last_name,  job_title, dept_name, emp_manager FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC', 
  function (err, results) {
    console.table(results);
    if (err){
     console.log(err)
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
    },
    {
      type: "input",
      name: "addempMgr",
      message: "Please enter manager name ",
    },
    {
      type: "input",
      name: "addnewSalary",
      message: "Please enter starting salary",
  }])
  .then ((answer) => {

const sqlcmd = `INSERT INTO employees (emp_id, first_name, last_name, job_title, dept_name, current_salary, emp_manager, active_emp) VALUES ("${answer.addEmpid}","${answer.addFirstName}", "${answer.addLastName}", "${answer.addJpbTitle}", "${answer.addDeptName}", "${answer.addnewSalary}", "${answer.addempMgr}", TRUE)`
db.query(sqlcmd, function (err, results) {
console.table(results);
if (err){
  console.log(err)
}
menu();
});
  });
};

//update employee role
function updateEmp() {
db.query('SELECT emp_id, first_name, last_name,  job_title, dept_name FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC', 
function (err, results) {
  console.table(results);
  if (err){
    console.log(err)
  }
}
);
  inquirer
.prompt([
  {
    type: "input",
    name: "empIdtoUpdate",
    message: "Please enter the id number of the employee you wish to update",
  },
  {
    type: "input",
    name: "newJob",
    message: "Please enter the employee's new job title",
  },
  {
  type: "input",
  name: "newDept",
  message: "Please enter the employee's new department",
  }, 
  {
    type: "input",
  name: "newSalary",
  message: "Please enter the employee's new hourly salary",

  }])
  .then((answer) => {
 
const sqlcmd = `UPDATE employees SET job_title = "${answer.newJob}" WHERE emp_id = "${answer.empIdtoUpdate}"`;
db.query(sqlcmd, function (err, results) {

(err, results) => {
if (err){
  console.log(err);
} else console.log("Employee Updated");
menu();
});
});
};

 