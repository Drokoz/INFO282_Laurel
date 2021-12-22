
import {OBTENER_MESAS, MESA_ACTUAL,OBTENER_MESA_ACTUAL,MESA_ENTREGAR_PEDIDO} from '../../types/index'

export default (state, action) => {
    switch (action.type) {
        case OBTENER_MESAS:
            return{
                ...state,
                mesas: action.payload
            }
        case MESA_ACTUAL:
            return{
                ...state,
                mesa: action.payload
            }
        case OBTENER_MESA_ACTUAL:
            return{
                ...state,
                mesa: action.payload
            }
        case MESA_ENTREGAR_PEDIDO:
            return{
                ...state,
                pedidoMesa:action.payload
            }
        default:
            break;
    }
}