const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T^KppimYHbgP9o$$",
    database: "LaurelAppDB",
    insecureAuth: "True"
});

export default db;