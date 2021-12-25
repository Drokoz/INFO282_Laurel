import React from "react";
import { Link } from "react-router-dom";
const Header = () => {

    return ( 
        <div>
            <div className="seccion-listado">
                    <Link to={'/admin/menu'} className="text-black">
                    Productos
                    </Link>
            </div>
            <div className="seccion-listado">
                    <Link to={'/admin/usuario/nuevo'} className="text-black">
                    Crear Usuario
                    </Link>
            </div>
            <div className="seccion-listado">
                    <Link to={'/admin/listado/mesas'} className="text-black">
                    Pedidos
                    </Link>
            </div>
        </div>
     );
}
 
export default Header;