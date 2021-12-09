import React, {Fragment, useEffect, useState, useContext} from 'react';
import Producto from './Producto'
import clienteAxios from '../../config/axios';
import Header from '../Header';
import AuthContext from '../../context/autentificacion/authContext';
import { Link } from "react-router-dom";
const Productos = () => {
    //Extraer la información de autentificacion

    const authContext = useContext(AuthContext);
    const {usuarioAutenticado} = authContext;

    const [productoList, setProductoList] = useState([]);
    useEffect( () => {
        
        const getProductos = () => {
            clienteAxios.get("/api/productos/obtener").then((response) => {
                setProductoList(response.data);
            });
          };
        usuarioAutenticado();
        getProductos();
        setProductoList(productoList.sort((producto_a, producto_b) => producto_a.categoria_producto.localeCompare(producto_b)))
    },[productoList]);
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
                    {productoList === 0 ? "No hay productos" : (
                        productoList.map(producto => (
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