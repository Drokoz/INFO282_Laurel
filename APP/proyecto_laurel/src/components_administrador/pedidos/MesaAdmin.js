import React, {useContext, useEffect} from 'react';

import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';

import PedidoContext from '../../context/pedidos/pedidoContext';

import ListadoMesasMiddle from './ListadoMesasMiddle';
const MesaAdmin = (mesas) => {

    const pedidoContext = useContext(PedidoContext);
    const { obtenerProductosPedido, pedido} = pedidoContext;
    
    useEffect(() => {
        console.log(pedido.length)
        if(pedido.length === 0){
            obtenerProductosPedido()
        }
    },[pedido])
    return (
        
            <Accordion>
                {pedido.lenght !== 0 ? (
                    mesas.mesas.map(mesa => (
                        
                        <Accordion.Item eventKey={mesa.id} key={mesa.id}>
                        <Accordion.Header>{mesa.nombre} {mesa.ubicacion} </Accordion.Header>
                            <Accordion.Body>
                                    <ListadoMesasMiddle Productos={pedido.filter(productos => productos.mesaPedido === mesa.id)}/>
                            </Accordion.Body>
                        </Accordion.Item>
                ))
                ): null   }
        </Accordion>
        
     );
}
 
export default MesaAdmin;