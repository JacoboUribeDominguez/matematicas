import React from 'react';
import "./Header.css";

const Header = ({ setSeleccionar }) => {

    const toggleClick = (opcion) => {
        if(opcion){
            setSeleccionar(true);
        } else {
            setSeleccionar(false);
        }
    }

    return ( 
        <header className="header-container container">
            <ul className="list-header d-flex justify-content-center align-items-center">
                <li className="px-3 li-opcion" onClick={() => toggleClick(true)}>
                    Seleccionar
                </li>
                <li className="px-3">
                    <h2 style={{userSelect:'none'}}>
                        BIENVENIDOS
                    </h2>
                </li>
                <li className="px-3 li-opcion" onClick={() => toggleClick(false)}>
                    Aleatorio
                </li>
            </ul>
        </header>
     );
}
 
export default Header;