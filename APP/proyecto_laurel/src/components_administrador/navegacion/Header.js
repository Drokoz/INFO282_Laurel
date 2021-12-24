import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
const Header = () => {

    return ( 
        <div>
            <div className="seccion-listado">
                <a>
                    <Link to={'/admin/menu'} className="text-black">
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
            <div className="seccion-listado">
                <a>
                    <Link to={'/admin/listado/mesas'} className="text-black">
                    Pedidos
                    </Link>
                </a>
            </div>
        </div>
     );
}
 
export default Header;