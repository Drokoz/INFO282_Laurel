import React, { useReducer } from 'react';

import mesaContext from './mesaContext';
import mesaReducer from './mesaReducer';

import clienteAxios from '../../config/axios';
import {OBTENER_MESAS, MESA_ACTUAL,OBTENER_MESA_ACTUAL} from '../../types/index'

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
        ubicacion: x.ubicacion
        })
    
    })
    return nuevoObjeto
}

const MesaState = props =>{
    const initialState = {
        mesas : {},
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

    const mesaActual = (mesaId ,ubicacion) => {
        const res = {id: mesaId, ubicacion:ubicacion}
        dispatch({
            type:MESA_ACTUAL,
            payload: res
        })
    }

    const obtenerMesaActual = () => {
        dispatch({
            type:MESA_ACTUAL,
            payload: state.mesa
        })
    }
    return(
        <mesaContext.Provider
            value={{
                mesas: state.mesas,
                mesa: state.mesa,
                obtenerMesas,
                obtenerMesaActual,
                mesaActual
            }}
        >
            {props.children}
        </mesaContext.Provider>
    )
}
export default MesaState;