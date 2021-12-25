import React, {Fragment, useContext, useEffect} from 'react';

//Componentes
import Producto from './ProductoPedido'

//Context
import PedidoContext from '../../context/pedidos/pedidoContext';
import MesaContext from '../../context/mesas/mesaContext';

const ListadoPedido = () => {

    const pedidoContext = useContext(PedidoContext);
    const {pedido,pedidoxMesa,eliminarPedido,otorgarPedido,obtenerProductosPedido} = pedidoContext;

    const mesaContext = useContext(MesaContext);
    const {mesa} = mesaContext;

    

    function add(sumaTotal, a) {
        return sumaTotal + a.precioProducto;
      }
    useEffect( () => {
        
        if(mesa){
            otorgarPedido(mesa.id)
        }
        if(pedido.lenght === 0){
            obtenerProductosPedido()
        }
        
    },[pedido,mesa])
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
                        <th scope="col">Eliminar</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {pedidoxMesa ? pedidoxMesa.map(producto => (
                            <Producto
                                key={producto.idpedido}
                                producto={producto}
                            />
                        )): null }
                </tbody>
                <tbody>
                    {pedidoxMesa.lenght === 0 || pedidoxMesa.reduce(add,0) === 0 ? null : (
                        <tr>
                            <th></th>
                            <th> Total = </th>
                            <td><span className="font-weight-bold"> $ {pedidoxMesa.reduce(add,0)} </span></td>
                            <th></th>
                            <th></th>
                        </tr>
                        )}
                </tbody>
            </table>
            {mesa ?
                <button
                        type="button"
                        className="btn btn-danger"
                        onClick = {() => {eliminarPedido(mesa.id)}}
                        >Cerrar Mesa</button>
            : null}
        </Fragment>

     );
}
 
export default ListadoPedido;