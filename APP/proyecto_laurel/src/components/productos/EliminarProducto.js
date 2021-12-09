import React from 'react';
import clienteAxios from '../../config/axios';

const EliminarProducto = (id_producto) => {
    clienteAxios.delete(`/api/productos/eliminar`,id_producto).then((response) => {
          alert("Producto Eliminado")
        });
    return ( 
        <h1>Producto EliminarProducto</h1>
     );
}
 
export default EliminarProducto;