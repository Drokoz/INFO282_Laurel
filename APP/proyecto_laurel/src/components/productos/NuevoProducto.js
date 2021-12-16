import React, {useState, useContext} from 'react';
import Header from '../navegacion/Header';
import ProductosContext from '../../context/productos/productosContext';

const NuevoProducto = () => {
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [categoriaProducto, setCategoriaProducto] = useState("");

    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {agregarProducto} = productosContext;

    const onClickProducto = e => {

        e.preventDefault();

        //Validar
        if(nombreProducto.trim() === '' || precioProducto.trim() === '' || categoriaProducto.trim() === ''){
            return;
        };

        //Pasar a state

        agregarProducto({nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            categoriaProducto: categoriaProducto});
        
        
        //Reiniciar formulario
        setNombreProducto('');
        setPrecioProducto('');
        setCategoriaProducto('');

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
                                value={nombreProducto}
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
                                value={precioProducto}
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
                                value={categoriaProducto}
                                onChange = {(e) => {
                                    setCategoriaProducto(e.target.value)
                                }}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary font-weight-bold text-uppercase
                            d-block w-100"
                            onClick={onClickProducto}
                        >Agregar</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default NuevoProducto;