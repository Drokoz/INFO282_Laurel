import React, {useState, useContext, useEffect} from 'react';

import ProductosContext from '../../context/productos/productosContext';
import PedidoContext from '../../context/pedidos/pedidoContext';


const NuevoPedido = () => {

    //Context
    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {productos, obtenerProductos} = productosContext;

    const pedidoContext = useContext(PedidoContext);
    const {agregarProductoPedido} = pedidoContext;

    const [nombreProducto, setNombreProducto] = useState("");
    const [cantidadProducto, setCantidadProducto] = useState("");
    const [comentariosProducto, setComentariosProducto] = useState("");
    
    const onClickProducto = e => {

        e.preventDefault();

        //Validar
        if(nombreProducto.trim() === '' || cantidadProducto.trim() === ''){
            return;
        };

        console.log("Antes de buscar")
        //Pasar a state
        let producto_encontrado = productos.filter(producto => 
            producto.nombre_producto === nombreProducto
        )
        console.log(producto_encontrado[0]);
        producto_encontrado = producto_encontrado[0];
        const enviarProducto = {
            idProducto : producto_encontrado.idproducto,
            nombreProducto: producto_encontrado.nombre_producto,
            precioProducto: producto_encontrado.precio_producto,
            cantidadProducto: cantidadProducto,
            comentariosProducto: comentariosProducto
        }
        console.log(enviarProducto);
        agregarProductoPedido(enviarProducto);

        
        //Reiniciar formulario
        setNombreProducto('');
        setCantidadProducto('');
        setComentariosProducto('');

    };
    useEffect( () => {
        obtenerProductos();
        console.log(productos);
    },[]);
    return ( 
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input
                        type="number"
                        placeholder="Cantidad"
                        name="Cantidad"
                        value={cantidadProducto}
                        onChange={(e) => {
                            setCantidadProducto(e.target.value)
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Nombre Producto"
                        name="Nombre"
                        value={nombreProducto}
                        onChange={(e) => {
                            setNombreProducto(e.target.value)
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Comentarios"
                        name="Comentarios"
                        value={comentariosProducto}
                        onChange={(e) => {
                            setComentariosProducto(e.target.value)
                        }}
                    />

                             
                </div>
                <div className='contenedor-input'>
                    <button
                        type="sumbit"
                        className="button btn-primario btn-submit btn-block"
                        value="Agregar Pedido"
                        onClick={onClickProducto}
                      >Agregar producto a pedido </button>
                </div>
            </form>
           
        </div>
     );
}
 
export default NuevoPedido;

