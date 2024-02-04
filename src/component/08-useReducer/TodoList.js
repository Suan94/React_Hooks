import React from 'react';
import { TodoListItem } from './TodoListItem';
import PropTypes from 'prop-types';



export const TodoList = ({ todos, handleDelete, handleToggle }) => {


    return (


        <ul className='list-group list-group-flush'>
            { 
                todos.map(( todo, i ) => (
                    <TodoListItem
                        key={ todo.id }
                        todo={ todo }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                        i={ i }
                    />
                ))
            }
        </ul>


    );
};


TodoListItem.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired,
    todo: PropTypes.object.isRequired,
};
