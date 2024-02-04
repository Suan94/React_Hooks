import { useState } from "react";



export const UseForm = ( inicialState = {} ) => {

    const [ values, setValues ] = useState( inicialState );

    const reset = (  ) => {
        setValues( inicialState );
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }; 


    return [ values, handleInputChange, reset ];

};
