import React, { useContext, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import ProductosContext from "../../context/productos/productosContext";
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
    useEffect( () => {
        obtenerProductos();
        
    },[]);

    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {productos, obtenerProductos} = productosContext;
     
    const productosAgrugados = agruparCategorias(productos);
    

    return (
        <div className="seccion-principal">
            <Accordion>
                {productosAgrugados.lenght === 0 ? "No hay mesas" : (
                    
                    Object.keys(productosAgrugados).map(categoria => (
                        
                        <Accordion.Item eventKey={categoria}>
                            <Accordion.Header>{categoria}</Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                        </Accordion.Item>
                        )
                    )
                )}
            </Accordion>
        </div>
     );
}
 
export default ListadoProductosParaPedido;