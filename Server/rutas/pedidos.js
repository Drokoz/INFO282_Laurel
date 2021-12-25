const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const pedidosControlador = require('../controladores/pedidosControlador')
const auth = require('../middleware/auth')
// /api/pedido

router.post('/nuevo',
[

],
    auth,
    pedidosControlador.nuevoProductoPedido
);

router.get('/obtener',
[

],
    auth,
    pedidosControlador.obtenerProductosPedido
);
router.get('/obtener/producto-mesa',
[

],
    auth,
    pedidosControlador.obtenerProductosPedidoxMesa
);
router.delete('/eliminar/:id',
[

],
    auth,
    pedidosControlador.eliminarProductoPedido
);
router.put('/modificar/',
[

],
    auth,
    pedidosControlador.modificarProductoPedido
);



module.exports = router;