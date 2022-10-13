USE hr_db;
INSERT INTO roles (role_id, job_title, dept_name, starting_salary, active_role)
VALUES (3, "Salesfloor Team Member", "Hardlines", 15, TRUE),
(4, "Backroom Team Member", "Backroom", 15, TRUE),
(5, "Fulfillment Team Member", "Fulfillment", 15, TRUE),
(6, "Cashier", "Guest Services", 15, TRUE),
(7, "Salesfloor Team Member", "Softlines", 15, TRUE),
(8, "Salesfloor Team Member", "Grocery", 15, TRUE),
(9, "Starbucks Team Member", "Starbucks", 15, TRUE),
(10, "HR Team Member", "Human Resources", 15, TRUE),
(11, "Team Leader", "HardlinesTL", 20, TRUE),
(12, "Team Leader", "SoftlinesTL", 20, TRUE),
(13, "Team Leader", "GroceryTL", 20, TRUE),
(14, "Team Leader", "Guest ServicesTL", 20, TRUE),
(15, "Team Leader", "StarbucksTL", 21, TRUE),
(16, "Team Leader", "FulfillmentTL", 20, TRUE);


INSERT INTO departments  (dept_id, dept_name, manager, active_dept)
VALUES (10, "Hardlines", "John Threshold", TRUE),
(20, "Softlines", "Jane Day", TRUE),
(30, "Backroom", "Joyce Closet", TRUE),
(40, "Fulfillment", "Jay Shipper", TRUE),
(50, "Grocery", "Janet Pillsbury", TRUE),
(60, "Guest Services", "James Guest", TRUE),
(70, "Starbucks", "Joan Java", TRUE);

INSERT INTO employees (emp_id, first_name, last_name, job_title, dept_name, current_salary, emp_manager, active_emp)
VALUES (123, "Alex", "Jones", "Salesfloor Team Member", "Hardlines", 15.00, "John Threshold", TRUE),
(321, "Alexa", "Jonas", "Salesfloor Team Member", "Hardlines", 15.25, "John Threshold", TRUE),
(231, "Alex", "Jones Jr", "Salesfloor Team Member", "Hardlines", 15.00, "John Threshold",  TRUE),
(124, "Alan", "Janson", "Salesfloor Team Member", "Softlines", 16.00, "Jane Day", TRUE),
(125, "Alana", "Jynx", "Salesfloor Team Member", "Softlines", 15.50, "Jane Day", TRUE),
(162, "Abe", "James", "Fulfillment Team Member", "Fulfillment", 15.35, "Jay Shipper", TRUE),
(4323, "Asa", "Jones", "Salesfloor Team Member", "Grocery", 15.00, "Janet Pillsbury", TRUE),
(7123, "Abram", "Jos", "Cashier", "Guest Services", 15.00, "James Guest", TRUE),
(193, "Alex", "Jones", "Cashier", "Guest Services", 15.00, "james Guest", TRUE),
(103, "Alecia", "Jonas", "Starbucks Team Member", "Starbucks", 15.00, "Jpan Java", TRUE),
(3045, "Ale", "Juice", "Team Leader", "Hardlines", 20.00, "Hardlines ETL", TRUE),
(33456, "Al", "Jibs", "Team Leader", "Softlines", 23.00, "Softlines ETL", TRUE),
(2134,"Aba", "Jensen", "Backroom Team Member", "Backroom", 21.45, "Hardlines ETL",  TRUE),
(890, "Ada", "Jingor", "Team Leader", "Guest Services", 20.00, "Guest Services ETL", TRUE),
(556, "Adrian", "Jamesson", "Team Leader", "Starbucks", 21.35, "Guest Services ETL", TRUE),
(1556, "Adrianne", "Jamessoni", "Team Leader", "Fulfillment", 20.15, "HArdlines ETL",  TRUE);

