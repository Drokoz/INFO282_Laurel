import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
const Header = () => {

    return ( 
        <div>
            <div className="seccion-listado">
                <a>
                    <Link to={'/productos/listado'} className="text-black">
                    Productos
                    </Link>
                </a>
            </div>
            <div className="seccion-listado">
                <a>
                    <Link to={'/admin/usuario/nuevo'} className="text-black">
                    Crear Usuario
                    </Link>
                </a>
            </div>
        </div>
     );
}
 
export default Header;