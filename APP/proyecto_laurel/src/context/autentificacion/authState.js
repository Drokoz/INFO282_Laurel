import { REGISTRO_EXITOSO, REGISTRO_ERROR,OBTENER_USUARIO,
        LOGIN_EXITOSO,LOGIN_ERROR,CERRAR_SESION,
        OBTENER_TIPO_USUARIO,CAMBIAR_ALERTA_AUTH,
        NUEVO_USUARIO} from "../../types";

import React, {useReducer} from "react";
import authReducer from "./authReducer";
import authContext from "./authContext";
import tokenAuth from '../../config/token'
import clienteAxios from "../../config/axios";

const AuthState = props => {
    const estadoInicial = {
        token: localStorage.getItem('token'),
        autenticador: null,
        usuario: null,
        mensaje: null,
        cargando: true,
        tipoUsuarios: []
    }
    
    const [state,dispatch] = useReducer(authReducer, estadoInicial)

    //Funciones

    const registrarUsuario = async datos =>{
        try {
            const respuesta = await clienteAxios.post('/api/usuarios/crear', datos);
            console.log("En registrar");
            console.log(datos.inicio);
            if (datos.inicio){
                dispatch({
                    type: REGISTRO_EXITOSO,
                    payload: respuesta.data
                    
                })
                usuarioAutenticado();
            }
            else{
                dispatch({
                    type: NUEVO_USUARIO,
                    payload:{msg: "Usuario creado correctamente", categoria:"alerta-ok"}
                    
                })
                
            }
            
            
        } catch (error){
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //Usuario autenticado
    const usuarioAutenticado = async () =>{
        const token = localStorage.getItem('token');
        if(token){
            //funcion toker por header
            tokenAuth(token);
        }
        try {
            const respuesta = await clienteAxios.get('/api/auth');
            console.log("EN USUARIOS", respuesta.data)
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data
            })

        } catch (error) {
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
        }
    
        //Cuando el usuario inicia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            console.log(respuesta);
            
            dispatch({
                type:LOGIN_EXITOSO,
                payload:respuesta.data
            });
            
            await usuarioAutenticado();
            
        } catch (error) {
            console.log(error.response.data);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }
            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })
        }
    }
    //Obtener Productos
    const obtenerTipoUsuario = async () =>{
        try {
            const respuesta = await clienteAxios.get("/api/tipoUsuario/obtener")
            console.log("Respuesta obtenerTipoUsuario",typeof(respuesta),respuesta.data)
            dispatch({
                type:OBTENER_TIPO_USUARIO,
                payload:respuesta.data
            })

        } catch (error) {
            console.log(error);
        }

    }

    //Funcion para cerrar sesión
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    //Funcion para cambiar mensaje a null una vez ya se haya mostrado
    const mensajeNull = () => {
        try {
            dispatch({
                type: CAMBIAR_ALERTA_AUTH,
                payload: null
            })
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <authContext.Provider
        value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            mensaje: state.mensaje,
            cargando: state.cargando,
            tipoUsuarios: state.tipoUsuarios,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado,
            obtenerTipoUsuario,
            cerrarSesion
        }}
        >
            {props.children}
        </authContext.Provider>
    )
}
export default AuthState;