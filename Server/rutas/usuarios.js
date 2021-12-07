const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const usuarioControlador = require('../controladores/usuarioControlador')
//crear usuarios

router.post('/crear',
[
    check('nombreUsuario','El nombre es obligatorio').not().isEmpty(),
    check('correoUsuario','Ingrese correo valido').isEmail(),
    check('contraseñaUsuario','La contraseña debe ser minimo de 6 caracteres').isLength({min: 6})

],
    usuarioControlador.crearUsuario
);

module.exports = router;