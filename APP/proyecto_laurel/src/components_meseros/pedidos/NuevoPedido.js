import React from 'react';

const NuevoPedido = () => {
    return ( 
        <div className='formulario'>
            <form>
                <div className='contenedor-input'>
                    <input
                        type="number"
                        placeholder="Cantidad"
                        name="Cantidad"
                    />
                    <input
                        type="text"
                        placeholder="Nombre Producto"
                        name="Nombre"
                    />
                    <input
                        type="text"
                        placeholder="Comentarios"
                        name="Comentarios"
                    />
                             
                </div>
                <div className='contenedor-input'>
                    <input
                        type="sumbit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Pedido"
                    />  
                </div>
            </form>
        </div>
     );
}
 
export default NuevoPedido;