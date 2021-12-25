import React, { useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.css';
import MesaContext from "../context/mesas/mesaContext";
import MesaAdmin from "../components_administrador/pedidos/MesaAdmin";

const ListadoPedidosCocinaBartender = () => {
    const mesaContext = useContext(MesaContext);
    const {mesas, obtenerMesas} = mesaContext;

    useEffect( () => {
        obtenerMesas();
    },[])
    return (
        <div className='contenedor-app'>
            <div className='seccion-principal'>
                <Tabs>
                    {mesas.lenght === 0 ? "No hay mesas" : (
                        
                        Object.keys(mesas).map(ubicacion => (
                                <Tab title={ubicacion} key={ubicacion} eventKey={ubicacion}>
                                    <MesaAdmin
                                        mesas={mesas[ubicacion].mesas}
                                    />
                                </Tab>
                        ))
                            
                    )}
                </Tabs>
            </div>
        </div>
     );
}
 
export default ListadoPedidosCocinaBartender;