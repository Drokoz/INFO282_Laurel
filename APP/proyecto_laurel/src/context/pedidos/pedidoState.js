import React, { useReducer} from 'react';
import pedidoContext from './pedidoContext'
import pedidoReducer from './pedidoReducer';
import {OBTENER_PEDIDO,ELIMINAR_PRODUCTO_PEDIDO,AGREGAR_PRODUCTO_PEDIDO} from '../../types/index'


const PedidoState = props => {

    const initialState ={
        pedido: []
    }

    const [state, dispatch] = useReducer(pedidoReducer,initialState);

    //Funciones

    //Obtener Productos
    const obtenerProductosPedido = async () => {
        try {
            dispatch({
                type:OBTENER_PEDIDO,
                payload:state.pedido
            })

        } catch (error) {
            console.log(error);
        }

    }
    //Agregar Producto

    const agregarProductoPedido = async (producto) => {
        //Extraer informacion de producto
        
        try {
            await state.pedido.push(producto);
            dispatch({
                type:AGREGAR_PRODUCTO_PEDIDO,
                payload:state.pedido
            })
            
        } catch (error) {
            console.log(error)
            
        }
    }
    //Elimina Producto
    const eliminarProductoPedido = async (idproducto) => {
        try {
            dispatch({
                type: ELIMINAR_PRODUCTO_PEDIDO,
                payload: idproducto
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <pedidoContext.Provider
            value={{
                pedido: state.pedido,
                obtenerProductosPedido,
                eliminarProductoPedido,
                agregarProductoPedido
            }}
        >
            {props.children}
        </pedidoContext.Provider>
    )
}

export default PedidoState;