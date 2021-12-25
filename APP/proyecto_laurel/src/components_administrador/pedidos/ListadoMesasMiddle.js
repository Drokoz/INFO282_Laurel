import React, { useContext, Fragment} from 'react';

import AuthContext from '../../context/autentificacion/authContext';
import ProductoParaMesa from './ProductoParaMesa';
const ListadoMesasMiddle = (Productos) => {

    const authContext = useContext(AuthContext);
    const {usuario} = authContext;

    function add(accumulator, a) {
        return accumulator + a.precioProducto;
      }

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
                    {Productos.Productos.lenght === 0 && usuario && usuario.tipoUsuario !== 'administrador'? "No hay productos" : (
                        Productos.Productos.map(producto => (
                            <ProductoParaMesa
                                key={producto.idproducto}
                                Producto={producto}
                            />
                        ))
                    )}
                    
                </tbody>
                <tbody>
                    {Productos.Productos.lenght === 0 || !usuario || usuario.tipoUsuario === "cocineros" ? null: (
                        <tr>
                            <th></th>
                            <th> Total = </th>
                            <td><span className="font-weight-bold"> $ {Productos.Productos.reduce(add,0)} </span></td>
                            <th></th>
                        </tr>
                        )}
                </tbody>
            </table>
        </Fragment>
     );
}
 
export default ListadoMesasMiddle;