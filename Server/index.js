const express = require('express')
const cors = require('cors')

//Configurar aplicación
const app = express()
app.use(cors());

app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());

//Rutas
app.use('/api/usuarios', require('../Server/rutas/usuarios'));
app.use('/api/auth', require('../Server/rutas/auth'));
app.use('/api/productos', require('../Server/rutas/productos'));
app.use('/api/mesas', require('../Server/rutas/mesas'));
app.use('/api/pedidos', require('./rutas/pedidos'));
app.use('/api/categorias', require('./rutas/categorias'));
app.use('/api/tipoUsuario', require('./rutas/tipoUsuario'));

app.listen(3001, () => {
    console.log("running on port 3001")
})