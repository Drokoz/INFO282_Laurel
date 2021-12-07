const jwt = require('jsonwebtoken')

module.exports = function(req,res,next) {
    //Leer el token del header
    const token= req.header('x-auth-token')
    console.log(token)
    //revisar si no hay token
    if(!token){
        return res.status(401).json({msg: 'No hay Token, permiso no autorizado'})
    }
    //validar el token

    try {
        const cifrado = jwt.verify(token, 'MpSuFpDbYaUhMvCw');
        req.usuario = cifrado.usuario;
        next();
    } catch (error) {
        return res.status(401).json({msg: 'Token no válido'})
    }
}