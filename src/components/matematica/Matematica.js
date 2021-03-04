import React from 'react';
import "./matematica.css"

import Aleatorio from './aleatorio/Aleatorio';
import Seleccion from './seleccion/Seleccion';

const Matematica = ({ seleccionar }) => {
    return ( 
        <div className="matematica-container">
            {seleccionar ? (
                <Seleccion />
            ) : (
                <Aleatorio />
            )}
        </div>
    );
}
 
export default Matematica;