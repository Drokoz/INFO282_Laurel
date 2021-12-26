import React, { useReducer} from 'react';
import productosContext from './productosContext'
import productosReducer from './productosReducer';
import {AGREGAR_PRODUCTO,OBTENER_PRODUCTO, ELIMINAR_PRODUCTO,
        OBTENER_CATEGORIAS,GUARDAR_PRODUCTO_MODIFICADO,
        MODIFICAR_PRODUCTO_EXITOSO,ERROR_ELIMINAR_PRODUCTO,
        CAMBIAR_ALERTA, MODIFICAR_PRODUCTO_ERROR
    } from '../../types/index'

//Extras
import clienteAxios from '../../config/axios';

const ProductoState = props => {
    
    const initialState = {
        productos: [],
        categorias:[],
        productoModificado: null,
        msg: null
    }

    const [state, dispatch] = useReducer(productosReducer,initialState);



    //Funciones

    //Obtener Productos
    const obtenerProductos = async () =>{
        try {
            const respuesta = await clienteAxios.get("/api/productos/obtener")
            console.log("Respuesta obtenerProductos",typeof(respuesta),respuesta.data)
            dispatch({
                type:OBTENER_PRODUCTO,
                payload:respuesta.data
            })

        } catch (error) {
            console.log(error);
        }

    }
    //Agregar Producto

    const agregarProducto = async (producto) => {
        //Extraer informacion de producto
        const {nombreProducto,precioProducto, categoriaProducto} = producto
        try {
            await clienteAxios.post('api/productos/nuevo', {nombreProducto: nombreProducto, precioProducto: precioProducto, categoriaProducto: categoriaProducto});
            dispatch({
                type:AGREGAR_PRODUCTO,
                payload: {msg: "Producto agregado Correctamente", categoria:'alerta-ok'}
            })
        } catch (error) {
            dispatch({
                type:AGREGAR_PRODUCTO,
                payload: {msg: "Error al agregar producto", categoria:'alerta-error'}
            })
        }
    }
    //Modificar producto
    const modificarProducto = async (producto) => {
        //Extraer informacion de producto
        const {idProducto, nombreProducto,precioProducto, categoriaProducto} = producto
        try {
            const respuesta = await clienteAxios.put('api/productos/modificar', {idProducto:idProducto, nombreProducto: nombreProducto, precioProducto: precioProducto, categoriaProducto: categoriaProducto});
            console.log(respuesta)
            dispatch({
                type:MODIFICAR_PRODUCTO_EXITOSO,
                payload: {msg: "Producto modificado Correctamente", categoria:'alerta-ok'}
            })
            
        } catch (error) {
            console.log(error)
            dispatch({
                type:MODIFICAR_PRODUCTO_ERROR,
                payload: {msg: "Error al modificar producto", categoria:'alerta-error'}
            })
        }
    }
    //Elimina Producto
    const eliminarProducto = async (idproducto) => {
        try {
            const respuesta = await clienteAxios.delete(`/api/productos/eliminar/${idproducto}`);
            
            console.log(respuesta);
            if(respuesta.data.error === 1451){
                console.log("ELIMINAR PRODUCTO RESPUESTA")
                dispatch({
                    type: ERROR_ELIMINAR_PRODUCTO,
                    payload: {msg: "Error a eliminar, todavía tiene pedidos con ese producto", categoria:'alerta-error'}
                })
            }
            else{
                dispatch({
                    type: ELIMINAR_PRODUCTO,
                    payload: {idproducto:idproducto, mensaje: {msg: "Producto eliminado correctamente", categoria:'alerta-ok'}}
            })}
        } catch (error) {
            console.log(error);
            dispatch({
                type: ERROR_ELIMINAR_PRODUCTO,
                payload: {msg: "Error a eliminar", categoria:'alerta-error'}
            })
        }
        
    }
    //Obtener Productos
    const obtenerCategorias = async () =>{
        try {
            const respuesta = await clienteAxios.get("/api/categorias/obtener")
            console.log("Respuesta obtenerCategorias",typeof(respuesta),respuesta.data)
            dispatch({
                type:OBTENER_CATEGORIAS,
                payload:respuesta.data
            })

        } catch (error) {
            console.log(error);
        }

    }
    //Guarda el producto modifcado para utilizarlo en otro componente
    const guardarProductoModificado = (producto) => {
        try {
            producto = {
                ...producto,
                entrando:true
            }
            dispatch({
                type:GUARDAR_PRODUCTO_MODIFICADO,
                payload:producto
            })
        } catch (error) {
            console.log(error)
            
        }
    }
    //Una vez que se muestra el mensaje lo cambiamos a null
    const msgNull = () => {
        try {
            dispatch({
                type: CAMBIAR_ALERTA,
                payload: null
            })
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <productosContext.Provider
            value={{
                categorias: state.categorias,
                productos: state.productos,
                productoModificado: state.productoModificado,
                msg: state.msg,
                obtenerProductos,
                agregarProducto,
                eliminarProducto,
                obtenerCategorias,
                guardarProductoModificado,
                modificarProducto,
                msgNull
            }}
        >
            {props.children}
        </productosContext.Provider>
    )
}

export default ProductoState;