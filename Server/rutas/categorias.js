const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const categoriaControlador = require('../controladores/categoriaControlador');
const auth = require('../middleware/auth');
// /api/categorias


router.get('/obtener',
[

],
    auth,
    categoriaControlador.obtenerCategorias
);
module.exports = router;