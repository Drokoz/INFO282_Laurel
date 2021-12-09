const mysql = require('mysql')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')

exports.crearUsuario = async (req,res) => {

    //Revisar errores

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()})
    }

    try {
        const db = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "T^KppimYHbgP9o$$",
            database: "LaurelAppDB",
            insecureAuth: "True"
        });
        //guardar usuario

        const {nombreUsuario,correoUsuario,contraseñaUsuario} = await req.body
        console.log(nombreUsuario,correoUsuario,contraseñaUsuario)

        db.query("SELECT * FROM `usuarios` WHERE `correo_usuario` = ?", correoUsuario, async function (err, result) {
            
            //Verificar que no se haya creado el usuario anteriormente
            if (err) throw err;
            let creado = false;

            if (result[0] != undefined){
                result = Object.values(JSON.parse(JSON.stringify(result)));
                console.log(result[0].correo_usuario, correoUsuario);

                if (result[0].correo_usuario == correoUsuario){

                    creado = true;
                    }
                } 

            //Si el usuario no está creado
            if (creado){

                res.status(400).json({msg:"Usuario ya creado"});

            }
            else{
                console.log(typeof(contraseñaUsuario));
                const salt = await bcryptjs.genSalt(10);
                const contraseñaUsuario_hashed = await bcryptjs.hash(contraseñaUsuario,salt);
                const sqlInsert = "INSERT INTO `usuarios` (`correo_usuario`, `nombre_usuario`,`contraseña_usuario`) VALUES (?,?,?);"
                db.query(sqlInsert, [correoUsuario, nombreUsuario, contraseñaUsuario_hashed],
                    function(err,row,fields) { 
                            if(err) {
                                console.log("Error de ingreso");
                            console.log(err);
                            }
                            else{
                                const payload = {
                                    usuario:{
                                        email: correoUsuario
                                    }
                                }
                                jwt.sign(payload, 'MpSuFpDbYaUhMvCw',{
                                    expiresIn: 14400
                                }, (error,token) => {
                                    if(error) throw error;
                                    res.json({token: token});
                                })
                                
                            }
                    });
                          //Crear y firmar token

            }
          });
    
    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error de registro")
    }
}
