
import {OBTENER_PEDIDO, AGREGAR_PRODUCTO_PEDIDO, OTORGAR_PEDIDO, ELIMINAR_PRODUCTO_PEDIDO, ELIMINAR_PEDIDO} from '../../types/index'

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
        case OTORGAR_PEDIDO:
            return{
                ...state,
                pedidoxMesa: state.pedido.filter(productos => productos.mesaPedido == action.payload)
            }
        case ELIMINAR_PRODUCTO_PEDIDO:
            return{
                ...state,
                pedido: action.payload
            }
        case ELIMINAR_PEDIDO:
            return{
                ...state,
                pedidoxMesa: [],
                pedido: state.pedido.filter(productos => productos.mesaPedido != action.payload)
            }
        default:
            break;
    }
}