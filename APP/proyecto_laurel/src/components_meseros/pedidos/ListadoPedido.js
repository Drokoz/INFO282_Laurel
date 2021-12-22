import React, {Fragment,useState, useContext, useEffect, useReducer} from 'react';

//Componentes
import Producto from './ProductoPedido'

//Context
import PedidoContext from '../../context/pedidos/pedidoContext';
import MesaContext from '../../context/mesas/mesaContext';

const ListadoPedido = () => {

    const pedidoContext = useContext(PedidoContext);
    const {pedidoxMesa} = pedidoContext;

    const mesaContext = useContext(MesaContext);
    const {mesa} = mesaContext;

    useEffect( () => {

    },[pedidoxMesa])
    return ( 
        <Fragment>
            
            {mesa ? <h2 className="text-center my-5">
                Pedido {mesa.nombre} {mesa.ubicacion}
            </h2>: null}
    
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
                    {pedidoxMesa ? pedidoxMesa.map(producto => (
                            <Producto
                                key={producto.idProducto}
                                producto={producto}
                            />
                        )): null }
                </tbody>
            </table>
        </Fragment>

     );
}
 
export default ListadoPedido;