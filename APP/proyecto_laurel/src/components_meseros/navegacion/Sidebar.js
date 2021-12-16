import React from 'react';
import ListadoMesas from '../pedidos/ListadoMesas';
const SideBar = () => {
    return (
        //Obtener usuario

        
        <aside>
            <h1>
                <span>
                    Hola Gabriel
                </span>
            </h1>

            <div className='proyectos'>
                <h2>Tus mesas</h2>
                <ListadoMesas/>
            </div>
        </aside>
     );
}
 
export default SideBar;