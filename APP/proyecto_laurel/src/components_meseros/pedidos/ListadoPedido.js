import React, {Fragment} from 'react';

//Componentes
import Producto from './ProductoPedido'

const ListadoPedido = () => {
    const productosPedidos = [
        {id: 0, cantidad:2,nombre:'Confit de pato',precio:13500, comentarios:''},
        {id: 1, cantidad:2,nombre:'Sorrentino Berenjena',precio:9500,comentarios:''},
        {id: 2, cantidad:1,nombre:'Filete',precio:14500,comentarios:''},
        {id: 3, cantidad:3,nombre:'Trucha',precio:13000,comentarios:''}
    ]
    return ( 
        <div>
        <Fragment>
            
            <h2 className="text-center my-5">
                Pedido
            </h2>
    
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
                    {productosPedidos.lenght === 0 ? "No hay productos" : (
                        productosPedidos.map(producto => (
                            <Producto
                                key={producto.id}
                                producto={producto}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
        </div>
     );
}
 
export default ListadoPedido;