
exports.crearProducto = (req,res) => {
    const nombreProducto = req.body.nombreProducto
    const precioProducto = parseInt(req.body.precioProducto)
    const categoriaProducto = 'Principal'
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
    db.query("SELECT * FROM producto", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  }


  exports.eliminarProducto = (req, res) => {
    const id = req.params.id_producto;
    const sqlDelete = "DELETE FROM producto WHERE idproducto = ?;"
    db.query(sqlDelete, id,
    function(err,row,fields) { 
        if(err) {
          console.log(err);
        }
        else{
            res.send("Eliminado")
        }
     });

}