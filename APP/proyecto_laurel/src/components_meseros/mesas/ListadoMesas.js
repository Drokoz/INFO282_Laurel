import React, { useContext, useEffect } from 'react';

//Componentes
import Mesa from './Mesa';

//Context
import MesaContext from '../../context/mesas/mesaContext';
//Tabs
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
const ListadoMesas = () => {
    const mesaContext = useContext(MesaContext);
    const {mesas, obtenerMesas} = mesaContext;

    
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