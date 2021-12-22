import React, { useReducer } from 'react';

import mesaContext from './mesaContext';
import mesaReducer from './mesaReducer';

import clienteAxios from '../../config/axios';
import {OBTENER_MESAS, MESA_ACTUAL, MESA_ENTREGAR_PEDIDO} from '../../types/index'

//Funcion para agrupar por ubicacion
const agruparMesas = (payload) => {
    //Creamos un nuevo objeto donde vamos a almacenar por ciudades. 
    let nuevoObjeto = {}
    //Recorremos el arreglo 
    payload.forEach( x => {

    if( !nuevoObjeto.hasOwnProperty(x.ubicacion)){
        nuevoObjeto[x.ubicacion] = {
        mesas: []
        }
    }
    
    //Agregamos los datos de profesionales. 
        nuevoObjeto[x.ubicacion].mesas.push({
        id: x.idmesas,
        nombre: x.nombre,
        ubicacion: x.ubicacion,
        pedidoMesa: []
        })
    
    })
    return nuevoObjeto
}

const MesaState = props =>{
    const initialState = {
        mesas : {},
        pedidoMesa: null,
        mesa: null
    }

    const [state, dispatch] = useReducer(mesaReducer,initialState);

    //Funciones
    //Obtener Mesas
    const obtenerMesas = async () => {
        try {
            const respuesta = await clienteAxios.get("/api/mesas/obtener")
            const objetoEntrega = agruparMesas(respuesta.data);
            console.log("Entrega", objetoEntrega);
            
            dispatch({
                type:OBTENER_MESAS,
                payload:objetoEntrega
            })

        } catch (error) {
            console.log(error);
        }

    }

    //Selecciona la mesa

    const mesaActual = (mesa) => {
        dispatch({
            type:MESA_ACTUAL,
            payload: mesa
        })
    }

    const obtenerMesaActual = () => {
        dispatch({
            type:MESA_ACTUAL,
            payload: state.mesa
        })
    }

    const mesaEntregarPedido = (pedido) => {
        dispatch({
            type:MESA_ENTREGAR_PEDIDO,
            payload: pedido
        })
    }
    return(
        <mesaContext.Provider
            value={{
                mesas: state.mesas,
                mesa: state.mesa,
                pedidoMesa: state.pedidoMesa,
                obtenerMesas,
                obtenerMesaActual,
                mesaActual,
                mesaEntregarPedido
            }}
        >
            {props.children}
        </mesaContext.Provider>
    )
}
export default MesaState;