
import {OBTENER_PEDIDO, AGREGAR_PRODUCTO_PEDIDO} from '../../types/index'

export default (state,action) => {
    switch (action.type) {
        case OBTENER_PEDIDO:
            return{
                ...state,
                pedido: action.payload
            }
        
        case AGREGAR_PRODUCTO_PEDIDO:
            return{
                ...state,
                pedido: action.payload
            }
        
        default:
            break;
    }
}