import React, {  } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import './App.css';
import Header from './components/Header';
import Productos from './components/productos/Productos';
import NuevoProducto from './components/productos/NuevoProducto';
import EditarProducto from './components/productos/EditarProducto';
import EliminarProducto from './components/productos/EliminarProducto';
import InicioSesion from './components/auth/InicioSesion';
import NuevoUsuario from './components/auth/NuevoUsuario';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autentificacion/authState';


function App() {
  return (
    <AlertaState>
      <AuthState> 
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
      </AuthState>
    </AlertaState>
  );
}

export default App;
