import React, {useState, useContext, useEffect} from 'react';
import SideBar from '../navegacion/Sidebar';
import ProductosContext from '../../context/productos/productosContext';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

const EditarProducto = () => {
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [categoriaProducto, setCategoriaProducto] = useState("");
    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {modificarProducto, categorias, obtenerCategorias, productoModificado} = productosContext;

    const onClickProducto = e => {

        e.preventDefault();

        //Validar
        if(nombreProducto.trim() === '' || precioProducto.trim() === '' || categoriaProducto.trim() === ''){
            return;
        };

        //Pasar a state

        modificarProducto({
            idProducto: productoModificado.idproducto,
            nombreProducto: nombreProducto,
            precioProducto: precioProducto,
            categoriaProducto: categoriaProducto});

    };

    const onSelect = (eventKey,e) => {
        
        console.log(e.target.name, eventKey)
        setCategoriaProducto( eventKey); 
    }

    useEffect(()=>{
        
        if(categorias.length === 0){
            obtenerCategorias() }

        if(productoModificado){
            setCategoriaProducto(productoModificado.categoria_producto);
            setNombreProducto(productoModificado.nombre_producto);
            setPrecioProducto(productoModificado.precio_producto.toString())
            console.log(productoModificado)
        }
    },[])
    return (
        
        <div className='contenedor-app'>
            <SideBar/>
            <div className='seccion-principal'>
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                           Editar Producto
                        </h2>
                        {productoModificado ? <form>
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
                                    placeholder={""}
                                    name="Precio"
                                    value={precioProducto}
                                    onChange = {(e) => {
                                        setPrecioProducto(e.target.value)
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <label> Categoria Producto</label>
                                <DropdownButton
                                    alignRight
                                    title={categoriaProducto === "" ? "Elije categoria...": categoriaProducto}
                                    id="dropdown-menu-align-right"
                                    onSelect={onSelect}
                                    >
                                    {categorias.length === 0 ? null : ( categorias.map( categoria => 
                                        <Dropdown.Item eventKey={categoria.nombre_categoria} name='nombre_categoria'>{(categoria.nombre_categoria[0].toUpperCase() + categoria.nombre_categoria.substring(1))}</Dropdown.Item>
                                    
                                    )
                                    )}
                                </DropdownButton>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary font-weight-bold text-uppercase
                                d-block w-100"
                                onClick={onClickProducto}
                            >Guardar cambios</button>
                        </form> : null}
                        
                    </div>
            </div>
        </div>
        </div>
     );
}
 
export default EditarProducto;