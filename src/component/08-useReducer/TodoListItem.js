import React from 'react';
import PropTypes from 'prop-types';





export const TodoListItem = ({ todo, handleDelete, handleToggle, i }) => {




    




    return (


        <li
            key={ todo.id }
            className='list-group-item'
        >
        <p className={ `${ todo.done && 'complete'}` }
            onClick={ () => handleToggle( todo.id ) }
        >
            { i + 1 }. { todo.desc }
        </p>
        <button
            className='btn btn-danger'
            onClick={ () => handleDelete( todo.id )}
        >
            Borrar    
        </button>
        </li>


    );
};



TodoListItem.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
};