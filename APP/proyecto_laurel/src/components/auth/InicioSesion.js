import React, {useContext, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AlertaContext from '../../context/alertas/alertaContext'
import AuthContext from '../../context/autentificacion/authContext'

const InicioSesion = (props) => {

        //extraer valores
    const alertaContext = useContext(AlertaContext);
    const {alerta, mostrarAlerta} = alertaContext;
    
    const authContext = useContext(AuthContext);
    const {mensaje, autenticado, iniciarSesion, usuario} = authContext;

    const [usuarioComp, guardarUsuario] = useState({
        email: '',
        contraseña: ''
    });


    const {email, contraseña} = usuarioComp;

    const onChange = e => {
        guardarUsuario({
            ...usuarioComp,
            [e.target.name] : e.target.value
    })
}
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos vacios
        if(email.trim() === '' || contraseña.trim() === ''){
            mostrarAlerta('Todos los campos son obligatorios','alerta-error');
            return;
        }

        iniciarSesion({correoUsuario:email,contraseñaUsuario:contraseña});
        //
    }
    //PASSWORD O USUARIO NO EXISTA
    useEffect( () => {
        if(autenticado){

            //props.history.push('/admin/menu');
            if (usuario) {

                console.log("moviendo", usuario.tipoUsuario);
                if(usuario.tipoUsuario === 'administrador'){
                    props.history.push('/admin/menu');
                }
                else {
                    if(usuario.tipoUsuario === 'mesero'){
                    props.history.push('/meseros/menu');
                    }
                    else{
                        props.history.push('/cb/listado/pedido');
                    }
                }
            }
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
    }, [mensaje, autenticado, props.history,usuario])
    return(
        <div className="form-usuario">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null}
            <div className="contenedor-form sombra-dark">
                <h1> Iniciar Sesión</h1>

            <form>
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
                    <input type="submit" className="btn-sesion btn-primario-sesion btn-block-sesion"
                    value="Iniciar Sesión" onClick={onSubmit}/>
                </div>
            </form>
            <Link to={'./usuario/nuevo'} className="enlace-cuenta">
                Obtener Cuenta
            </Link>
            </div>
        </div>
    );
}

export default InicioSesion;