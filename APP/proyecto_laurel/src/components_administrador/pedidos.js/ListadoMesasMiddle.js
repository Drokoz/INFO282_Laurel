import React, {useEffect, useContext, Fragment} from 'react';
import PedidoContext from '../../context/pedidos/pedidoContext';
import ProductoParaMesa from './ProductoParaMesa';
const ListadoMesasMiddle = (Productos) => {

    const pedidoContext = useContext(PedidoContext);
    const { obtenerProductosPedido} = pedidoContext;


    useEffect( () => {
        obtenerProductosPedido();

    },[])
    return ( 
        <Fragment>
            <table className="table table-striped">
            
                <thead className="bg-primary table-dark">                    
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Comentarios</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {console.log("En middle",Productos.Productos)}
                    {Productos.Productos.lenght === 0 ? "No hay productos" : (
                        Productos.Productos.map(producto => (
                            <ProductoParaMesa
                                key={producto.idproducto}
                                Producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default ListadoMesasMiddle;