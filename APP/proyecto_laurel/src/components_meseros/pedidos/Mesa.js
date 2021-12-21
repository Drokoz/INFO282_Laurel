import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown'
import MesaContext from '../../context/mesas/mesaContext';
import { Redirect } from 'react-router-dom';
const Mesa = (mesas) => {
    const mesaContext = useContext(MesaContext);
    const {mesaActual} = mesaContext;

    const onClick = (e) => {
        mesaActual(e.target.id, e.target.value);
    }
    console.log(mesas.mesas);
    return (
        
        mesas.mesas.map(mesa => (

            <Dropdown.Item
            as="button"
            key={mesa.id}
            eventKey={mesa.id}
            id={mesa.id}
            value={mesa.ubicacion}
            nombre={mesa.nombre}
            onClick={onClick}
            >
                {mesa.nombre}</Dropdown.Item>
            )
        )
        
     );
}
 
export default Mesa;