import React, {  } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import './App.css';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import EliminarProducto from './components/EliminarProducto';
import InicioSesion from './components/auth/InicioSesion';
import NuevoUsuario from './components/auth/NuevoUsuario';


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={InicioSesion} />
          <Route exact path="/usuario/nuevo" component={NuevoUsuario} />
          <Route exact path="/productos/listado" component={Productos} />
          <Route exact path="/productos/nuevo" component={NuevoProducto} />
          <Route exact path="/productos/editar" component={EditarProducto} />
          <Route exact path="/productos/eliminar" component={EliminarProducto} />
        </Switch>
    </Router>
  );
}

export default App;
