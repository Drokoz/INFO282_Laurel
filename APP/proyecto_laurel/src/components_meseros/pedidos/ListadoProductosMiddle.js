import React, {Fragment} from 'react';

//Componentes
import ProductoParaPedido from './ProductoParaPedido';
//Context


const ListadoProductosMiddle = (Productos) => {

    return ( 
        <Fragment>
            <table className="table table-striped">
            
                <thead className="bg-primary table-dark">                    
                    <tr>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Comentarios</th>
                        <th scope="col">Agregar</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {console.log(Productos.Productos)}
                    {Productos.Productos.lenght === 0 ? "No hay productos" : (
                        Productos.Productos.map(producto => (
                            <ProductoParaPedido
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
 
export default ListadoProductosMiddle;