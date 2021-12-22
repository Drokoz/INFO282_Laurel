import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown'
import MesaContext from '../../context/mesas/mesaContext';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import PedidoContext from '../../context/pedidos/pedidoContext';
const Mesa = (mesas) => {

    const mesaContext = useContext(MesaContext);
    const {mesaActual, pedidoMesa, mesaEntregarPedido} = mesaContext;

    const pedidoContext = useContext(PedidoContext);
    const {otorgarPedido} = pedidoContext;

    const onSelect = (eventKey, e) => {
        const idx = mesas.mesas.findIndex( mesa => mesa.id == eventKey);
        otorgarPedido(eventKey);
        mesaActual(mesas.mesas[idx]);
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