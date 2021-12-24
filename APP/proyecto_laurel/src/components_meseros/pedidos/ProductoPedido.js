import React, {useContext} from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';
const ProductoPedido = ({producto}) => {

    const pedidoContext = useContext(PedidoContext);
    const {eliminarProductoPedido} = pedidoContext;
    
    const { cantidadProducto, nombreProducto, precioProducto, comentariosProducto} = producto

    return ( 
        <tr>
            <td>{cantidadProducto}</td>
            <td>{nombreProducto}</td>
            <td><span className="font-weight-bold"> $ {cantidadProducto * precioProducto} </span></td>
            <td>{comentariosProducto}</td>
            <td><button
                        type="button"
                        className="btn btn-danger"
                        onClick = {() => {eliminarProductoPedido(producto)}}
                        >-
                </button>
            </td>
        </tr>
     );
}
 
export default ProductoPedido;