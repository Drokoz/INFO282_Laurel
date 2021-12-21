const mysql = require('mysql');

exports.obtenerMesas = (req, res) => {
    const db = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "T^KppimYHbgP9o$$",
      database: "LaurelAppDB",
      insecureAuth: "True"
  });
  
  
      db.query("SELECT * FROM mesas", (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
}
  