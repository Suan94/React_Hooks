import React from 'react';
import { UseFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effects.css';



export const MultipleCustomHooks = () => {

    const { increment, counter } = useCounter( 1 );
    const { loading, data } = UseFetch( `https://api.breakingbadquotes.xyz/v1/quotes/${ counter }` );
    const { author, quote } = !!data && data[0];
    



    return (


            <>

                <h1> BreakingBad Quotes </h1>
                <hr />


                {
                    loading
                        ?
                                (
                                    <div className='alert alert-info text-center'>
                                        loading...
                                    </div>        
                                )
                        :
                                (
                                    <div className='blockquote text-right'>
                                        <p className='text-right mb-0'> { quote } </p>
                                        <footer className='text-right blockquote-footer mt-0'> { author } </footer>
                                    </div>

                                )
                }


                <button className='btn btn-primary' onClick={ increment }>
                    Next quote
                </button>

            </>


    );
};
