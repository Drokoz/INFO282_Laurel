import React, {Fragment, useEffect, useState, useContext} from 'react';
import { Link } from "react-router-dom";

//Componentes
import Producto from './Producto'
import Header from '../Header';

//Context
import ProductosContext from '../../context/productos/productosContext';
import AuthContext from '../../context/autentificacion/authContext';


const Productos = () => {

    //Extraer la información de autentificacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {productos, obtenerProductos} = productosContext;

 

    useEffect( () => {
        obtenerProductos();
        usuarioAutenticado();
    },[]);
    return (
        
        <Fragment>
            <h1><Header></Header></h1>
            <h2 className="text-center my-5">
                Listado de Productos
                
            </h2>
            <Link to={"/productos/nuevo"}
                            className="btn btn-danger nuevo-post d-block d-md-inline-block float-right"
                            >Agregar Productos
                        </Link>
            <table className="table table-striped">
            
                <thead className="bg-primary table-dark">                    
                    <tr>
                        <th scope="col">Nombres</th>
                        <th scope="col">Precios</th>
                        <th scope="col">Categorias</th>
                        <th scope="col">Acciones</th>
                        
                    </tr>
                    
                </thead>
                <tbody>
                    {productos === 0 ? "No hay productos" : (
                        productos.map(producto => (
                            <Producto
                                key={producto.idproducto}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
        
     );
}
 
export default Productos;