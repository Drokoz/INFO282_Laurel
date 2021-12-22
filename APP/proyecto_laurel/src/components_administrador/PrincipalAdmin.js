import React, {Fragment, useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";

//Componentes
import SideBar from '../components/navegacion/Sidebar';
import ListadoProductos from '../components/productos/ListadoProductos'

//Context
//import ProductosContext from '../../context/productos/productosContext';
//import AuthContext from '../../context/autentificacion/authContext';

//USAR CONTEXT PARA CONTROLAR QUE COMPONENTE SE UTILIZA O SE MUESTRA EN LA DERECHA

const PrincipalAdmin = () => {
 
    return (
        <div className='contenedor-app'>
            <SideBar/>
            <div className='seccion-principal'>
                <main>
                    <div className='contenedor-tareas'>
                        <ListadoProductos/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default PrincipalAdmin;