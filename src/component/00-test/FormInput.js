import React, { useEffect, useState } from 'react';
// import { UseCounter } from '../../hooks/useCounter';





export const FormInput = ({ value }) => {
    
    const [counter, setCounter] = useState( value );
    
    
    useEffect(() => {       
        setCounter(value);
    }, [ value ]); 
    
    const increment = (  ) => {
        setCounter( counter + 1);
    };
    



    return (


            <>

                <h1>Formulario con Contador</h1>
                <p>Valor: { counter }</p>
                <hr />

                <button type='button' className='btn btn-primary' onClick={ increment }> + 1 </button>

            </>


    );
};
