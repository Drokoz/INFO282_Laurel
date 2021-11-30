import React, {useState} from 'react';
import Axios from "axios";



const NuevoProducto = () => {
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");

    const agregarProducto = () => {
        Axios.post('http://localhost:3001/api/insertar', {nombreProducto: nombreProducto, precioProducto: precioProducto}).then(() =>{
            alert('Insertado correctamente');
        })
    };
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
                                onChange = {(e) => {
                                    setNombreProducto(e.target.value)
                                }}
                            />
                        </div>
                        <div className="form-group">
                            <label> Precio Producto</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Precio Producto"
                                name="Precio"
                                onChange = {(e) => {
                                    setPrecioProducto(e.target.value)
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase
                            d-block w-100"
                            onClick={agregarProducto}
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;