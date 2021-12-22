import React, {useContext, useEffect} from 'react';

//Componentes
import ListadoMesas from './ListadoMesas';
import ListadoProductosParaPedido from './ListadoProductosParaPedidos';
import ListadoPedido from './ListadoPedido';
//Context
import AuthContext from '../../context/autentificacion/authContext';


const MenuMeseros = () => {
    //Extraer la información de autentificacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado, usuario} = authContext;

    useEffect( () => {
        //usuarioAutenticado();
    }, [])
    return (
        <div className='seccion-principal'>
            
            <h1> {usuario ? <span>
                    Hola, {usuario.nombreUsuario}
                </span> : null}
                
            </h1>
            <div className='container'>
                <h2>Tus mesas</h2>
                <ListadoMesas/>
                <ListadoProductosParaPedido/>
            </div>
            <div className='container'>
                <ListadoPedido/>
            </div>
        </div>
     );
}
 
export default MenuMeseros;