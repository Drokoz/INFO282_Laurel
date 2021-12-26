
import {NUEVO_USUARIO , REGISTRO_EXITOSO, REGISTRO_ERROR,OBTENER_USUARIO,LOGIN_EXITOSO,LOGIN_ERROR,CERRAR_SESION, OBTENER_TIPO_USUARIO,CAMBIAR_ALERTA_AUTH} from "../../types";

export default (state, action) => {
    switch (action.type) {
        
        case NUEVO_USUARIO:
            return{
                ...state,
                mensaje:action.payload
            }
        
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token',action.payload.token);
            return{
                ...state,
                autenticado: true,
                cargando:false,
                mensaje:null
            }
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                cargando:false,
                mensaje:action.payload
            }
        
        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado: true,
                cargando:false,
                usuario:action.payload
            }
        case OBTENER_TIPO_USUARIO:
            return{
                ...state,
                tipoUsuarios: action.payload
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                usuario:null,
                autenticado:null,
                cargando:true
            }
        case CAMBIAR_ALERTA_AUTH:
            return{
                ...state,
                mensaje:action.payload
            }
        default:
            return state;
    }
};