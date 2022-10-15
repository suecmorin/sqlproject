

const mysql = require('mysql2');
const inquirer = require('inquirer');


const db = 
mysql.createConnection(
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
      "ADD Dept.", "ADD Role", "ADD Employee", "UPDATE Employee", "DELETE Employee", "Exit", ]
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
  } else if (answer.menu === "DELETE Employee") {
    deleteEmp();  
  } else if (answer.menu === "Exit") {
    db.end();
    console.log("Thank you for using the HR database");
  }
});
};

//display all departments
  function dispDept() {
    db.query('SELECT dept_id, dept_name FROM departments WHERE active_dept = TRUE', 
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

    db.query('SELECT  emp_id, first_name, last_name, role_id, job_title, dept_name, current_salary, emp_man_id FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC', 
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
    const sqlcmd1 = `SELECT dept_id, dept_name FROM departments WHERE active_dept = TRUE`;
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

    }])
    .then((answer) => {

   const sqlcmd = `INSERT INTO departments (dept_id, dept_name, active_dept) VALUES ("${answer.addDeptNo}", "${answer.addDeptName}", TRUE)`;
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
        name: "addDeptNumber",
        message: "Please enter department number",
      },
      {
        type: "input",
        name: "addSalary",
        message: "Please enter hourly wage", 
    }])
  .then ((answer) => {
  
  const sqlcmd = `INSERT INTO roles (role_id, job_title, dept_name, dept_id,  starting_salary, active_role) VALUES ("${answer.addRoleId}", "${answer.addJobTitle}", "${answer.addDeptName}", "${answer.addDeptNumber}", "${answer.addSalary}", TRUE)`;
db.query(sqlcmd, function (err, results) {
  console.table("New role added");
  if (err){
    console.log(err)
  }
  menu();
});
  });
};

//add new employee
function addEmp() {
  db.query('SELECT emp_id, first_name, last_name,  job_title, dept_name, emp_man_id FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC', 
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
      name: "addrole",
      message: "Please enter new role id number",
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
      name: "addNewSalary",
      message: "Please enter starting salary",
    },
    {
      type: "input",
      name: "addNewMgr",
      message: "Please enter employee's manager's id",
      default: "Null",
  }])
  .then ((answer) => {

const sqlcmd = `INSERT INTO employees (emp_id, first_name, last_name, role_id, job_title, dept_name, current_salary, emp_man_id, active_emp) VALUES ("${answer.addEmpid}","${answer.addFirstName}", "${answer.addLastName}", "${answer.addRole}", "${answer.addJpbTitle}", "${answer.addDeptName}", "${answer.addNewSalary}", "${answer.addNewMgr}", TRUE)`;
db.query(sqlcmd, function (err, results) {
console.table("Employee Added");
if (err){
  console.log(err)
}
menu();
});
  });
};

//update employee role
function updateEmp() {
db.query('SELECT emp_id, first_name, last_name, role_id,  job_title, dept_name FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC',
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
    name: "newRole",
    message: "Please enter the employee's new role id",
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
    name: "newMgr",
    message: "Please enter the employee's new manager's id",
    }, 
  {
    type: "input",
  name: "newSalary",
  message: "Please enter the employee's new hourly salary",

  }])
  .then((answer) => {
const sqlcmd = `UPDATE employees SET role_id = "${answer.newRole}", job_title = "${answer.newJob}", dept_name = "${answer.newDept}", current_salary = "${answer.newSalary}", emp_man_id = "${answer.newMgr}"  WHERE emp_id = "${answer.empIdtoUpdate}"`;
db.query(sqlcmd, function (err, results) {

(err, results) => {
if (err){
  console.log(err);
} else console.log("Employee Updated");
menu();
}
  });
  });
};

//delete employee
function deleteEmp() {
db.query('SELECT   emp_id, first_name, last_name, role_id, job_title, dept_name, current_salary, emp_man_id FROM employees WHERE active_emp = TRUE ORDER BY emp_id ASC', 
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
          name: "empIdtoUpdate",
          message: "Please enter the id number of the employee you wish to delete",
        }])
        .then ((answer) => {
      const sqlcmd = `UPDATE employees SET active_emp = '0' WHERE emp_id = "${answer.empIdtoUpdate}"`;
      db.query(sqlcmd, function (err, results) {

        (err, results) => {
        if (err){
          console.log(err);
        } else console.log("Employee Deleted");
      };
      });
    menu();
  });
};
 