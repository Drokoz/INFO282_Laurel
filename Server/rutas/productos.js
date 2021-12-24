const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const productoControlador = require('../controladores/productosControlador')
const auth = require('../middleware/auth')
// /api/productos

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
router.get('/obtener/producto',
[

],
    auth,
    productoControlador.obtenerProductosID
);
router.delete('/eliminar/:id',
[

],
    auth,
    productoControlador.eliminarProducto
);
module.exports = router;