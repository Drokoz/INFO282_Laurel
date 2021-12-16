import React from 'react';
import Mesa from './Mesa';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {ButtonGroup} from 'react-bootstrap'
const ListadoMesas = () => {
    const ubicaciones = [{ubicacion: 'Interior',
                            mesas : [
                                {id: 0, nombre: 'Mesa 1', ubicacion: 'Interior'},
                                {id: 1,nombre: 'Mesa 2', ubicacion: 'Interior'},
                                {id: 2,nombre: 'Mesa 3', ubicacion: 'Interior'},
                                {id: 3,nombre: 'Mesa 4', ubicacion: 'Interior'}]},
                        {ubicacion: 'Terraza',
                            mesas : [
                                {id: 4,nombre: 'Mesa 1', ubicacion: 'Terraza'},
                                {id: 5,nombre: 'Mesa 2', ubicacion: 'Terraza'},
                                {id: 6,nombre: 'Mesa 3', ubicacion: 'Terraza'},
                                {id: 7,nombre: 'Mesa 4', ubicacion: 'Terraza'}]
                            }]
    return ( 
        <ul>
            {ubicaciones === 0 ? "No hay mesas" : (
                ubicaciones.map(ubicacion => (
                        <DropdownButton
                            as={ButtonGroup}
                            key={ubicacion.ubicacion}
                            id={`dropdown-variants-${ubicacion.ubicacion}`}
                            variant={ubicacion.ubicacion.toLowerCase()}
                            title={ubicacion.ubicacion}
                        >
                            <Mesa
                                mesas={ubicacion.mesas}
                            />
                        </DropdownButton>
                ))
            )}
        </ul>
     );
}
 
export default ListadoMesas;