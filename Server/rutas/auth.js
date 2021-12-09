const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const authControlador = require('../controladores/authControlador')
const auth = require('../middleware/auth')
// /api/auth

router.post('/',
/*
[
    check('correoUsuario','Ingrese correo valido').isEmail(),
    check('contraseñaUsuario','La contraseña debe ser minimo de 6 caracteres').isLength({min: 6})

],*/
    authControlador.autenticarUsuario
);

//Obtiene el usuario autenticado
router.get('/',
    auth,
    authControlador.obtenerUsuario
);
module.exports = router;