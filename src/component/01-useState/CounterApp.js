import React, { useState } from 'react';
import './counter.css'




export const CounterApp = () => {



    const [ counter, setCounter] = useState({
        counter1: 10,
        counter2: 20
    });

    const { counter1, counter2 } = counter;
    console.log( counter1, counter2 );
    

    const incremet = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        })
    };


    return (


            <>

                <h1> CounterApp { counter1 } </h1>
                <h1> CounterApp { counter2 } </h1>
                <hr />


                <button
                    className='btn btn-primary'
                    onClick={ incremet }
                >
                    Add + 1
                </button>

            </>


    );
};
