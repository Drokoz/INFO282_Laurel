import React, { useContext, useEffect } from 'react';
import Mesa from './Mesa';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ButtonGroup} from 'react-bootstrap'
import MesaContext from '../../context/mesas/mesaContext';
const ListadoMesas = () => {
    const mesaContext = useContext(MesaContext);
    const {mesas, obtenerMesas, mesaActual} = mesaContext;

    useEffect( () => {
        obtenerMesas();
    },[])
    return ( 
        <ul>
            {mesas.lenght === 0 ? "No hay mesas" : (
                
                Object.keys(mesas).map(ubicacion => (
                        
                        <DropdownButton
                        as={ButtonGroup}
                        key={ubicacion}
                        id={`dropdown-variants-${ubicacion}`}
                        variant={ubicacion.toLowerCase()}
                        title={ubicacion[0].toUpperCase() + ubicacion.substring(1)}

                    >
                        <Mesa
                            mesas={mesas[ubicacion].mesas}
                        />
                    </DropdownButton>
                ))
                    
            )}
        </ul>
     );
}
 
export default ListadoMesas;