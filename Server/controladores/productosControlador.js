const mysql = require('mysql')

exports.crearProducto = (req,res) => {
  const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T^KppimYHbgP9o$$",
    database: "LaurelAppDB",
    insecureAuth: "True"
});


    const nombreProducto = req.body.nombreProducto
    const precioProducto = parseInt(req.body.precioProducto)
    const categoriaProducto = req.body.categoriaProducto
    const sqlInsert = "INSERT INTO `producto` (`nombre_producto`, `precio_producto`, `categoria_producto`) VALUES (?,?,?);"
    db.query(sqlInsert, [nombreProducto, precioProducto, categoriaProducto],
        function(err,row,fields) { 
             if(err) {
               console.log(err);
             }
             else{
                 res.send("Insertado")
             }
          });
    
}

exports.obtenerProductos = (req, res) => {
  const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T^KppimYHbgP9o$$",
    database: "LaurelAppDB",
    insecureAuth: "True"
});


    db.query("SELECT * FROM producto", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }


  exports.eliminarProducto = (req, res) => {
    const db = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "T^KppimYHbgP9o$$",
      database: "LaurelAppDB",
      insecureAuth: "True"
  });
  
  
    const id = req.params.id_producto;
    const sqlDelete = "DELETE FROM producto WHERE idproducto = (?);"
    db.query(sqlDelete, [id],
    function(err,row,fields) { 
        if(err) {
          console.log(err);
        }
        else{
            res.send("Eliminado")
        }
     });

}