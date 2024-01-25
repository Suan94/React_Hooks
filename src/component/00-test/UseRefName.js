import React, { useRef } from 'react';




export const UseRefName = () => {

    const nombre = useRef( 'Suan' );


    const handleName = (  ) => {
        nombre.current = 'Pedro';
        console.log( nombre.current );
    };




    return (


            <>

                <h2> { nombre.current } </h2>

                <button
                    className='btn btn-primary'
                    onClick={ handleName }
                >
                    Cambiar nombre
                </button>

            </>


    );
};
