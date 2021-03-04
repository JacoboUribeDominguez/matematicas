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

    const [division, setDivision] = useState({
        divisionActivo : false,
        divisionNum1 : 0,
        divisionNum2 : 0,
        divisionRespuesta : 0,
        divisionEquivocado : false
    });

    const [respuesta, setRespuesta] = useState(0);
    const [correcto, setCorrecto] = useState(true);

    const { multiplicacionActivo, multiplicacionNum1, multiplicacionNum2, multiplicacionRespuesta, multiplicacionEquivocado } = multiplicacion;
    const { divisionActivo, divisionNum1, divisionNum2, divisionRespuesta, divisionEquivocado } = division;

    const onChange = (e) => {

        const valoresValidos = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '', '.'];

        const { value } = e.target

        if(valoresValidos.find(element => element === value[value.length-1])){
            setRespuesta(value)
        }
        setRespuesta(value)
    } 

    const toggleSubmit = (e) => {
        e.preventDefault();
        if(multiplicacionActivo){
            if(parseInt(respuesta) === (multiplicacionNum1 * multiplicacionNum2)){
                setRespuesta(0);
                setMultiplicacion({
                    multiplicacionActivo : false,
                    multiplicacionNum1 : 0,
                    multiplicacionNum2 : 0,
                    multiplicacionRespuesta : 0,
                    multiplicacionEquivocado : false
                });
                setCorrecto(true);
                toggleClick();
            } else {
                setCorrecto(false);
            }
        } else if (divisionActivo) {
            if(parseInt(respuesta) === parseFloat(divisionNum1 / divisionNum2) || parseFloat(respuesta).toFixed(2) === parseFloat(divisionNum1 / divisionNum2).toFixed(2)){
                setRespuesta(0);
                setDivision({
                    divisionActivo : false,
                    divisionNum1 : 0,
                    divisionNum2 : 0,
                    divisionRespuesta : 0,
                    divisionEquivocado : false
                })
                setCorrecto(true);
                toggleClick();
            } else {
                setCorrecto(false);
            }
        } else {
            alert('hubo un error inesperado')
        }
        
    }

    const toggleClick = () => {
        //numero aleatorio que defina los problemas multiplicación y división
        const operacion = Math.floor(Math.random() * (3 - 1)) + 1;

        let num1, num2, respuesta;
        switch(operacion){
            case 1:
                //numeros aleatorios en la multiplicación
                num1 = Math.floor(Math.random() * (16 - 3)) + 3;
                num2 = Math.floor(Math.random() * (16 - 3)) + 3;
                respuesta = num1 * num2;
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
                num1 = Math.floor(Math.random() * (16 - 3)) + 3;
                num2 = Math.floor(Math.random() * ((num1-1) - 3)) + 3;
                respuesta = num1 * num2;
                setDivision({
                    ...division,
                    divisionActivo : true,
                    divisionNum1 : num1,
                    divisionNum2 : num2,
                    divisionRespuesta : respuesta
                })
                break;

            default:
                alert('hubo un error inesperado')
                break;
        }

        

        
    }

    return ( 
        <div className="d-flex justify-content-center flex-column">
            <Button variant="outline-light" className="width-100"  onClick={toggleClick}>
                Comprobar operación
            </Button>
            {
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
                            {multiplicacionActivo ? multiplicacionNum1 : divisionNum1}
                        </div>
                        <div className="width-100 text-center">
                            {multiplicacionActivo ? 'x' : '/'}
                        </div>
                        <div className="width-100 text-center">
                            {multiplicacionActivo ? multiplicacionNum2 : divisionNum2}
                        </div>
                        <div className="text-center">
                            {multiplicacionActivo ? null : 'Si es decimal puede ser con 2 digitos después de la coma, ej : 2.00'}
                        </div>
                        <form className="width-100" onSubmit={toggleSubmit}>
                            <div>
                                {
                                    correcto ? (
                                        <input 
                                            type="text" 
                                            value={respuesta}
                                            onChange={onChange}
                                            style={{
                                                marginTop:'1.3rem',
                                                border:'none',
                                                width:'3rem',
                                                height:'2.3rem',
                                                backgroundColor: 'white'
                                            }}/>
                                    ) : (
                                        <input 
                                            type="text" 
                                            value={respuesta}
                                            onChange={onChange}
                                            style={{
                                                marginTop:'1.3rem',
                                                border:'none',
                                                width:'3rem',
                                                height:'2.3rem',
                                                backgroundColor: 'rgb(204, 70, 70)'
                                            }}/>
                                    )
                                }
                                
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
            }

        </div>
    );
}
 
export default Aleatorio;