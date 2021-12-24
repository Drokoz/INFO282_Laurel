import React, {useContext, useEffect} from 'react';

import MesaContext from '../../context/mesas/mesaContext';
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import PedidoContext from '../../context/pedidos/pedidoContext';

import ListadoMesasMiddle from './ListadoMesasMiddle';
const MesaAdmin = (mesas) => {
    const mesaContext = useContext(MesaContext);
    const {mesaActual, pedidoMesa, mesaEntregarPedido} = mesaContext;

    const pedidoContext = useContext(PedidoContext);
    const { obtenerProductosPedido, pedido} = pedidoContext;
    
    console.log(mesas.mesas);
    if (pedido.lenght !== 0){
        console.log((pedido));
        console.log(pedido.filter(productos => productos.mesaPedido == mesas.mesas[0].id));
    }
    
    useEffect(() => {
        obtenerProductosPedido()
    },[])
    return (
        
            <Accordion>
                {pedido.lenght !== 0 ? (
                    mesas.mesas.map(mesa => (
                        
                        <Accordion.Item eventKey={mesa.id} key={mesa.id}>
                        <Accordion.Header>{mesa.nombre} {mesa.ubicacion} </Accordion.Header>
                            <Accordion.Body>
                                    <ListadoMesasMiddle Productos={pedido.filter(productos => productos.mesaPedido == mesa.id)}/>
                            </Accordion.Body>
                        </Accordion.Item>
                ))
                ): null   }
        </Accordion>
        
     );
}
 
export default MesaAdmin;