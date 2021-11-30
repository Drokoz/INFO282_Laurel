import React from 'react';
import Axios from "axios";

const EliminarProducto = (id_producto) => {
    Axios.delete(`http://localhost:3001/api/eliminarProducto`,id_producto).then((response) => {
          alert("Producto Eliminado")
        });
    return ( 
        <h1>Producto EliminarProducto</h1>
     );
}
 
export default EliminarProducto;