const express = require('express');
const {check} = require('express-validator');
const router = express.Router();
const pedidosControlador = require('../controladores/pedidosControlador')
const auth = require('../middleware/auth')
// /api/pedido

router.post('/nuevo',
[

],
    pedidosControlador.nuevoProductoPedido
);

router.get('/obtener',
[

],
    pedidosControlador.obtenerProductosPedido
);
router.get('/obtener/producto-mesa',
[

],
    pedidosControlador.obtenerProductosPedidoxMesa
);
router.delete('/eliminar/:id',
[

],
    pedidosControlador.eliminarProductoPedido
);
router.put('/modificar/',
[

],
    pedidosControlador.modificarProductoPedido
);



module.exports = router;