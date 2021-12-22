import React, { useReducer} from 'react';
import pedidoContext from './pedidoContext'
import pedidoReducer from './pedidoReducer';
import {OBTENER_PEDIDO,ELIMINAR_PRODUCTO_PEDIDO,AGREGAR_PRODUCTO_PEDIDO,OTORGAR_PEDIDO, ELIMINAR_PEDIDO} from '../../types/index'


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
    const eliminarProductoPedido = async (producto) => {
        try {
            const respuesta = {pedido: state.pedido, pedidoxMesa: state.pedidoxMesa}
            const idx = state.pedido.findIndex(prod => prod.idProducto == producto.idProducto && prod.mesaPedido == producto.mesaPedido);
            console.log("Indice 1",idx)
            //Si encuentra en pedido
            if(idx !== -1){
                const idx_2 = state.pedidoxMesa.findIndex(prod => prod.idProducto == producto.idProducto);
                //Si encuentra en pedidoXMesa
                if(idx_2 !== -1){
                    console.log(state.pedidoxMesa[idx_2].cantidadProducto)
                    const nuevaCantidad = parseInt(state.pedidoxMesa[idx_2].cantidadProducto) - 1;
                    if (nuevaCantidad === 0){
                        const respuesta = {pedido: state.pedido.splice(idx,1), pedidoxMesa: state.pedidoxMesa.splice(idx_2,1)};
                        console.log("nuevaCantidad = 0",respuesta);
                    }
                    else{
                        state.pedidoxMesa[idx_2].cantidadProducto = nuevaCantidad.toString();
                        state.pedidoxMesa[idx_2].precioTotal = (nuevaCantidad * parseInt(state.pedido[idx].precioProducto));
                    }
                }
                //Si no lo encuentra en peidoxMesa
                else{
                    const respuesta = state.pedido.filter(prod => prod.idProducto != producto.idProducto && prod.mesaPedido != producto.mesaPedido);
                    console.log("No lo encuentre",respuesta)
                }
            }
            
            dispatch({
                type: ELIMINAR_PRODUCTO_PEDIDO,
                payload: respuesta
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    //Otorga pedido a su respectiva mesa
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
    //Eliminar pedido de mesa

    const eliminarPedido = (id) => {
        try {
            dispatch({
                type: ELIMINAR_PEDIDO,
                payload: id
            })
        } catch (error) {
            console.log(error)
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
                eliminarPedido,
                otorgarPedido
            }}
        >
            {props.children}
        </pedidoContext.Provider>
    )
}

export default PedidoState;