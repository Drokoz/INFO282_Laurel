

import {OBTENER_PRODUCTO, ELIMINAR_PRODUCTO,
        OBTENER_CATEGORIAS,GUARDAR_PRODUCTO_MODIFICADO,
        MODIFICAR_PRODUCTO_EXITOSO,ERROR_ELIMINAR_PRODUCTO,
        AGREGAR_PRODUCTO,CAMBIAR_ALERTA, MODIFICAR_PRODUCTO_ERROR}
        from '../../types/index'


export default (state, action) => {
    switch (action.type) {
        case OBTENER_PRODUCTO:
            //console.log("En OBTENER_PRODUCTOS",action.payload)
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
        case OBTENER_CATEGORIAS:
            return{
                ...state,
                categorias:action.payload
            }
        case ELIMINAR_PRODUCTO:
            console.log(action.payload)
            return{
                ...state,
                productos: state.productos.filter(producto => producto.idproducto !== action.payload.idproducto),
                msg: action.payload.mensaje
            }
        case GUARDAR_PRODUCTO_MODIFICADO:
            return{
                ...state,
                productoModificado: action.payload
            }
        case MODIFICAR_PRODUCTO_EXITOSO:
            return{
                ...state,
                msg: action.payload
            }
            case MODIFICAR_PRODUCTO_ERROR:
                return{
                    ...state,
                    msg: action.payload
                }
        case AGREGAR_PRODUCTO:
            return{
                ...state,
                msg: action.payload
            }
        case CAMBIAR_ALERTA:
            return{
                ...state,
                msg: action.payload
            }
        case ERROR_ELIMINAR_PRODUCTO:
            return{
                ...state,
                msg:action.payload
            }
        default:
            break;
    }
}