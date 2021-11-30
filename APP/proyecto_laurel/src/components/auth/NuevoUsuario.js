import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevoUsuario = () => {

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


        //Password minimo de 8 caracteres

        //Las 2 contraseñas iguales
        //
    }
    return(
        <div className="form-usuario">
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
                        id="PASSWORD"
                        name="PASSWORD"
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
                value="Crear Usuario"/>
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