import React, { useContext, useEffect } from 'react';
import Mesa from './Mesa';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ButtonGroup} from 'react-bootstrap'
import MesaContext from '../../context/mesas/mesaContext';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
const ListadoMesas = () => {
    const mesaContext = useContext(MesaContext);
    const {mesas, obtenerMesas, mesaActual} = mesaContext;

    useEffect( () => {
        obtenerMesas();
    },[])
    return (
        <div className="aside">
        <Tabs>
            {mesas.lenght === 0 ? "No hay mesas" : (
                
                Object.keys(mesas).map(ubicacion => (
                        <Tab title={ubicacion} key={ubicacion} eventKey={ubicacion}>
                            <Mesa
                                mesas={mesas[ubicacion].mesas}
                            />
                        </Tab>
                ))
                    
            )}
        </Tabs>
        </div>
     );
}
 
export default ListadoMesas;