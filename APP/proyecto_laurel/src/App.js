import React, {  } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import './App.css';
import Header from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';
import EliminarProducto from './components/EliminarProducto';



function App() {
  return (
    <Router>
      <Header/>
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Productos} />
          <Route exact path="/productos/nuevo" component={NuevoProducto} />
          <Route exact path="/productos/editar" component={EditarProducto} />
          <Route exact path="/productos/editar" component={EliminarProducto} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
