import React from 'react';
import { UseForm } from '../../hooks/useForm';

import './effects.css'



export const FormWithCustomHook = () => {


    const [ formValues, handleInputChange ] = UseForm({
        nombre: '',
        correo: '',
        password: ''
    });


    const { nombre, correo, password } = formValues;


    const handleSubmit = ( e ) => {
        e.preventDefault();
    };




    return (


            <form onSubmit={ handleSubmit }>

                <h1> FormWithCustomHook </h1>
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


                <div className='form-group'>
                    <input 
                        type='password'
                        name='password'
                        className='form-control'
                        placeholder='******'
                        value={ password } 
                        onChange={ handleInputChange }
                    />
                </div>



                <button
                    type='submit'
                    className='btn btn-primary'
                >
                    Save
                </button>


            </form>


    );
};


