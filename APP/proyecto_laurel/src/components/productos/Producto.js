import React from 'react';
import {Link} from 'react-router-dom';
import clienteAxios from '../../config/axios';


const eliminarProducto = (id_producto) => {
    clienteAxios.delete(`/api/productos/eliminar/${id_producto}`);
}
const Producto = ({producto}) => {
    const {idproducto, nombre_producto, precio_producto, categoria_producto} = producto
    return ( 
        <tr>
            <td>{nombre_producto}</td>
            <td><span className="font-weight-bold"> $ {precio_producto} </span></td>
            <td>{categoria_producto}</td>
            <td className="acciones">
                <Link to={`./productos/editar`} className="btn btn-primary mr-2"
                >Editar</Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick = {() => {eliminarProducto(idproducto)}}
                    >Eliminar</button>
                </td>
        </tr>
     );
}
 
export default Producto;