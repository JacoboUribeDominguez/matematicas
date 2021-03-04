import React, { useState, useEffect } from 'react';

import { Button } from 'react-bootstrap'

const Aleatorio = () => {

    const [multiplicacion, setMultiplicacion] = useState({
        multiplicacionActivo : false,
        multiplicacionNum1 : 0,
        multiplicacionNum2 : 0,
        multiplicacionRespuesta : 0,
        multiplicacionEquivocado : false
    });

    const [respuesta, setRespuesta] = useState(0);
    const [correcta, setCorrecto] = useState(true);

    const { multiplicacionActivo, multiplicacionNum1, multiplicacionNum2, multiplicacionRespuesta, multiplicacionEquivocado } = multiplicacion;

    const onChange = (e) => {
        setRespuesta(e.target.value)
    } 

    const toggleSubmit = (e) => {
        e.preventDefault()
        if(respuesta === multiplicacionRespuesta){
            alert('bien')
            setMultiplicacion({
                multiplicacionActivo : false,
                multiplicacionNum1 : 0,
                multiplicacionNum2 : 0,
                multiplicacionRespuesta : 0,
                multiplicacionEquivocado : false
            })
        } else {
            setCorrecto(false);
        }
    }

    const toggleClick = () => {
        //numero aleatorio que defina los problemas multiplicación y división
        const operacion = Math.floor(Math.random() * (3 - 1)) + 1;

        setMultiplicacion({
            multiplicacionActivo : false,
            multiplicacionNum1 : 0,
            multiplicacionNum2 : 0,
            multiplicacionRespuesta : 0,
            multiplicacionEquivocado : false
        })

        switch(operacion){
            case 1:
                //numeros aleatorios en la multiplicación
                const num1 = Math.floor(Math.random() * (16 - 3)) + 3;
                const num2 = Math.floor(Math.random() * (16 - 3)) + 3;
                const respuesta = num1 * num2;
                setMultiplicacion({
                    ...multiplicacion,
                    multiplicacionActivo : true,
                    multiplicacionNum1 : num1,
                    multiplicacionNum2 : num2,
                    multiplicacionRespuesta : respuesta
                })
                break;

            case 2:
                //numeros aleatorios en caso de division
                break;

            default:
                break;
        }

        

        
    }

    return ( 
        <div className="d-flex justify-content-center flex-column">
            <Button variant="outline-light" className="width-100"  onClick={toggleClick}>
                Comprobar operación
            </Button>
            {
                multiplicacionActivo ? (
                    <div 
                        className="d-flex 
                            justify-content-center 
                            align-items-center
                            flex-column 
                            width-100 
                            p-3 
                            my-5
                            contenedor-multiplicacion">
                        <div className="width-100 text-center">
                            {multiplicacionNum1}
                        </div>
                        <div className="width-100 text-center">
                            x
                        </div>
                        <div className="width-100 text-center">
                            {multiplicacionNum2}
                        </div>
                        <form className="width-100" onSubmit={() => toggleSubmit()}>
                            <div>
                                <input 
                                    type="number" 
                                    className={correcta ? 'bg-blanco' : 'bg-incorrecto'}
                                    value={respuesta}
                                    onChange={onChange}
                                    style={{
                                        marginTop:'1.3rem',
                                        border:'none',
                                        width:'3rem',
                                        height:'2.3rem'
                                    }}/>
                                <button 
                                    style={{
                                        border:'none',
                                        width:'2rem',
                                        color: 'white',
                                        background:'rgb(31, 170, 180)',
                                        height:'2.3rem'
                                    }}
                                    type="submit">
                                        {`>`}
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    null
                )
            }

        </div>
    );
}
 
export default Aleatorio;