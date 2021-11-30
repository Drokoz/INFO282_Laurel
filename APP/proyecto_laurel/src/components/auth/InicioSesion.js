import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const InicioSesion = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        contraseña: ''
    });


    const {email, contraseña} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
    })
}
    const onSubmit = e => {
        e.preventDefault();

        //Validar campos vacios

        //
    }
    return(
        <div className="form-usuario">
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
                        id="PASSWORD"
                        name="PASSWORD"
                        placeholder="Tu contraseña"
                        value={contraseña}
                        onChange = {onChange}
                    />
                </div>

                <div className="campo-form">
                    <input type="submit" className="btn-sesion btn-primario-sesion btn-block-sesion"
                    value="Iniciar Sesión"/>
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