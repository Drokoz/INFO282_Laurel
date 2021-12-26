const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mesaControler = require('../controladores/mesaControlador');
// api/mesas

router.get('/obtener',
[

],
    auth,
    mesaControler.obtenerMesas
);

module.exports = router;