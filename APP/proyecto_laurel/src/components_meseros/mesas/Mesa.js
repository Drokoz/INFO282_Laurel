import React, {useContext} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import MesaContext from '../../context/mesas/mesaContext';

import PedidoContext from '../../context/pedidos/pedidoContext';

const Mesa = (mesas) => {

    const mesaContext = useContext(MesaContext);
    const {mesaActual} = mesaContext;

    const pedidoContext = useContext(PedidoContext);
    const {otorgarPedido} = pedidoContext;

    const onSelect = (eventKey, e) => {
        const idx = mesas.mesas.findIndex( mesa => mesa.id == eventKey);
        mesaActual(mesas.mesas[idx]);
        otorgarPedido(eventKey);
        
    }
    return (
        <Tabs onSelect={onSelect}>
            {mesas.mesas.map(mesa => (

                <Tab
                key={mesa.id}
                eventKey={mesa.id}
                title={mesa.nombre}
                >
                    
                </Tab>
            ))}
        </Tabs>
        
     );
}
 
export default Mesa;