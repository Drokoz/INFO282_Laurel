import React, {Fragment, useEffect, useState} from 'react';
import Producto from './Producto'
import Axios from "axios";
const Productos = () => {
    const [productoList, setProductoList] = useState([]);
    useEffect( () => {
        const getProductos = () => {
            Axios.get("http://localhost:3001/api/productos").then((response) => {
                setProductoList(response.data);
            });
          };
        getProductos();
    },[]);
    return (
        <Fragment>
            <h2 className="text-center my-5">
                Listado de Productos
            </h2>
            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <th scope="col">Nombres</th>
                    <th scope="col">Precios</th>
                    <th scope="col">Categorias</th>
                    <th scope="col">Acciones</th>
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