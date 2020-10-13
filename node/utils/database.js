var mysql = require('mysql2');

var con = mysql.createConnection(process.env.DATABASE_URL || {
    host: "localhost",
    user: "root",
    password: "",
    database: "vacation_db"
});

module.exports = con.promise();