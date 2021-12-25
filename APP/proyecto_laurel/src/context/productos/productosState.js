import React, { useReducer} from 'react';
import productosContext from './productosContext'
import productosReducer from './productosReducer';
import {OBTENER_PRODUCTO, ELIMINAR_PRODUCTO,OBTENER_CATEGORIAS,GUARDAR_PRODUCTO_MODIFICADO,MODIFICAR_PRODUCTO} from '../../types/index'

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
            
        } catch (error) {
            console.log(error)
            
        }
    }
    //Modificar producto
    const modificarProducto = async (producto) => {
        //Extraer informacion de producto
        const {idProducto, nombreProducto,precioProducto, categoriaProducto} = producto
        try {
            await clienteAxios.put('api/productos/modificar', {idProducto:idProducto, nombreProducto: nombreProducto, precioProducto: precioProducto, categoriaProducto: categoriaProducto});
            
        } catch (error) {
            console.log(error)
            
        }
    }
    //Elimina Producto
    const eliminarProducto = async (idproducto) => {
        try {
            await clienteAxios.delete(`/api/productos/eliminar/${idproducto}`);
            dispatch({
                type: ELIMINAR_PRODUCTO,
                payload: idproducto
            })
        } catch (error) {
            console.log(error);
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
    const guardarProductoModificado = (producto) => {
        try {
            dispatch({
                type:GUARDAR_PRODUCTO_MODIFICADO,
                payload:producto
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
                obtenerProductos,
                agregarProducto,
                eliminarProducto,
                obtenerCategorias,
                guardarProductoModificado,
                modificarProducto
            }}
        >
            {props.children}
        </productosContext.Provider>
    )
}

export default ProductoState;