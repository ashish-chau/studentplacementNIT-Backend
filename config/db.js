require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const promisePool = pool.promise();

pool.getConnection((err, connection) => {
    if (err) {
        console.log('Error in connection', err);
    } else {
        console.log('Database connected');
        connection.release(); // Release connection back to the pool
    }
});

module.exports = pool.promise();
