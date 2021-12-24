import React, {useState, useContext, useEffect} from 'react';

import PedidoContext from '../../context/pedidos/pedidoContext';
import MesaContext from '../../context/mesas/mesaContext';
const ProductoParaPedido = (Producto) => {

    //Context

    const pedidoContext = useContext(PedidoContext);
    const {agregarProductoPedido, otorgarPedido, obtenerProductosPedido} = pedidoContext;

    const mesaContext = useContext(MesaContext);
    const {mesa} = mesaContext;

    const [cantidadProducto, setCantidadProducto] = useState("");
    const [comentariosProducto, setComentariosProducto] = useState("");
    
    const onClickProducto = e => {

        e.preventDefault();
        //Validar
        let cantidadEntrega = ''
        if(cantidadProducto.trim() == ''){
            
            console.log("en on click producto");
            cantidadEntrega = "1"
            
        }
        else{
            cantidadEntrega = cantidadProducto
        }
        const enviarProducto = {
            idProducto : Producto.Producto.idproducto,
            nombreProducto: Producto.Producto.nombre_producto,
            precioProducto: Producto.Producto.precio_producto,
            cantidadProducto: cantidadEntrega,
            comentariosProducto: comentariosProducto,
            mesaPedido : mesa.id
        }
        console.log(enviarProducto);
        agregarProductoPedido(enviarProducto);
        
        //Reiniciar formulario
        setCantidadProducto('');
        setComentariosProducto('');

    };
    
    return (
        
        <tr>
            <td>
            <input
                type="number"
                placeholder="1"
                name="Cantidad"
                value={cantidadProducto}
                onChange={(e) => {
                    setCantidadProducto(e.target.value)
                }}
            /></td>
            <td>{Producto.Producto.nombre_producto}</td>
            <td><span className="font-weight-bold"> $ {Producto.Producto.precio_producto} </span></td>
            <td>
                <input
                    type="text"
                    placeholder="Comentarios"
                    name="Comentarios"
                    value={comentariosProducto}
                    onChange={(e) => {
                        setComentariosProducto(e.target.value)
                    }}
                />
            </td>
            <td>{mesa ?  <button
                    type="sumbit"
                    className="button btn-primario btn-submit btn-block"
                    value="Agregar Pedido"
                    onClick={onClickProducto}
                    > + </button> : null}
               
            </td> 
        </tr>
     );
}
 
export default ProductoParaPedido;
