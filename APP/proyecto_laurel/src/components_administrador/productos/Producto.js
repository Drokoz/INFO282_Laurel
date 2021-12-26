import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';

//Context
import ProductosContext from '../../context/productos/productosContext';

const Producto = ({producto}) => {

    //Extraer información de producto
    const {idproducto, nombre_producto, precio_producto, categoria_producto} = producto
    
    //Context
    const productosContext = useContext(ProductosContext);
    const {eliminarProducto,guardarProductoModificado, msg} = productosContext;

    
    return (
        
        <tr>
            
            <td>{nombre_producto}</td>
            <td><span className="font-weight-bold"> $ {precio_producto} </span></td>
            <td>{categoria_producto}</td>
            <td className="acciones">
                <Link to={`/productos/editar`} 
                className="btn btn-secondary mr-2"
                
                onClick={() => guardarProductoModificado(producto)}
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