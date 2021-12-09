const mysql = require('mysql')
const bcryptjs = require('bcryptjs')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')



exports.autenticarUsuario = async (req,res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });
    
    //Revisar errores

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()})
    }

    try {
        
        //guardar usuario

        const {correoUsuario,contraseñaUsuario} = await req.body
        console.log(contraseñaUsuario)
        db.query("SELECT * FROM `usuarios` WHERE `correo_usuario` = (?)", [correoUsuario], async function (err, result) {
            
            //Verificar que no se haya creado el usuario anteriormente
            if (err) throw err;

            console.log("Verificando...")
            let creado = false;
            if (result[0] != undefined){
                result = Object.values(JSON.parse(JSON.stringify(result)));
                if (result[0].correo_usuario == correoUsuario) creado = true;
            }

            //Si el usuario está
            if (creado){
                //Verifica contraseña
                console.log(contraseñaUsuario,result[0].contraseña_usuario )
                const contraseñaCorrecta = await bcryptjs.compare(contraseñaUsuario,result[0].contraseña_usuario)

                if (!contraseñaCorrecta) return res.status(400).json({msg:"contraseña incorrecta"});
                
                const payload = {
                    usuario:{
                        email: correoUsuario
                    }
                }
                console.log( process.env.SECRETA);
                jwt.sign(payload, 'MpSuFpDbYaUhMvCw',{
                    expiresIn: 14400
                }, (error,token) => {
                    if(error) throw error;
                    res.json({token: token});
                })                
            }
            else{
                res.status(400).json({msg:"Usuario no existe"})
            }
          });


    } catch (error) {
        console.log(error);
        res.status(400).send("Hubo un error de registro")
    }
}


//Obtener usuario autenticado
exports.obtenerUsuario = async (req,res) => {
    const db = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "T^KppimYHbgP9o$$",
        database: "LaurelAppDB",
        insecureAuth: "True"
    });
    
    try {
        const email = req.usuario.email;
        db.query("SELECT * FROM `usuarios` WHERE `correo_usuario` = (?)", [email], async function (err, result) {
            if(err) {
              console.log(err);
            }
            else{
                result = Object.values(JSON.parse(JSON.stringify(result)));
                result = result[0];
                console.log(result);
                res.json({correoUsuario:result.correo_usuario, nombreUsuario: result.nombre_usuario});
            }
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Usuario no encontrado'});
    }
}