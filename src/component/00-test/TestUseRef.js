import React, { useEffect, useRef, useState } from 'react';
import { UseRefName } from './UseRefName';




export const TestUseRef = () => {


    const [ counter, setCounter ] = useState( 0 );
    const refCounter = useRef( 0 );


    
    useEffect(() => {
        if( refCounter.current === 0 ){
            refCounter.current ++;
            return
        }    
            console.log( `El contador tiene valor de: ${ counter }` );
           
    
    }, [counter])
    
   
    


    const handleCounter = (  ) => {
        setCounter( counter + 1 );
    };


    



    return (


            <>

                <h1> Test </h1>
                <hr />
                <h2> Counter: { counter } </h2>
                <button
                    className='btn btn-primary' 
                    onClick={ handleCounter}
                >
                    +1
                </button>
                <hr />


                <UseRefName />
                

            </>


    );
};
