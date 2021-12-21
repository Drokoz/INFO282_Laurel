import React, {Fragment,useState, useContext, useEffect, useReducer} from 'react';

//Componentes
import Producto from './ProductoPedido'

//Context
import PedidoContext from '../../context/pedidos/pedidoContext';
import MesaContext from '../../context/mesas/mesaContext';

const ListadoPedido = () => {

    const pedidoContext = useContext(PedidoContext);
    const {obtenerProductosPedido, pedido} = pedidoContext;

    const mesaContext = useContext(MesaContext);
    const {mesa, obtenerMesaActual} = mesaContext;

    useEffect( () => {
        obtenerProductosPedido();   
    },[]);
    return ( 
        <Fragment>
            
            <h2 className="text-center my-5">
                Pedido {mesa}
            </h2>
    
            <table className="table table-striped">
            
                <thead className="bg-primary table-dark">                    
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Comentarios</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {pedido.lenght === 0 ? "No hay productos" : (
                        pedido.map(producto => (
                            <Producto
                                key={producto.idProducto}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>

     );
}
 
export default ListadoPedido;