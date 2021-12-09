import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/autentificacion/authContext";
const Header = () => {

    const authContext =useContext(AuthContext);
    const {cerrarSesion} = authContext;

    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary
        justify-content-between">
            <div className="container">
                <h1>
                    <Link to={'/productos/listado'} className="text-light">
                    Productos
                    </Link>
                </h1>
            </div>
            
            <button
                className="btn btn-danger nuevo-post d-block"
                onClick ={() => cerrarSesion()}
            >Cerrar Sesión
            </button>
        </nav>
     );
}
 
export default Header;