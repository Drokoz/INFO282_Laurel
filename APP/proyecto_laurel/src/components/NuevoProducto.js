import React from 'react';

const NuevoProducto = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weogjt-bold">
                        NuevoProducto
                    </h2>
                    <form>
                        <div className="form-group">
                            <label> Nombre Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Producto"
                                name="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <label> Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="Precio"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase
                            d-block w-100"
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;