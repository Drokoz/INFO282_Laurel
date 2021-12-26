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

  const id = req.params.id;
  const sqlDelete = "DELETE FROM producto WHERE idproducto = (?);"

  db.query(sqlDelete, [id],
  function(err,row,fields) { 
      if(err) {
        res.json({error:err.errno});
      }
      else{
          res.send("Eliminado");
      }
    });
  }

exports.obtenerProductosID = async (req, res) => {
  const db = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "T^KppimYHbgP9o$$",
      database: "LaurelAppDB",
      insecureAuth: "True"
  });

  const idProducto = await req.body.idProducto;
  try {
      const sqlGet = "SELECT * FROM `producto` WHERE idproducto = (?);"
      db.query(sqlGet, [idProducto],
          function(err, result) { 
              if(err) {
                console.log(err);
              }
              else{
                  const resu = Object.values(JSON.parse(JSON.stringify(result)))[0];
                  console.log(resu);
                  res.send(resu);
              }
          }
      );
     
  } catch (error) {
      console.log(error);
  }
}


exports.modificarProducto = (req,res) => {
  const db = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "T^KppimYHbgP9o$$",
      database: "LaurelAppDB",
      insecureAuth: "True"
  });
  try{
  console.log("En modificar producto");
  console.log(req.body);
  const idProducto = req.body.idProducto
  const nombreProducto = req.body.nombreProducto
  const precioProducto = parseInt(req.body.precioProducto)
  const categoriaProducto = req.body.categoriaProducto
  console.log(idProducto,nombreProducto,nombreProducto,categoriaProducto);
  const sqlModificar = "UPDATE `producto` SET `nombre_producto` = (?), `precio_producto` = (?), `categoria_producto` = (?) WHERE (`idproducto` = (?));"

  db.query(sqlModificar, [nombreProducto, precioProducto,categoriaProducto, idProducto],
      function(err,row,fields) {
        console.log(err);
          if(err) {
            console("EN ERROR MODIFICAR")
              console.log(err);
          }
          else{
              res.send("Modificado")
          }
      });
    }
      catch (error) {
        console("EN ERROR MODIFICAR")
        console.log(error);
    }
}
