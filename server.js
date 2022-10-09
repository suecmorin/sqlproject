const inquire = require('inquirer');
const fs = require('fs');
const express = require('express');
const path = require('path');
//const api = require('./routes/index.js');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password
    password: 'SUE4sql',
    database: './db/hr_db'
  },
  console.log(`Connected to the hr_db database.`)
);
////route for read file

//route for write file

//route for update file

//route for homepage

db.query('SELECT * FROM hr', function (err, results) {
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
  });

 
