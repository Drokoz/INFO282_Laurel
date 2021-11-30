const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

 

const app = express()
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T^KppimYHbgP9o$$",
    database: "LaurelAppDB",
    insecureAuth: "True"
});

app.use(cors());

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

app.post('/api/insertar', (req,res) => {
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
    
});

app.get("/api/productos", (req, res) => {
    db.query("SELECT * FROM producto", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });


app.delete("/api/eliminarProducto/:id_producto", (req, res) => {
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

});

app.listen(3001, () =>{
    console.log("running on port 3001")
})