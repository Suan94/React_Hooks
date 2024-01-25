import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/procesoPesado';

import '../02-useEffect/effects.css'



export const MemoHook = () => {



    const { increment, counter } = useCounter( 5000 );
    const [show, setShow] = useState( true );
    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ]);
    




    return (


            <>

                <h1> Counter: <small>{ counter }</small>  </h1>
                <hr />
                
                <p>{ memoProcesoPesado }</p>

                <button
                    className='btn btn-primary'
                    onClick={ increment }
                >
                    Add 1
                </button>

                <button
                    className='btn btn-outline-primary ml-2'
                    onClick={ () => { 
                        setShow( !show ) }
                    }
                >
                    Show/Hide {JSON.stringify( show )}
                </button>
            </>


    );
};
