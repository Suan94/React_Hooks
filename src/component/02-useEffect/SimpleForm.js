import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css'




export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        nombre: '',
        correo: ''
    });


    const { nombre, correo } = formState;

    useEffect(() => {

        console.log('useEffect');

    }, []);



    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }; 


    return (


            <>

                <h1> useEffect </h1>
                <hr />

                <div className='form-group'>
                    <input 
                        type='text'
                        name='nombre'
                        className='form-control'
                        placeholder='Tu nombre'
                        autoComplete='off'
                        value={ nombre } 
                        onChange={ handleInputChange }
                    />
                </div>


                <div className='form-group'>
                    <input 
                        type='email'
                        name='correo'
                        className='form-control'
                        placeholder='email@gmail.com'
                        autoComplete='off'
                        value={ correo } 
                        onChange={ handleInputChange }
                    />
                </div>


                {( nombre === '123' ) && <Message /> }





            </>


    );
};
