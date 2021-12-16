import React, {Fragment, useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";

//Componentes
import SideBar from '../navegacion/Sidebar';
import Header from '../../components/navegacion/Header';
import NuevoPedido from './NuevoPedido';
import ListadoPedido from './ListadoPedido';
//Context
//import ProductosContext from '../../context/productos/productosContext';
//import AuthContext from '../../context/autentificacion/authContext';


const PrincipalMeseros = () => {
 
    return (
        <div className='contenedor-app'>
            <SideBar/>
            <div className='seccion-principal'>
                <Header/>
                <main>
                    <NuevoPedido/>
                    <div className='contenedor-tareas'>
                        <ListadoPedido/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default PrincipalMeseros;