const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const tipoUsuarioControlador = require('../controladores/tipoUsuarioControlador');
const auth = require('../middleware/auth');
// /api/tipoUsuario


router.get('/obtener',
[

],
    auth,
    tipoUsuarioControlador.obtenerTipoUsuarios
);

module.exports = router;