import React, { useState, useEffect } from 'react';
import "./seleccion.css"
import { Row, Col } from 'react-bootstrap'

import Operaciones from '../operaciones/operaciones.js'

const Seleccion = () => {

    const [ multiplicacionActiva, setMultiplicacionActiva ] = useState(false);
    const [ mostrarOperaciones, setMostrarOperaciones] = useState(false);

    useEffect(() => {
        console.log('hi')
    })

    const toggleClick = (multiplicacion) => {
        if(multiplicacion){
            setMostrarOperaciones(true);
            setMultiplicacionActiva(true);
        } else {
            setMostrarOperaciones(true);
            setMultiplicacionActiva(false);
        }
    }

    return ( 
        <div style={{width:'100%'}}>
            <Row className="header-seleccion">
                <Col className="text-center p-3 opcionSeleccion" onClick={() => toggleClick(true)}>
                    Multiplicación
                </Col>
                <Col className="text-center p-3 opcionSeleccion" onClick={() => toggleClick(false)}>
                    División
                </Col>
            </Row>
            <Row className="operacionesSeleccion">
                {
                    mostrarOperaciones ? (
                        <Col className="text-center">
                            {
                                multiplicacionActiva ? (
                                    <Operaciones 
                                        aleatorioProp={false}
                                        numAleatorioProp={1}
                                    />
                                ) : (
                                    <Operaciones 
                                        aleatorioProp={false}
                                        numAleatorioProp={2}
                                    />
                                )
                            }
                        </Col>
                    ) : (
                        null
                    )
                }
            </Row>
        </div> 
    );
}
 
export default Seleccion;