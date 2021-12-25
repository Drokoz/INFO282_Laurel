import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autentificacion/authContext'
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import SideBar from '../navegacion/Sidebar';

const NuevoUsuarioAdmin = (props) => {


    //extraer valores
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario, tipoUsuarios, obtenerTipoUsuario} = authContext;

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        confirmar: '',
        tipo_usuario:'Tipo de usuario'
    });


    const {nombre, email, contraseña, confirmar, tipo_usuario} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        }); 
    }

    const onSelect = (eventKey,e) => {
        
        console.log(e.target.name, eventKey)
        guardarUsuario({
            ...usuario,
            [e.target.name] : eventKey
        }); 
    }
    
    const onSubmit = e => {
        e.preventDefault();
        //Validar campos vacios
        if(nombre.trim() === '' || email.trim() === '' || contraseña.trim() === ''|| confirmar.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        }

        //Password minimo de 6 caracteres
        if(contraseña.length < 6) {
            mostrarAlerta('Contraseña debe ser minimo de 6 caracteres','alerta-error');
            return;}


        //Las 2 contraseñas iguales
        if(contraseña !== confirmar) {
            mostrarAlerta('Ambas contraseñas deben ser iguales','alerta-error');
            return;
        }
        registrarUsuario({
            nombreUsuario: usuario.nombre, 
            correoUsuario: usuario.email,
            contraseñaUsuario: usuario.contraseña,
            tipoUsuario: usuario.tipo_usuario
        })
        //agregarUsuario();
        guardarUsuario({
            nombre: '',
            email: '',
            contraseña: '',
            confirmar: '',
            tipo_usuario:'Tipo de usuario'
        });
    };
    useEffect(() => {
        obtenerTipoUsuario();
    }, [])
    return(
        <div className='contenedor-app'>
            <SideBar/>
            <div className='seccion-principal'>
                <div className="form-usuario">
                    {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
                    <div className="contenedor-form sombra-dark">
                        <h1> Crear cuenta</h1>
                    
                    <form>
                    <div className="campo-form">
                            <label htmlFor="text"> Nombre </label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="Tu Nombre"
                                value={nombre}
                                onChange = {onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="email"> Mail </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Tu Mail"
                                value={email}
                                onChange = {onChange}
                            />
                        </div>
                        
                        <div className="campo-form">
                            <label htmlFor="PASSWORD"> Contraseña </label>
                            <input
                                type="PASSWORD"
                                id="contraseña"
                                name="contraseña"
                                placeholder="Tu contraseña"
                                value={contraseña}
                                onChange = {onChange}
                            />
                        </div>

                        <div className="campo-form">
                            <label htmlFor="confirmar"> Confirmar Contraseña </label>
                            <input
                                type="PASSWORD"
                                id="confirmar"
                                name="confirmar"
                                placeholder="Repite tu contraseña"
                                value={confirmar}
                                onChange = {onChange}
                            />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="confirmar"> Tipo de usuario </label>
                            
                            <DropdownButton
                                alignRight
                                title={(usuario.tipo_usuario[0].toUpperCase() + usuario.tipo_usuario.substring(1))}
                                id="dropdown-menu-align-right"
                                onSelect={onSelect}
                                >
                                {tipoUsuarios.length === 0 ? null : ( tipoUsuarios.map( tuser => 
                                    <Dropdown.Item eventKey={tuser.tipo_usuario} name='tipo_usuario'>{(tuser.tipo_usuario[0].toUpperCase() + tuser.tipo_usuario.substring(1))}</Dropdown.Item>
                                
                                )
                                )}
                            </DropdownButton>
                        </div>
                    <div className="campo-form">
                        <input type="submit" className="btn-sesion btn-primario-sesion btn-block-sesion"
                        value="Crear Usuario" onClick = {onSubmit}/>
                    </div>
                    </form>
                    <Link to={'/admin/menu'} className="enlace-cuenta">
                        Menu
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuevoUsuarioAdmin;