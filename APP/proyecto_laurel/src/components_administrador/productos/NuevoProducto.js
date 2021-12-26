import React, {useState, useContext, useEffect} from 'react';

//Componentes
import SideBar from '../navegacion/Sidebar';

//Dropdown
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.css';

//Context
import ProductosContext from '../../context/productos/productosContext';
import AlertaContext from '../../context/alertas/alertaContext'

const NuevoProducto = () => {

    //Iniciar state para guardar el ingreso de usuario
    const [nombreProducto, setNombreProducto] = useState("");
    const [precioProducto, setPrecioProducto] = useState("");
    const [categoriaProducto, setCategoriaProducto] = useState("");

    //Extraer productos
    const productosContext = useContext(ProductosContext);
    const {agregarProducto, categorias, obtenerCategorias,msg,msgNull} = productosContext;

    //Alertas
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;    

    //Función que maneja cuando el usuario hace click en agregar
    const onClickProducto = e => {

        e.preventDefault();

        //Validar
        if(nombreProducto.trim() === '' || precioProducto.trim() === '' || categoriaProducto.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        };


        if(parseInt(precioProducto) < 1){
            mostrarAlerta('El precio del product debe ser mayor a 0','alerta-error');
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

    //Funcion que maneja la selección en elementos del dropdown
    const onSelect = (eventKey,e) => {
        
        console.log(e.target.name, eventKey)
        setCategoriaProducto( eventKey); 
    }

    //useEffect para obtener cambios de state o props, también al ejecutar el inicio
    useEffect(()=>{
        console.log(categorias)
        if(categorias.length === 0){
            obtenerCategorias() }
        if(msg){
            mostrarAlerta(msg.msg, msg.categoria);
            msgNull();
        }
    },[msg])
    return (
        
        <div className='contenedor-app'>
            <SideBar/>
            <div className='seccion-principal'>
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Nuevo Producto
                        </h2>
                        {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
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