import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autentificacion/authContext'


const NuevoUsuario = (props) => {

/*
    const agregarUsuario = () => {
        Axios.post('http://localhost:3001/api/usuarios/crear', {nombreUsuario: usuario.nombre,  correoUsuario: usuario.email, contraseñaUsuario: usuario.contraseña}).then(() =>{
            alert('Insertado correctamente');
            mostrarAlerta('Su usuario ha sido creado exitosamente!','alerta-ok')
        })
    };*/
    //extraer valores
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, registrarUsuario} = authContext;

    useEffect( () => {
        if(autenticado){
        
            props.history.push('/productos/listado');
            
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history])

    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        contraseña: '',
        confirmar: ''
    });


    const {nombre, email, contraseña, confirmar} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
    })
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
            contraseñaUsuario: usuario.contraseña
        })
        //agregarUsuario();
    };
    return(
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
                <input type="submit" className="btn-sesion btn-primario-sesion btn-block-sesion"
                value="Crear Usuario" onClick = {onSubmit}/>
            </div>
            </form>
            <Link to={'./'} className="enlace-cuenta">
                Iniciar Sesión
            </Link>
            </div>
        </div>
    );
}

export default NuevoUsuario;