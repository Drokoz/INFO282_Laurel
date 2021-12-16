import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

//Context
import ProductosContext from '../../context/productos/productosContext';

const ProductoPedido = ({producto}) => {
    const {id, cantidad, nombre, precio, comentarios} = producto

    return ( 
        <tr>
            <td>{cantidad}</td>
            <td>{nombre}</td>
            <td><span className="font-weight-bold"> $ {cantidad*precio} </span></td>
            <td>{comentarios}</td>
        </tr>
     );
}
 
export default ProductoPedido;