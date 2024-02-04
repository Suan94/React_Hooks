import React from 'react';
import { UseForm } from '../../hooks/useForm';





export const TodoAdd = ({ handleAddTodo }) => {


    const [{ description }, handleInputChange, reset ] = UseForm({
        description: '',
    });

    const handleSubmit = ( e ) => {
        e.preventDefault();


        if( description.trim().length === 0 )
            return;
    
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();
    };




    return (


        <>

            <h4> Agregar TODO </h4>
            <hr />

            <form onSubmit={ handleSubmit }>
                <input
                    autoComplete='off'
                    className='form-control' 
                    name='description'
                    onChange={ handleInputChange }
                    placeholder='Aprender...'
                    type='text'
                    value={ description }
                />

                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'
                >
                    Agregar
                </button>
            </form>

        </>


    );
};
