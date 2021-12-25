import React, { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListadoProductosMiddle from "./ListadoProductosMiddle";

import ProductosContext from "../../context/productos/productosContext";
import MesaContext from "../../context/mesas/mesaContext";
//Funcion para agrupar por categoria
const agruparCategorias = (arreglo) => {
    //Creamos un nuevo objeto donde vamos a almacenar por ciudades. 
    let nuevoObjeto = {}
    //Recorremos el arreglo 
    arreglo.forEach( x => {

    if( !nuevoObjeto.hasOwnProperty(x.categoria_producto)){
        nuevoObjeto[x.categoria_producto] = {
        productos: []
        }
    }
    
    //Agregamos los datos de profesionales. 
        nuevoObjeto[x.categoria_producto].productos.push({
        idproducto: x.idproducto,
        nombre_producto: x.nombre_producto,
        precio_producto: x.precio_producto,
        categoria_producto: x.categoria_producto
        })
    
    })
    return nuevoObjeto
}

const ListadoProductosParaPedido = () => {

    

    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {productos, obtenerProductos} = productosContext;
     
    const mesaContext = useContext(MesaContext);
    const {mesa} = mesaContext;
    
    useEffect( () => {
        if(productos.length === 0){
        obtenerProductos();}
        else{
            console.log(productos)
        }
    },[productos]);
    return (
        <div className="seccion-principal">
            {mesa ? (
            <Accordion>
                {productos.length === 0 ? "No hay mesas" : (
                    
                    Object.keys(agruparCategorias(productos)).map(categoria => (
                        
                        <Accordion.Item eventKey={categoria} key={categoria}>
                            <Accordion.Header>{categoria}</Accordion.Header>
                                <Accordion.Body>
                                        <ListadoProductosMiddle Productos={agruparCategorias(productos)[categoria].productos}/>
                                </Accordion.Body>
                        </Accordion.Item>
                        )
                    )
                )}
            </Accordion>) : null}
        </div>
     );
}
 
export default ListadoProductosParaPedido;