import React, { useState } from 'react';
import { FormInput } from './FormInput';

import '../02-useEffect/effects.css';




export const CountWithForm = () => {


    const [inputValue, setInputValue] = useState( 0 )

    const handleSubmit = ( e ) => {
        e.preventDefault()
        console.log( inputValue );
    };



    const handleInput = ( e ) => {
        setInputValue( e.target.value );
    };

    




    return (


            <form onSubmit={ handleSubmit }>

                <FormInput value={ inputValue}/>


                <div className='form-group'>
                    <input 
                        type='number' 
                        onChange={ handleInput }
                        value={ inputValue }
                        className='form-control'
                    />
                </div>


                {/* <button
                    type='submit'
                    className='btn btn-primary'
                >
                    Save
                </button> */}

            </form>


    );
};
