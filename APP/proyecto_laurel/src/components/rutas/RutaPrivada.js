import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../../context/autentificacion/authContext';

const RutaPrivada = ({component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const {autenticado, cargando, usuarioAutenticado} = authContext;

    useEffect (() => {
        usuarioAutenticado();
    }, []);
    return ( 
        
        <Route {...props} render={ props => !autenticado ? <Redirect to="/" />
         : <Component {...props} />
        }/>

     );
}
 
export default RutaPrivada;