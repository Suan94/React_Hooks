import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css'



const init = (  ) => {

    return JSON.parse( localStorage.getItem( 'todos' ))    ||  [];
    
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
};





export const TodoApp = () => {


    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ));
    
    }, [ todos ]);
    

    const handleDelete = ( todoID ) => {
        
        const action = {
            type: 'delete',
            payload: todoID
        };

        dispatch( action );
    };


    const handleToggle = ( todoID ) => {
        
        dispatch({
            type: 'toggle',
            payload: todoID
        });
    };

    const handleAddTodo = ( newTodo ) => {
        
        dispatch({
            type: 'add',
            payload: newTodo
        });
    };




    return (


            <>

                <h1> TodoApp ({ todos.length }) </h1>
                <hr />

                <div className='row'>

                    <div className='col-7'>

                        <TodoList 
                            todos={ todos }
                            handleDelete={ handleDelete }
                            handleToggle={ handleToggle }
                        />

                    </div>
                     
                    <div className='col-5'>
                        <TodoAdd 
                            handleAddTodo={ handleAddTodo }
                        />
                    </div>
                </div>



            </>


    );
};
