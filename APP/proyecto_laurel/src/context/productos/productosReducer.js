

import {OBTENER_PRODUCTO, ELIMINAR_PRODUCTO} from '../../types/index'


export default (state, action) => {
    switch (action.type) {
        case OBTENER_PRODUCTO:
            console.log("En OBTENER_PRODUCTOS",action.payload)
            return{
                ...state,
                productos: action.payload.sort((producto_A, producto_B) => {
                    const categoria_1 = producto_A.categoria_producto.toLowerCase();
                    const categoria_2 = producto_B.categoria_producto.toLowerCase();
                    if (categoria_1 === categoria_2) {
                        return 0;
                      }
                    if (categoria_1 < categoria_2) {
                        return -1;
                    }
                        return 1;
                    })
            }
        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.idproducto !== action.payload)
            }
        default:
            break;
    }
}