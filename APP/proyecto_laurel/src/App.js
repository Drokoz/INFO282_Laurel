import React, {  } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Componentes
//Productos
import ListadoProductos from './components/productos/ListadoProductos';
import NuevoProducto from './components/productos/NuevoProducto';
import EditarProducto from './components/productos/EditarProducto';

//Sesion
import InicioSesion from './components/auth/InicioSesion';
import NuevoUsuario from './components/auth/NuevoUsuario';
import RutaPrivada from './components/rutas/RutaPrivada';

//Admin
import NuevoUsuarioAdmin from './components_administrador/auth/NuevoUsuarioAdmin';
import PrincipalAdmin from './components_administrador/PrincipalAdmin';

//Meseros
import MenuMeseros from './components_meseros/pedidos/MenuMeseros';
import ListadoProductosParaPedido from './components_meseros/pedidos/ListadoProductosParaPedidos';
//Context
import ProductoState from './context/productos/productosState';
import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autentificacion/authState';
import tokenAuth from './config/token';
import PedidoState from './context/pedidos/pedidoState'
import MesaState from './context/mesas/mesaState';
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
          <MesaState>
            <PedidoState>
                <Router>
                    <Switch>
                      <Route exact path="/" component={InicioSesion}/>
                      <Route exact path="/usuario/nuevo" component={NuevoUsuario} />

                      <Route exact path="/admin/menu" component={PrincipalAdmin} />
                      <Route exact path="/admin/usuario/nuevo"component={NuevoUsuarioAdmin} />
                      
                      <Route exact path="/meseros/menu"component={MenuMeseros} />
                      <Route exact path="/meseros/productos/listado"component={ListadoProductosParaPedido} />

                      <RutaPrivada exact path="/productos/listado" component={ListadoProductos} />
                      <RutaPrivada exact path="/productos/nuevo" component={NuevoProducto} />
                      <RutaPrivada exact path="/productos/editar" component={EditarProducto} />
                    </Switch>
                </Router>
              </PedidoState>
            </MesaState>
        </AuthState>
      </AlertaState>
    </ProductoState>
  );
}

export default App;
