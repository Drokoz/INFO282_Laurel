import React, {useState} from 'react';
import clienteAxios from '../../config/axios';
import Header from '../Header';
const NuevoProducto = () => {
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [categoriaProducto, setCategoriaProducto] = useState("");


    const agregarProducto = e => {

        e.preventDefault();

        //Validar

        //A
        clienteAxios.post('api/productos/nuevo', {nombreProducto: nombreProducto, precioProducto: precioProducto, categoriaProducto: categoriaProducto}).then(() =>{
            alert('Insertado correctamente');
        })
    };
    return (
        
        <div>
            <h1><Header></Header></h1>
        <div className="row justify-content-center">
            
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center mb-4 font-weight-bold">
                        Nuevo Producto
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
                        <div className="form-group">
                            <label> Categoria Producto</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Categoria Producto"
                                name="Categoria"
                                onChange = {(e) => {
                                    setCategoriaProducto(e.target.value)
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
        </div>
     );
}
 
export default NuevoProducto;