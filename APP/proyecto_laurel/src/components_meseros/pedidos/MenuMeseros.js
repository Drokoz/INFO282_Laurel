import React, {useContext, useEffect} from 'react';

//Componentes
import ListadoMesas from './ListadoMesas';
import NuevoPedido from './NuevoPedido';
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
            <h1>
                <span>
                    Hola, {usuario}
                </span>
            </h1>
            <div className='proyectos'>
                <h2>Tus mesas</h2>
                <ListadoMesas/>
            </div>
            <div className='seccion-principal align-center'>
                <div className='proyectos proyecto-izquierda'>
                    <NuevoPedido/>
                </div>
                <div className='proyectos proyecto-derecha'>
                    <ListadoPedido/>
                </div>
            </div>
        </div>
     );
}
 
export default MenuMeseros;