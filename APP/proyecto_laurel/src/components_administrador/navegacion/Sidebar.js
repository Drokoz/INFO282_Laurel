
import React, {useContext, useEffect} from 'react';

//Componentes
import Header from '../../components_administrador/navegacion/Header';
//Context
import AuthContext from '../../context/autentificacion/authContext';


const SideBar = () => {
    //Extraer la información de autentificacion
    const authContext = useContext(AuthContext);
    const {usuarioAutenticado, cerrarSesion, usuario} = authContext;
    

    useEffect(() => {
        usuarioAutenticado();
        console.log(usuario);
    }, [])

    return (
        <aside>
            <h1> {usuario ? <span>
                    Bienvenido, {usuario.nombreUsuario}
                </span>
                : null}
                
            </h1>

            <div className='proyectos'>
                <h2>Secciones</h2>
                <Header/>
            </div>
            <div className='proyectos'>
                <button
                    className="btn btn-danger nuevo-post d-block"
                    onClick ={() => cerrarSesion()}
                >Cerrar Sesión
                </button>
            </div>
        </aside>
     );
}
 
export default SideBar;