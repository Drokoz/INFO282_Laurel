import React, { useReducer} from 'react';
import pedidoContext from './pedidoContext'
import pedidoReducer from './pedidoReducer';
import {OBTENER_PEDIDO,ELIMINAR_PRODUCTO_PEDIDO,AGREGAR_PRODUCTO_PEDIDO,OTORGAR_PEDIDO} from '../../types/index'


const PedidoState = props => {

    const initialState ={
        pedido: [],
        pedidoxMesa: []
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
        console.log("Agregar Producto Pedido")
        try {
            const idx = state.pedido.findIndex(prod => prod.idProducto == producto.idProducto);
            if(idx !== -1){
                const idx_2 = state.pedidoxMesa.findIndex(prod => prod.idProducto == producto.idProducto);
                if(idx_2 !== -1){
                    const nuevaCantidad = parseInt(producto.cantidadProducto) + parseInt(state.pedidoxMesa[idx].cantidadProducto);
                    state.pedidoxMesa[idx_2].cantidadProducto = nuevaCantidad;
                    state.pedidoxMesa[idx_2].precioTotal = (nuevaCantidad * parseInt(state.pedido[idx].precioProducto));
                }
                else{
                    await state.pedido.push(producto);
                }
            }
            else{
                await state.pedido.push(producto);
            }
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
    const otorgarPedido = (id) => {
        try {
            dispatch({
                type: OTORGAR_PEDIDO,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <pedidoContext.Provider
            value={{
                pedido: state.pedido,
                pedidoxMesa: state.pedidoxMesa,
                obtenerProductosPedido,
                eliminarProductoPedido,
                agregarProductoPedido,
                otorgarPedido
            }}
        >
            {props.children}
        </pedidoContext.Provider>
    )
}

export default PedidoState;