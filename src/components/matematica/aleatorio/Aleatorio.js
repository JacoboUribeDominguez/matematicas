import React, { useState } from 'react';

import Operaciones from '../operaciones/operaciones.js'

import { Button } from 'react-bootstrap'

const Aleatorio = () => {

    const [ mostrarOperaciones, setMostrarOperaciones ] = useState(false);

    const toggleClick = () => {
        setMostrarOperaciones(true)
    }

    return ( 
        <div className="d-flex justify-content-center flex-column">
            <Operaciones 
                aleatorioProp={true}
            />
        </div>
    );
}
 
export default Aleatorio;