import { REGISTRO_EXITOSO, REGISTRO_ERROR,OBTENER_USUARIO,LOGIN_EXITOSO,LOGIN_ERROR,CERRAR_SESION } from "../../types";

import React, {useReducer} from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";

const AuthState = props =>{
    const estadoInicial = {
        token: localStorage.getItem('token'),
        autenticador: null,
        usuario: null,
        mensaje: null
    }
    
    const [state,dispatch] = useReducer(authReducer, estadoInicial)

    //Funciones

    
    return(
        <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState;