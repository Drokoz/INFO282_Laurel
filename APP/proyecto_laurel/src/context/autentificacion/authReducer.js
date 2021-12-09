
import { REGISTRO_EXITOSO, REGISTRO_ERROR,OBTENER_USUARIO,LOGIN_EXITOSO,LOGIN_ERROR,CERRAR_SESION } from "../../types";

export default (state, action) => {
    switch (action.type) {
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
            
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return{
                ...state,
                token:null,
                usuario:null,
                autenticado:null,
                cargando:true
            }
        default:
            return state;
    }
};