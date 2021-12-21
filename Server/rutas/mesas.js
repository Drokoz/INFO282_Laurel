const express = require('express');
const router = express.Router();

const mesaControler = require('../controladores/mesaControlador');
// api/mesas

router.get('/obtener',
[

],
    mesaControler.obtenerMesas
);

module.exports = router;