import React, {useContext, useEffect} from 'react';

//Componentes
import ListadoMesas from '../mesas/ListadoMesas';
import ListadoProductosParaPedido from '../productos_para_pedidos/ListadoProductosParaPedidos';
import ListadoPedido from './ListadoPedido';

//Context
import AuthContext from '../../context/autentificacion/authContext';
import PedidoContext from '../../context/pedidos/pedidoContext';

const MenuMeseros = () => {
    //Extraer la información de autentificacion
    const authContext = useContext(AuthContext);
    const {usuario} = authContext;

    const pedidoContext = useContext(PedidoContext);
    const {obtenerProductosPedido} = pedidoContext;

    useEffect(() =>{
        obtenerProductosPedido()
    },[])
    return (
        <div className='contenedor-app-pedidos'>
            <aside>
                <div className='seccion-listado'>
                {usuario ?
                    <h1> 
                        <span>
                            Hola, {usuario.nombreUsuario}
                        </span> 
                        
                    </h1>
                : null}
                </div>
                <ListadoPedido/>
            </aside>
           
            <div className='container'>
                    <div>
                        <h2>Tus mesas</h2>
                        <ListadoMesas/>
                    </div>
                    <div className='container'>
                        <h2>Productos</h2>
                        <ListadoProductosParaPedido/>
                    </div>
                
            </div>
        </div>
     );
}
 
export default MenuMeseros;