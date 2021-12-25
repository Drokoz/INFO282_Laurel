import React, {  } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//Componentes
//Productos
import ListadoProductos from './components_administrador/productos/ListadoProductos';
import NuevoProducto from './components_administrador/productos/NuevoProducto';
import EditarProducto from './components_administrador/productos/EditarProducto';

//Sesion
import InicioSesion from './components/auth/InicioSesion';
import NuevoUsuario from './components/auth/NuevoUsuario';
import RutaPrivada from './components/rutas/RutaPrivada';

//Admin
import NuevoUsuarioAdmin from './components_administrador/auth/NuevoUsuarioAdmin';
import PrincipalAdmin from './components_administrador/PrincipalAdmin';
import ListadoPedidosAdmin from './components_administrador/pedidos/ListadoPedidosAdmin';

//Meseros
import MenuMeseros from './components_meseros/pedidos/MenuMeseros';

//Bartender Cocina
import ListadoPedidosCocinaBartender from './components_cocineros_bartender/ListadoPedidosCocinaBartender'
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

                      <RutaPrivada exact path="/admin/menu" component={PrincipalAdmin} />
                      <Route exact path="/admin/usuario/nuevo"component={NuevoUsuarioAdmin} />
                      <Route exact path="/admin/listado/mesas"component={ListadoPedidosAdmin} />

                      <Route exact path="/meseros/menu"component={MenuMeseros} />

                      <RutaPrivada exact path="/productos/listado" component={ListadoProductos} />
                      <RutaPrivada exact path="/productos/nuevo" component={NuevoProducto} />
                      <RutaPrivada exact path="/productos/editar" component={EditarProducto} />

                      <Route exact path="/cb/listado/pedido"component={ListadoPedidosCocinaBartender} />
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
