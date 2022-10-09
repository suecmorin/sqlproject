DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

USE hr_db;

CREATE TABLE  roles (
    id INT NOT NULL,
    role_id INT NOT NULL ,
    job_title VARCHAR(50) NOT NULL,
    dept_name VARCHAR (50) NOT NULL,
    salary INT NOT NULL,  
    current BOOLEAN,
    PRIMARY KEY (dept_name)
);

CREATE TABLE   departments (
    id INT NOT NULL,
    dept_id INT NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    manager VARCHAR(100) NOT NULL,
    current BOOLEAN,
    FOREIGN KEY (dept_name)
    REFERENCES roles(dept_name)


);

CREATE TABLE  employees (
    id INT NOT NULL,
    emp_id INT NOT NULL,
    firstname VARCHAR (30) NOT NULL,
    lastname VARCHAR (30) NOT NULL,
    job_title VARCHAR(40) NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    current BOOLEAN,
    FOREIGN KEY (dept_name)
    REFERENCES departments(dept_name)

);
    