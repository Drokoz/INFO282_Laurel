import React from 'react';

//Componentes
import SideBar from '../components_administrador/navegacion/Sidebar';
import ListadoProductos from '../components_administrador/productos/ListadoProductos'


//USAR CONTEXT PARA CONTROLAR QUE COMPONENTE SE UTILIZA O SE MUESTRA EN LA DERECHA

const PrincipalAdmin = () => {
 
    return (
        <div className='contenedor-app'>
            <SideBar/>
            <div className='seccion-principal'>
                <main>
                    <div className='contenedor-tareas'>
                        <ListadoProductos/>
                    </div>
                </main>
            </div>
        </div>
     );
}
 
export default PrincipalAdmin;