import React from 'react';
import { UseCounter } from '../../hooks/useCounter';

import './counter.css'





export const CounterWithCustomeHook = () => {

    


    const { increment, decrement, reset, counter } = UseCounter();
    
   


    return (


            <>

                <h1> CounterWithCustomeHook: { counter } </h1>
                <hr />

                <button type='button' className='btn btn-primary' onClick={ increment }> + 1 </button> 
                <button type='button' className='btn btn-primary' onClick={ decrement }> - 1 </button>
                <button type='button' className='btn btn-primary' onClick={ reset }> Reset </button>


            </>


    );
};


