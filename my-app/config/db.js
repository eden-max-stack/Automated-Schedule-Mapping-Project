const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',          
    password: process.env.MYSQL_PASSWORD,  // your MySQL password
    database: process.env.MYSQL_DB
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = db.promise();