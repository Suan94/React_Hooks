import React, { useContext } from 'react';
import { UserContext } from './UserContext';




export const LoginScreen = () => {



    const { setUser } = useContext( UserContext );




    const handleOnClick = () => {
        setUser({
            id: Math.random(),
            nombre: 'Suan'
        })
    };


    return (


            <>

                <h1> LoginScreen </h1>
                <hr />


                <button 
                    className='btn btn-primary'
                    onClick={ handleOnClick }
                >
                    Login
                </button>
            </>


    );
};
