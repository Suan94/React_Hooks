import React, { useState } from 'react';





export const TestReducer = () => {


    const [ inputValue, setInputValue ] = useState({
        name: '',
        email: ''
    });

    const { name, email } = inputValue;

    const handleInputChange = ({ target }) => {
        setInputValue({
            ...inputValue,
            [ target.name ]: target.value
        });
    };

    



    return (


            <>

                <h1> TestReducer </h1>
                <hr />

                <div className='form-group'>

                    <input 
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Nombre'
                        autoComplete='off'
                        value={ name }
                        onChange={ handleInputChange }
                    />

                </div>


            </>


    );
};
