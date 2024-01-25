import React, { useRef } from 'react';

import '../02-useEffect/effects.css';



export const FocusScreen = () => {

    
    const inputRef = useRef();






    const handleClick = (  ) => {
        // document.querySelector('input').focus();
        // document.querySelector('input').select();
        inputRef.current.select();
    };


    




    return (


            <>

                <h1> FocusScreen </h1>
                <hr />

                <input
                    ref={ inputRef } 
                    className='form-control'
                    placeholder='Su nombre' 
                />

                <button 
                    className='btn btn-outline-primary mt-2'
                    onClick={ handleClick }
                >
                    Focus
                </button>


            </>


    );
};
