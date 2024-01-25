import React, { useLayoutEffect, useRef, useState } from 'react';
import { UseFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import './layout.css';



export const Layout = () => {

    const { increment, counter } = useCounter( 1 );
    const { data } = UseFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }` );
    const { quote } = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});


    useLayoutEffect(() => {
      
        setBoxSize( pTag.current.getBoundingClientRect() );
    
    }, [ quote ]);




    return (


            <>

                <h1> Layout Effect </h1>
                <hr />


                <div className='blockquote text-right'>
                    <p 
                        className='text-right mb-0'
                        ref={ pTag }
                    > 
                        { quote } 
                    </p>
                </div>

                <pre>
                    {
                        JSON.stringify( boxSize, null, 3 )
                    }
                </pre>


                <button 
                    className='btn btn-primary' 
                    onClick={ increment }
                >
                    Next quote
                </button>

            </>


    );
};
