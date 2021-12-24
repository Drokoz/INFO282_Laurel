const mysql = require('mysql');

exports.obtenerProductosPedido = (req, res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });
  
    db.query("SELECT * FROM pedidos", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(Object.values(JSON.parse(JSON.stringify(result))));
    }
    });
}

exports.obtenerProductosPedidoxMesa = async (req, res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });
    console.log(req.body);
    const idProducto = await req.body.idProducto;
    const mesaPedido = await req.body.mesaPedido;
    console.log(idProducto,mesaPedido);
    try {
        const sqlGet = "SELECT * FROM `pedidos` WHERE `idProducto` = ? AND `mesaPedido` = ?;"
        db.query(sqlGet, [idProducto,mesaPedido],
            function(err, result) { 
                if(err) {
                  console.log(err);
                }
                else{
                    console.log(result);
                    const resu = Object.values(JSON.parse(JSON.stringify(result)));
                    console.log(resu);
                    res.send(resu);
                }
            }
        );
       
    } catch (error) {
        console.log(error);
    }
}
exports.eliminarProductoPedido = (req, res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });

    const id = req.params.id;
    console.log(id);
    const sqlDelete = "DELETE FROM pedidos WHERE idpedidos = (?);"
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

exports.nuevoProductoPedido = (req,res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });
    
    const idProducto = req.body.idProducto
    const mesaPedido = req.body.mesaPedido
    const cantidadProducto = req.body.cantidadProducto
    const comentariosProducto = req.body.comentariosProducto
    const sqlInsert = "INSERT INTO `pedidos` (`idProducto`, `mesaPedido`, `cantidadProducto`, `comentariosProducto`) VALUES (?,?,?,?);"
    db.query(sqlInsert, [idProducto, mesaPedido, cantidadProducto,comentariosProducto],
        function(err,row,fields) { 
            if(err) {
                console.log(err);
            }
            else{
                res.send("Insertado")
            }
        });
      
}

exports.modificarProductoPedido = (req,res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });
    console.log("En modificar producto pedido");
    console.log(req.body);
    const idpedidos = req.body.idpedido
    const idProducto = req.body.idProducto
    const mesaPedido = req.body.mesaPedido
    const cantidadProducto = req.body.cantidadProducto.toString()
    const comentariosProducto = req.body.comentariosProducto
    console.log(idpedidos,idProducto,mesaPedido,cantidadProducto,comentariosProducto);
    const sqlModificar = "UPDATE `pedidos` SET `idProducto` = (?), `mesaPedido` = (?), `cantidadProducto` = (?) , `comentariosProducto` = (?) WHERE (`idpedidos` = (?));"

    db.query(sqlModificar, [idProducto, mesaPedido, cantidadProducto,comentariosProducto, idpedidos],
        function(err,row,fields) {
            if(err) {
                console.log(err);
            }
            else{
                res.send("Modificado")
            }
        });
      
}
