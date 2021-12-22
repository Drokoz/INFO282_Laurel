import React, {useContext} from 'react';

const ProductoPedido = ({producto}) => {
    const { cantidadProducto, nombreProducto, precioProducto, comentariosProducto, precioTotal} = producto

    return ( 
        <tr>
            <td>{cantidadProducto}</td>
            <td>{nombreProducto}</td>
            <td><span className="font-weight-bold"> $ {precioTotal} </span></td>
            <td>{comentariosProducto}</td>
        </tr>
     );
}
 
export default ProductoPedido;