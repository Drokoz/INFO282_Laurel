import React from 'react';


const ProductoParaMesa = (Producto) => {
    console.log(Producto.Producto);
    return (
        
        <tr>
            <td>{Producto.Producto.cantidadProducto}</td>
            <td>{Producto.Producto.nombreProducto}</td>
            <td><span className="font-weight-bold"> $ {Producto.Producto.precioProducto} </span></td>
            <td>{Producto.Producto.comentariosProducto}</td>
        </tr>
     );
}
 
export default ProductoParaMesa;
