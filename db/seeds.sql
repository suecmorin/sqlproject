USE hr_db;
INSERT INTO roles (role_id, job_title, dept_name, dept_id, starting_salary, active_role)
VALUES (3, "Salesfloor Team Member", "Hardlines", 10,  15, TRUE),
(4, "Backroom Team Member", "Backroom", 30, 15, TRUE),
(5, "Fulfillment Team Member", "Fulfillment", 40, 15, TRUE),
(6, "Cashier", "Guest Services", 60, 15, TRUE),
(7, "Salesfloor Team Member", "Softlines", 20,  15, TRUE),
(8, "Salesfloor Team Member", "Grocery", 50, 15, TRUE),
(9, "Starbucks Team Member", "Starbucks", 70,  15, TRUE),
(10, "HR Team Member", "Human Resources", 80, 15, TRUE),
(11, "Team Leader", "Hardlines", 10, 20, TRUE),
(12, "Team Leader", "Softlines", 20, 20, TRUE),
(13, "Team Leader", "Grocery", 50, 20, TRUE),
(14, "Team Leader", "Guest Services", 60, 20, TRUE),
(15, "Team Leader", "Starbucks", 70, 21, TRUE),
(16, "Team Leader", "Fulfillment", 40, 20, TRUE),
(17, "Team Leader", "Backroom", 30, 20, TRUE);


INSERT INTO departments  (dept_id, dept_name, active_dept)
VALUES (10, "Hardlines",  TRUE),
(20, "Softlines", TRUE),
(30, "Backroom", TRUE),
(40, "Fulfillment",  TRUE),
(50, "Grocery",  TRUE),
(60, "Guest Services",  TRUE),
(70, "Starbucks",  TRUE),
(80, "Human Resources", TRUE);

INSERT INTO employees (emp_id, first_name, last_name, role_id, job_title, dept_name, current_salary, emp_man_id, active_emp)
VALUES (123, "Alex", "Jones", 3, "Salesfloor Team Member", "Hardlines", 15.00, 3045, TRUE),
(321, "Alexa", "Jonas", 3, "Salesfloor Team Member", "Hardlines", 15.25, 3045, TRUE),
(231, "Alex", "Jones Jr", 3,  "Salesfloor Team Member", "Hardlines", 15.00, 3045,  TRUE),
(124, "Alan", "Janson", 7, "Salesfloor Team Member", "Softlines", 16.00, 33456, TRUE),
(125, "Alana", "Jynx", 7, "Salesfloor Team Member", "Softlines", 15.50, 33456, TRUE),
(162, "Abe", "James", 5,  "Fulfillment Team Member", "Fulfillment", 15.35, 1556, TRUE),
(4323, "Asa", "Jones", 8, "Salesfloor Team Member", "Grocery", 15.00, 3457, TRUE),
(7123, "Abram", "Jos", 6, "Cashier", "Guest Services", 15.00, 890, TRUE),
(193, "Alex", "Jones", 6, "Cashier", "Guest Services", 15.00, 890, TRUE),
(103, "Alecia", "Jonas", 9,  "Starbucks Team Member", "Starbucks", 15.00, 556, TRUE),
(3045, "John", "Threshold", 11, "Team Leader", "Hardlines", 20.00, NULL , TRUE),
(33456, "Jane", "Day",  12, "Team Leader", "Softlines", 23.00, NULL , TRUE),
(2134,"Aba", "Jensen", 4, "Backroom Team Member", "Backroom", 21.45, NULL,  TRUE),
(890, "James", "Guest", 14,  "Team Leader", "Guest Services", 20.00, NULL, TRUE),
(556, "Joan", "Java", 15, "Team Leader", "Starbucks", 21.35, NULL, TRUE),
(1556, "Jay", "Shipper", 16,  "Team Leader", "Fulfillment", 20.15, NULL,  TRUE),
(2245, "Joyce", "Closet", 17, "Team Leader", "Backroom", 20.00, NULL, TRUE),
(3457, "Janet", "Pillsbury", 13, "Team Leader", "Grocery", 20.00, NULL, TRUE);
