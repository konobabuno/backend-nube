const dotenv = require("dotenv");
dotenv.config();

const mysql = require("mysql");
let conn;

try{
    conn = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        port: process.env.DBPORT
    });
}
catch(error)
{
    console.log("Error al conectar: ", error)
}

module.exports = {conn};