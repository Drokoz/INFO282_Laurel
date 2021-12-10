import React, { useReducer, useContext } from 'react';
import productosContext from './productosContext'
import productosReducer from './productosReducer';
import {OBTENER_PRODUCTO, ELIMINAR_PRODUCTO} from '../../types/index'

//Extras
import clienteAxios from '../../config/axios';

const ProductoState = props =>{
    const initialState ={
        productos: [],
        inicio:false
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

    //Elimina Producto
    const eliminarProducto = async (idproducto) => {
        try {
            const respuesta = await clienteAxios.delete(`/api/productos/eliminar/${idproducto}`);
            dispatch({
                type: ELIMINAR_PRODUCTO,
                payload: idproducto
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    return(
        <productosContext.Provider
            value={{
                productos: state.productos,
                obtenerProductos,
                eliminarProducto
            }}
        >
            {props.children}
        </productosContext.Provider>
    )
}

export default ProductoState;