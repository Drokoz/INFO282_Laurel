const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const productoControlador = require('../controladores/productosControlador')
const auth = require('../middleware/auth')
//crear usuarios

router.post('/nuevo',
[

],
    auth,
    productoControlador.crearProducto
);

router.get('/obtener',
[

],
    auth,
    productoControlador.obtenerProductos
);
router.delete('/eliminar/:id',
[

],
    auth,
    productoControlador.eliminarProducto
);
module.exports = router;