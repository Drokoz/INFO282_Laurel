import React, { useReducer} from 'react';
import pedidoContext from './pedidoContext'
import pedidoReducer from './pedidoReducer';
import {OBTENER_PEDIDO,ELIMINAR_PRODUCTO_PEDIDO,AGREGAR_PRODUCTO_PEDIDO,OTORGAR_PEDIDO, ELIMINAR_PEDIDO} from '../../types/index'

import clienteAxios from '../../config/axios';
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
            const respuestaPedidos = (await clienteAxios.get("/api/pedidos/obtener")).data
            const respuestaProductos = (await clienteAxios.get("/api/productos/obtener")).data
            const respuesta = respuestaPedidos.map((pedido) => {
                
                const producto = respuestaProductos.find((prod) => prod.idproducto === pedido.idProducto);
                const json_producto = {
                    idpedido : pedido.idpedidos,
                    idProducto : producto.idproducto,
                    nombreProducto: producto.nombre_producto,
                    precioProducto: producto.precio_producto,
                    cantidadProducto: pedido.cantidadProducto,
                    comentariosProducto: pedido.comentariosProducto,
                    mesaPedido : pedido.mesaPedido,
                }
                return json_producto;
            }
            )
            dispatch({
                type:OBTENER_PEDIDO,
                payload:respuesta
            })

        } catch (error) {
            console.log(error);
        }

    }
    //Agregar Producto

    const agregarProductoPedido = async (productoPedido) => {
        try {
            const producto = state.pedido.find((prod) => prod.idProducto === productoPedido.idProducto && prod.mesaPedido === productoPedido.mesaPedido);
            if(producto !== undefined){
                const cantidad_total = parseInt(producto.cantidadProducto) + parseInt(productoPedido.cantidadProducto);
                const comentarios = producto.comentariosProducto + productoPedido.comentariosProducto;
                producto.cantidadProducto = cantidad_total;
                producto.comentariosProducto = comentarios;
                await clienteAxios.put("/api/pedidos/modificar",producto);
            }
            else{
                const json_producto = {
                    "idProducto": productoPedido.idProducto,
                    "mesaPedido": productoPedido.mesaPedido,
                    "cantidadProducto": productoPedido.cantidadProducto,
                    "comentariosProducto": productoPedido.comentariosProducto
                }
                await clienteAxios.post("/api/pedidos/nuevo", json_producto)
                //await state.pedido.push(productoPedido);
            }

            obtenerProductosPedido();
            dispatch({
                type:AGREGAR_PRODUCTO_PEDIDO,
                payload:state.pedido
            })
            
        } catch (error) {
            console.log(error)
            
        }
    }
    //Elimina Producto
    const eliminarProductoPedido = async (productoPedido) => {
        try {
            let eliminar = false;
            if(productoPedido.cantidadProducto > 0){
                const cantidad_total = parseInt(productoPedido.cantidadProducto) - 1;
                if (cantidad_total === 0){
                    eliminar = true;
                }
                else{
                    productoPedido.cantidadProducto = cantidad_total;
                    await clienteAxios.put("/api/pedidos/modificar",productoPedido);
                }
            }
            else{
                eliminar = true;
            }

            if(eliminar){
                const id = productoPedido.idpedido
                await clienteAxios.delete(`/api/pedidos/eliminar/${id}`)
                //await state.pedido.push(productoPedido);
            }
            obtenerProductosPedido();
            dispatch({
                type: ELIMINAR_PRODUCTO_PEDIDO,
                payload: state.pedido
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