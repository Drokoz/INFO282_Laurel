import React, {  } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import './App.css';
import ListadoProductos from './components/productos/ListadoProductos';
import NuevoProducto from './components/productos/NuevoProducto';
import EditarProducto from './components/productos/EditarProducto';
import EliminarProducto from './components/productos/EliminarProducto';
import InicioSesion from './components/auth/InicioSesion';
import NuevoUsuario from './components/auth/NuevoUsuario';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autentificacion/authState';
import tokenAuth from './config/token';
import RutaPrivada from './components/rutas/RutaPrivada';
import ProductoState from './context/productos/productosState';

// Revisar Token
const token = localStorage.getItem('token');
if (token){
  tokenAuth(token);
}
function App() {
  return (
    <ProductoState>
      <AlertaState>
        <AuthState> 
          <Router>
              <Switch>
                <Route exact path="/" component={InicioSesion} />
                <Route exact path="/usuario/nuevo" component={NuevoUsuario} />

                <RutaPrivada exact path="/productos/listado" component={ListadoProductos} />
                <RutaPrivada exact path="/productos/nuevo" component={NuevoProducto} />
                <RutaPrivada exact path="/productos/editar" component={EditarProducto} />
                <RutaPrivada exact path="/productos/eliminar" component={EliminarProducto} />

                
              </Switch>
          </Router>
        </AuthState>
      </AlertaState>
    </ProductoState>
  );
}

export default App;
