
import {OBTENER_MESAS, MESA_ACTUAL,OBTENER_MESA_ACTUAL} from '../../types/index'

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
                mesa: state.mesas[action.payload.ubicacion].mesas.filter(mesa => mesa.id == action.payload.id )
            }
        case OBTENER_MESA_ACTUAL:
            return{
                ...state,
                mesa: action.payload
            }
        default:
            break;
    }
}