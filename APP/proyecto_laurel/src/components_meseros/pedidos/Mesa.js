import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown'
const Mesa = (mesas) => {
    console.log(mesas.mesas)
    return (
        
        mesas.mesas.map(mesa => (
            <Dropdown.Item eventKey={mesa.id}>{mesa.nombre}</Dropdown.Item>
            )
        )
        
     );
}
 
export default Mesa;