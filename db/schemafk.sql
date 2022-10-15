DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

USE hr_db;

CREATE TABLE   departments (
    dept_id INT NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    active_dept BOOLEAN,
    PRIMARY KEY (dept_id)
);

CREATE TABLE  roles (
    role_id INT,
    job_title VARCHAR(50) NOT NULL,
    dept_name VARCHAR (50) NOT NULL,
    dept_id INT NOT NULL,
    starting_salary NUMERIC(6,2) NOT NULL,  
    active_role BOOLEAN,
    PRIMARY KEY (role_id)
);

CREATE TABLE  employees (
    emp_id INT NOT NULL,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    job_title VARCHAR(40) NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    current_salary NUMERIC(6,2) NOT NULL,
    emp_man_id INT,
    active_emp BOOLEAN
);


 
  
