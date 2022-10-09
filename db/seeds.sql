USE hr_db;
INSERT INTO roles (id, role_id, job_title, dept_name, salary, current)
VALUES (001, 3, "Salesfloor Team Member", "Hardlines", 15, TRUE),
(002, 4, "Backroom Team Member", "Backroom", 15, TRUE),
(003, 5, "Fulfillment Team Member", "Fulfillment", 15, TRUE),
(004, 6, "Cashier", "Guest Services", 15, TRUE),
(005, 7, "Salesfloor Team Member", "Softlines", 15, TRUE),
(006, 8, "Salesfloor Team Member", "Grocery", 15, TRUE),
(007, 9, "Starbucks Team Member", "Starbucks", 16, TRUE),
(008, 11, "Team Leader", "HardlinesTL", 20, TRUE),
(009, 12, "Team Leader", "SoftlinesTL", 20, TRUE),
(010, 13, "Team Leader", "GroceryTL", 20, TRUE),
(011, 14, "Team Leader", "Guest ServicesTL", 20, TRUE),
(012, 15, "Team Leader", "StarbucksTL", 21, TRUE),
(013, 16, "Team Leader", "FulfillmentTL", 20, TRUE);

INSERT INTO departments  (id, dept_id, dept_name, manager, current)
VALUES (001, 10, "Hardlines", "John Threshold", TRUE),
(002, 20, "Softlines", "Jane Day", TRUE),
(003, 30, "Backroom", "Joyce Closet", TRUE),
(004, 40, "Fulfillment", "Jay Shipper", TRUE),
(005, 50, "Grocery", "Janet Pillsbury", TRUE),
(006, 60, "Guest Services", "James Guest", TRUE),
(007, 70, "starbucks", "Joan Java", TRUE);

INSERT INTO employees (id, emp_id, firstname, lastname, job_title, dept_name, current)
VALUES (001, 123, "Alex", "Jones", "Salesfloor Team Member", "Hardlines", TRUE),
(002, 321, "Alexa", "Jonas", "Salesfloor Team Member", "Hardlines", TRUE),
(003, 231, "Alex", "Jones Jr", "Salesfloor Team Member", "Hardlines", TRUE),
(004, 124, "Alan", "Janson", "Salesfloor Team Member", "Softlines", TRUE),
(005, 125, "Alana", "Jynx", "Salesfloor Team Member", "Softlines", TRUE),
(006, 162, "Abe", "James", "Fulfillment Team Member", "Fulfillment", TRUE),
(007, 4323, "Asa", "Jones", "Salesfloor Team Member", "Grocery", TRUE),
(008, 7123, "Abram", "Jos", "Cashier", "Guest Services", TRUE),
(009, 193, "Alex", "Jones", "Cashier", "Guest Services", TRUE),
(010, 103, "Alecia", "Jonas", "Starbucks Team Member", "Starbucks", TRUE),
(011, 3045, "Ale", "Juice", "Team Leader", "Hardlines", TRUE),
(012, 33456, "Al", "Jibs", "Team Leader", "Softlines", TRUE),
(013, 2134,"Aba", "Jensen", "Backroom Team Member", "Backroom", TRUE),
(014, 890, "Ada", "Jingor", "Team Leader", "Guest Services", TRUE),
(015,  556, "Adrian", "Jamesson", "Team Leader", "Starbucks", TRUE),
(015,  1556, "Adrianne", "Jamessoni", "Team Leader", "Fulfillment", TRUE);

