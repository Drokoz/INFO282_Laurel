const express = require('express')
const mysql = require('mysql')


 

const app = express()
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "T^KppimYHbgP9o$$",
    database: "LaurelAppDB",
    insecureAuth: "True"
});




app.get('/', (req,res) => {
    const sqlInsert = "INSERT INTO `producto` (`nombre_producto`, `precio_producto`, `categoria_producto`) VALUES ('raviol', '9500', 'principal');"
    db.query(sqlInsert, 
        function(err,row,fields) { 
             if(err) {
               console.log(err);
             }
             else{
                 res.send("Insertado")
             }
          });
    
})

app.listen(3001, () =>{
    console.log("running on port 3001")
})